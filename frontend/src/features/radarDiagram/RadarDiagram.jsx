import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
import { useTranslation } from 'react-i18next';
import { Card } from 'react-bootstrap';
import { GRADES } from 'shared/consts';
import { useGetScoresAvgQuery } from 'services/api/apiScores';
import { useQueryStatus } from 'shared/lib/useQueryStatus';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export function RadarDiagram({ data }) {
    const { type, postId, sport } = data;
    const scoresAvgQuery = useGetScoresAvgQuery({ type: type, postId: postId, sport: sport }, { refetchOnMountOrArgChange: false });
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    const { t } = useTranslation();
    if (scoresAvgStatus) return scoresAvgStatus;
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
    const dataDiagram = {
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

    const options = {
        scales: {
            r: {
                pointLabels: {
                    display: false,
                },
                ticks: {
                    beginAtZero: true,
                    min: GRADES.min,
                    max: GRADES.max,
                },
            },
        },
    };

    return (
        <Card className="mb-3">
            <Card.Body>
                <Radar data={dataDiagram} options={options} />
            </Card.Body>
        </Card>
    )
}