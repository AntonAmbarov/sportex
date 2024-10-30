import React from 'react';
import { Button, Offcanvas, Row, Col, Badge } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import { Form } from 'react-bootstrap'
import { GRADES, SKILLSCONFIG } from 'shared/consts';
import { transformScoresForApi } from 'shared/lib/transformScoresForApi';
import { closeReatingOffcanvas } from 'shared/model/ui';
import { usePostScoresTeamMutation, usePostScoresPlayerMutation } from 'entities/score';

function RatingForm({ data }) {

    const {
        type,
        postId,
        sport,
        teamId,
        role,
    } = data;

    const { t } = useTranslation();
    const { isShow } = useSelector(state => state.ui.reatingOffcanvas);
    const { userId } = useSelector(state => state.authorizedUser);
    const dispatch = useDispatch();
    const [postScoresPlayer] = usePostScoresPlayerMutation();
    const [postScoresTeam] = usePostScoresTeamMutation();
    const skills = SKILLSCONFIG[type]?.[sport] || [];

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
                <Offcanvas.Title>{t('titles.ratingForm')}</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Form onSubmit={formik.handleSubmit}>
                    {skills.map(key => (
                        <Form.Group key={key}>
                            <Row className="justify-content-between">
                                <Col xs='auto'>
                                    <Form.Label htmlFor={key}>{t(`skills.${key}`)}</Form.Label>
                                </Col>
                                <Col xs='auto'>
                                    <Badge bg='secondary'>{formik.values[key]}</Badge>
                                </Col>
                            </Row>
                            <Form.Range
                                id={key}
                                min={GRADES.min}
                                max={GRADES.max}
                                onChange={formik.handleChange}
                                value={formik.values[key]}
                            />
                        </Form.Group>
                    ))}
                    <Button type='submit'>{t('ui.submit')}</Button>
                </Form>
            </Offcanvas.Body>
        </Offcanvas>
    )
}

export default RatingForm;