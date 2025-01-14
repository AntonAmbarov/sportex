import React from 'react';
import { cn } from 'classnames';

export function Card({ className, children, ...props }) {
    return (
        <div className={cn('card', className)} {...props}>
            {children}
        </div>
    )
}

export function CardBody({ className, children, ...props }) {
    return (
        <div className={cn('card-body', className)} {...props}>
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

export function CardText({ className, children, ...props }) {
    return (
        <p className={cn('card-text', className)} {...props}>
            {children}
        </p>
    )
}

export function CardImg({ src, alt, position, className, ...props }) {
    return (
        <img src={src} alt={alt} className={cn(`card-img-${position}`, className)} {...props} />
    )
}