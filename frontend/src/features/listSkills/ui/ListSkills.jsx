import React from 'react';
import { useTranslation } from 'react-i18next';
import { ListGroup } from 'react-bootstrap';
import { SkillLine } from 'shared/ui/skillLine';
import { ReatingButton } from './ReatingButton';
import { useGetScoresAvgQuery } from 'entities/score';
import { useQueryStatus } from 'shared/lib/useQueryStatus';

export function ListSkills({ data }) {
    const { t } = useTranslation();
    const { type, postId, sport } = data;
    const scoresAvgQuery = useGetScoresAvgQuery({ type: type, postId: postId, sport: sport });
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    if (scoresAvgStatus) return scoresAvgStatus;
    const { data: dataAvgQuery } = scoresAvgQuery;

    const renerdScoreList = () => {
        return dataAvgQuery.map(({ avg_rating_type, avg_rating_value }) => {
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
                {renerdScoreList()}
            </ListGroup>
            <ReatingButton />
        </>
    )
}