import React from "react";
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

import { openReatingOffcanvas, selectStatusAuth } from "shared/model/ui";

const styleButton = (flag) => cn('btn', {
    'btn-primary': flag,
    'btn-secondary': !flag,
})

const StatusButton = ({ className, disabled, children }) => {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => dispatch(openReatingOffcanvas())}
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export function RatingButton() {

    const isAuth = useSelector(selectStatusAuth);
    const { t } = useTranslation();

    const renderTooltip = (props) => (
        <Tooltip
            id="button-tooltip"
            className="text-muted mx-3"
            {...props}>
            {t('messages.availableAuthorized')}
        </Tooltip>
    );



    return (
        <div>
            {!isAuth ?
                <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                >
                    <div className="d-inline-block">{
                        <StatusButton
                            className={styleButton(isAuth)}
                            disabled={true}
                        >
                            {t('ui.rate')}
                        </StatusButton>
                    }</div>
                </OverlayTrigger> :
                <StatusButton
                    className={styleButton(isAuth)}
                >
                    {t('ui.rate')}
                </StatusButton>
            }
        </div >
    )
}