import React from "react";

function StarsRaintg({ score }) {
    return (
        [...Array(10)].map((_, index) => (
            <i key={index} className={
                index < score ? 'bi bi-star-fill text-warning' : 'bi bi-star text-warning'
            } />
        ))
    )
}

export default StarsRaintg;