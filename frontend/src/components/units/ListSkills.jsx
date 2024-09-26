import React from "react";
import { ListGroup } from "react-bootstrap";
import i18n from "../../config/i18n";
import SkillLine from "./SkillLine";
import ReatingButton from "./ReatingButton";

function ListSkills({ data }) {

    return (
        <>
            <ListGroup className="list-group-flush mb-3">
                {data.map(({ avg_rating_type, avg_rating_value }) => {
                    if (avg_rating_type !== 'overall_rating') {
                        const name = i18n.team.features[avg_rating_type];
                        const value = avg_rating_value;
                        return (
                            <ListGroup.Item key={avg_rating_type}>
                                <SkillLine name={name} score={value} />
                            </ListGroup.Item>
                        )
                    }
                }
                )}
            </ListGroup>
            <ReatingButton />
        </>
    )
}

export default ListSkills;