import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import i18n from "../../config/i18n";
import SkillLine from "../shared/SkillLine";

function ListSkills({ data }) {
    const list = i18n.team.features;
    return (
        <Card className="p-3 mb-3">
            <Card.Body>
                <Card.Title>
                    <h2>Характеристики команды</h2>
                </Card.Title>
                <ListGroup className="list-group-flush">
                    {list.map(({ key, name }) => {
                        const score = data[key];
                        return (
                            <ListGroup.Item key={key}>
                                <SkillLine name={name} score={score} />
                            </ListGroup.Item>
                        )
                    }
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default ListSkills;