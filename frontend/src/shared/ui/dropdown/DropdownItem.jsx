import React from "react";

export function DropdownItem({ children, className, onClick, as: Component = 'button', ...props }) {

    return (
        <Component
            {...props}
            className={`dropdown-item ${className}`}
            onClick={onClick}
        >
            {children}
        </Component>
    )
}