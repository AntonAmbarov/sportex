import React from 'react';
import { cn } from 'classnames';

export function Card({ className, children, ...props }) {
    return (
        <div className={cn('card', className)} {...props}>
            {children}
        </div>
    )
}

export function CardTitle({ as: Component = 'h2', className, children, ...props }) {
    return (
        <Component className={cn('card-title', className)} {...props}>
            {children}
        </Component>
    )
}

