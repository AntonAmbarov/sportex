import React, { cloneElement } from "react";

export function Dropdown({ toggle, children }) {

    const renderToggle = toggle();

    const CustomToggle = () => (
        cloneElement(renderToggle, {
            className: 'dropdown-toggle',
            'data-bs-toggle': 'dropdown',
            'aria-expanded': 'false'
        })
    )

    return (
        <div className="dropdown">
            <CustomToggle />
            <div className="dropdown-menu">
                {children}
            </div>
        </div>
    )
}