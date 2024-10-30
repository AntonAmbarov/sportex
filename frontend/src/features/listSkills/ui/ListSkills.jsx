import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

import { useGetScoresAvgQuery } from 'entities/score';
import { useQueryStatus } from 'shared/lib/useQueryStatus';
import { RatingButton } from './RatingButton';
import { SkillLine } from './SkillLine';
const RatingForm = lazy(() => import('./RatingForm'));

export function ListSkills({ data }) {
    const { t } = useTranslation();
    const { type, postId, sport } = data;
    const scoresAvgQuery = useGetScoresAvgQuery({ type: type, postId: postId, sport: sport });
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    const isShowForm = useSelector(state => state.ui.reatingOffcanvas.isShow);
    if (scoresAvgStatus) return scoresAvgStatus;
    const { data: dataAvgQuery } = scoresAvgQuery;

    const renerdScoreList = (list) => {
        return list.map(({ avg_rating_type, avg_rating_value }) => {
            const name = t(`skills.${avg_rating_type}`);
            const value = avg_rating_value;
            return (
                <ListGroup.Item key={avg_rating_type}>
                    <SkillLine name={name} score={value} />
                </ListGroup.Item>
            )
        }
        )
    }

    return (
        <>
            <ListGroup className="list-group-flush mb-3">
                {dataAvgQuery.length > 0 && renerdScoreList(dataAvgQuery)}
            </ListGroup>
            <RatingButton />
            {isShowForm &&
                <Suspense fallback={<div>{t('ui.loading')}</div>}>
                    <RatingForm data={data} />
                </Suspense>}
        </>
    )
}