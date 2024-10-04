import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Tooltip, OverlayTrigger } from "react-bootstrap";
import { openReatingOffcanvas } from "../../slices/ui";
import cn from 'classnames';
import { useTranslation } from "react-i18next";

function ReatingButton() {

    const dispatch = useDispatch();
    const { t } = useTranslation();
    const isAuth = useSelector(state => (state.authorizedUser.userId !== null));

    const styleButton = cn({
        'btn-primary': isAuth,
        'btn-secondary': !isAuth,

    })

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" className="text-muted mx-3" {...props}>
            {t('messages.availableAuthorized')}
        </Tooltip>
    );

    const renderButton = () => (
        <Button onClick={() => dispatch(openReatingOffcanvas())} className={styleButton} disabled={!isAuth}>
            {t('ui.rate')}
        </Button>
    )

    return (
        <div className="">
            {!isAuth ? <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                overlay={renderTooltip}
            >
                <div className="d-inline-block">{renderButton()}</div>
            </OverlayTrigger> : (
                renderButton()
            )}
        </div >
    )
}

export default ReatingButton;