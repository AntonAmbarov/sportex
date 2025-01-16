import { GRADES } from 'shared/consts';

export const options = {
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