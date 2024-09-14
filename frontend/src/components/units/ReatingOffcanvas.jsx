import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap'
import i18n from "../../config/i18n";
import grades from "../../config/grades";
import transformScoresForApi from "../../utils/transformScoresForApi";
import { closeReatingOffcanvas } from "../../slices/ui";
import { usePostScoresTeamMutation, usePostScoresPlayerMutation } from "../../services/api/apiScores";

function ReatingOffcanvas({ type, teamId = null, participantId = null, role = null }) {

    const { isShow } = useSelector(state => state.ui.reatingOffcanvas);
    const { userId } = useSelector(state => state.authorizedUser);
    const dispatch = useDispatch();
    const [postScoresPlayer] = usePostScoresPlayerMutation();
    const [postScoresTeam] = usePostScoresTeamMutation();
    const { features } = i18n[type];

    const initialValues = features.reduce((acc, { key }) => {
        acc[key] = 0;
        return acc;
    }, {})

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: async (values) => {
            const data = transformScoresForApi({ userId: userId, participantId: participantId, teamId: teamId, values: values, role: role });
            await type === 'team' ? postScoresTeam(data).unwrap() : postScoresPlayer(data).unwrap();
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