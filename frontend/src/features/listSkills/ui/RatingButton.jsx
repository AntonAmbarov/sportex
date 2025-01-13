import React from "react";
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { openReatingOffcanvas, selectStatusAuth } from "shared/model/ui";
import { Btn } from "shared/ui/button";
import { Tooltip } from "shared/ui/tooltip";

const styleButton = (flag) => cn('btn', {
    'btn-primary': flag,
    'btn-secondary': !flag,
})

const StatusButton = ({ className, disabled, children }) => {
    const dispatch = useDispatch();

    return (
        <Btn
            onClick={() => dispatch(openReatingOffcanvas())}
            className={className}
            disabled={disabled}
        >
            {children}
        </Btn>
    )
}

export function RatingButton() {

    const isAuth = useSelector(selectStatusAuth);
    const { t } = useTranslation();

    return (
        <>
            {!isAuth
                ? <Tooltip
                    as={'span'}
                    placement='right'
                    message={t('messages.availableAuthorized')}
                >
                    <StatusButton className={styleButton(isAuth)} disabled={!isAuth}>
                        {t('ui.rate')}
                    </StatusButton>
                </Tooltip>
                : <StatusButton className={styleButton(isAuth)} disabled={!isAuth}>
                    {t('ui.rate')}
                </StatusButton>
            }
        </>
    )
}