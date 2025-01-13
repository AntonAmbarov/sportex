import React, { useRef, useEffect } from "react";
import { Tooltip as BootstrapTooltip } from 'bootstrap';

export function Tooltip({
    as: Component = 'div',
    placement = 'top',
    children,
    message,
    className,
    ...props
}) {

    const tooltipRef = useRef(null);

    useEffect(() => {
        if (tooltipRef.current) {
            const tooltip = new BootstrapTooltip(tooltipRef.current, {
                container: 'body',
                trigger: 'hover',
            });

            return () => {
                tooltip.dispose();
            };
        }
    }, [message, placement]);

    return (
        <Component
            {...props}
            ref={tooltipRef}
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