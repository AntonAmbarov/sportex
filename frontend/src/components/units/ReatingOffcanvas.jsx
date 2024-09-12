import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { closeReatingOffcanvas } from "../../slices/ui";
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap'
import i18n from "../../config/i18n";
import grades from "../../config/grades";

function ReatingOffcanvas({ type, id }) {

    const { isShow } = useSelector(state => state.ui.reatingOffcanvas)
    const dispatch = useDispatch();
    const { features } = i18n[type];

    const initialValues = features.reduce((acc, { key }) => {
        acc[key] = 0;
        return acc;
    }, {})

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <Offcanvas show={isShow} onHide={() => dispatch(closeReatingOffcanvas())}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Оцените навыки</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={formik.handleSubmit}>
                    {features.map(({ key, name }) => (
                        <Form.Group key={key}>
                            <Form.Label htmlFor={key}>{name}</Form.Label>
                            <Form.Range
                                id={key}
                                min={grades.min}
                                max={grades.max}
                                onChange={formik.handleChange}
                                value={formik.values[key]}
                            />
                        </Form.Group>
                    ))}
                    <Button type='submit'>Отправить</Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default ReatingOffcanvas;