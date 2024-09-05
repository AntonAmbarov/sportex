import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeReatingOffcanvas } from "../../slices/ui";
// import i18n from "../../config/i18n";

function ReatingOffcanvas({ data, id }) {

    const { isShow } = useSelector(state => state.ui.reatingOffcanvas)
    const dispatch = useDispatch();

    return (
        <Offcanvas show={isShow} onHide={() => dispatch(closeReatingOffcanvas())}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Оцените навыки</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {Object.entries(data).map(([key, value]) => {

                })}
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ReatingOffcanvas;