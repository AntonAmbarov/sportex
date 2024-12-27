import React from "react";
import cn from "classnames";

function Btn({
    variant = 'primary',
    type = 'button',
    className,
    children,
    ...props
}) {
    return (
        <button
            className={cn('btn', `btn-${variant}`, className)}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
}

function BtnSecondary(props) {
    return (
        <Btn {...props} variant="secondary" />
    )

}

function BtnLight(props) {
    return (
        <Btn {...props} variant="light" />
    )

}

function BtnLink(props) {
    return (
        <Btn {...props} variant="link" />
    )
}

export {
    Btn,
    BtnSecondary,
    BtnLight,
    BtnLink
}