import React, { lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { RatingButton } from './RatingButton';
import { SkillLine } from './SkillLine';
import { selectReatingOffcanvas } from 'shared/model/ui'
import { useScoresData } from '../model/useScoresData';
const RatingForm = lazy(() => import('./RatingForm'));

const ScoreList = ({ scores, t }) => {
    return scores.map(({
        avg_rating_type,
        avg_rating_value
    }) => {
        const name = t(`skills.${avg_rating_type}`);
        const value = avg_rating_value;

        return (
            <li className="list-group-item mb-3" key={avg_rating_type}>
                <SkillLine name={name} score={value} />
            </li>
        )
    }
    )
}

export function ListSkills({ data }) {
    const { t } = useTranslation();
    const { type, postId, sport } = data;

    const { scores = [], status } = useScoresData(type, postId, sport);
    const { isShow: isShowForm } = useSelector(selectReatingOffcanvas);

    if (status) return status;

    return (
        <div>
            <ul className="list-group-flush mb-3">
                {scores.length > 0 && <ScoreList scores={scores} t={t} />}
            </ul>

            <RatingButton />
            <Suspense
                fallback={<div>{t('ui.loading')}</div>}
            >
                {isShowForm && <RatingForm data={data} />}
            </Suspense>
        </div>
    )
}