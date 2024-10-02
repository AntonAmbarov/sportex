import React from "react";
import { Button, Offcanvas, Row, Col, Badge } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap'
import i18n from "../../config/i18n";
import grades from "../../config/grades";
import transformScoresForApi from "../../utils/transformScoresForApi";
import { closeReatingOffcanvas } from "../../slices/ui";
import { usePostScoresTeamMutation, usePostScoresPlayerMutation } from "../../services/api/apiScores";
import skillsConfig from "../../config/skillsConfig";

function ReatingForm({ data }) {
    const {
        type,
        postId,
        sport,
        teamId,
        role,
    } = data;

    const { isShow } = useSelector(state => state.ui.reatingOffcanvas);
    const { userId } = useSelector(state => state.authorizedUser);
    const dispatch = useDispatch();
    const [postScoresPlayer] = usePostScoresPlayerMutation();
    const [postScoresTeam] = usePostScoresTeamMutation();
    const skills = skillsConfig[type]?.[sport] || [];

    const initialValues = skills.reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {})

    const handleSubmit = async (values) => {
        const isTeam = type === 'team';
        const param = {
            userId: userId,
            participantId: isTeam ? null : postId,
            teamId: isTeam ? postId : teamId,
            values: values,
            role: role || null,
            sport: sport
        }
        try {
            const data = transformScoresForApi(param);
            await isTeam ? postScoresTeam(data).unwrap() : postScoresPlayer(data).unwrap();
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        onSubmit: handleSubmit,
        enableReinitialize: true,
    })

    return (
        <Offcanvas show={isShow} onHide={() => dispatch(closeReatingOffcanvas())}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Оцените навыки</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={formik.handleSubmit}>
                    {skills.map(key => (
                        <Form.Group key={key}>
                            <Row className="justify-content-between">
                                <Col xs='auto'>
                                    <Form.Label htmlFor={key}>{i18n[type].features[key]}</Form.Label>
                                </Col>
                                <Col xs='auto'>
                                    <Badge bg='secondary'>{formik.values[key]}</Badge>
                                </Col>
                            </Row>
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

export default ReatingForm;