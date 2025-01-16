import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip } from 'chart.js';

import { Card, CardBody } from 'shared/ui/card';
import { useRadarDiagramData } from '../model/useRadarDiagramData';
import { options } from '../config/options';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

export function RadarDiagram({ data }) {

    const { status, dataDiagram } = useRadarDiagramData(data);

    if (status) return status;

    return (
        <Card>
            <CardBody>
                <Radar data={dataDiagram} options={options} />
            </CardBody>
        </Card>
    )
}