import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import i18n from "../../config/i18n";
import SkillLine from "./SkillLine";
import ReatingButton from "./ReatingButton";

function ListSkills({ data }) {
    // const list = i18n.team.features;


    return (
        <Card className="p-3 mb-3">
            <Card.Body>
                <Card.Title>
                    <h2>Характеристики команды</h2>
                </Card.Title>
                <ListGroup className="list-group-flush mb-3">
                    {data.map(({ avg_rating_type, avg_rating_value }) => {
                        const name = i18n.team.features[avg_rating_type];
                        const value = avg_rating_value;
                        return (
                            <ListGroup.Item key={avg_rating_type}>
                                <SkillLine name={name} score={value} />
                            </ListGroup.Item>
                        )
                    }
                    )}
                </ListGroup>
                <ReatingButton />
            </Card.Body>
        </Card>
    )
}

export default ListSkills;