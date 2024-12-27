import React from "react";

export function DropdownItem({ children, className, onClick, }) {

    return (
        <button
            className={`dropdown-item ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}