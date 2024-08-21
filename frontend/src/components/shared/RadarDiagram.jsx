import React from "react";
import i18n from '../../config/i18n';
import grades from "../../config/grades";
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';
import { Card } from "react-bootstrap";

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

function RadarDiagram({ data, type }) {
    const labels = i18n[type].features.map(item => item.name);
    const scores = i18n[type].features.map(({ key }) => data.acf[key]);

    const dataDiagram = {
        labels: labels,
        datasets: [{
            data: scores,
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
                    min: grades.min,
                    max: grades.max,
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

export default RadarDiagram;