import React from "react";
import { Btn } from "shared/ui/button";

export function Tooltip({
    as: Component = Btn,
    placement = 'top',
    children,
    message,
    className,
    ...props
}) {
    return (
        <Component
            {...props}
            data-bs-toggle="tooltip"
            data-bs-custom-class="custom-tooltip"
            data-bs-title={message}
            className={className}
            data-bs-placement={placement}
        >
            {children}
        </Component>
    )
}