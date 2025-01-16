import { useTranslation } from 'react-i18next';
import { useGetScoresAvgQuery } from 'entities/score';
import { useQueryStatus } from 'shared/lib/useQueryStatus';

export function useRadarDiagramData({ type, postId, sport }) {
    const scoresAvgQuery = useGetScoresAvgQuery({ type: type, postId: postId, sport: sport }, { refetchOnMountOrArgChange: false });
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    const { t } = useTranslation();

    if (scoresAvgStatus) {
        return { status: scoresAvgStatus }
    };

    const { data: dataAvgQuery } = scoresAvgQuery;

    const values = dataAvgQuery?.reduce((acc, {
        avg_rating_type: typeRating,
        avg_rating_value: value
    }) => {
        if (typeRating === 'overall_rating') return acc;
        const name = t(`skills${typeRating}`);
        acc.labels.push(name);
        acc.data.push(value);
        return acc;
    }, { labels: [], data: [] })

    return {
        status: null,
        dataDiagram: {
            labels: values.labels,
            datasets: [{
                data: values.data,
                fill: true,
                backgroundColor: 'rgba(173, 181, 189, 0.2)',
                borderColor: 'rgb(173, 181, 189)',
                pointBackgroundColor: 'rgb(173, 181, 189)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }]
        }
    }

}