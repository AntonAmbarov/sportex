import React from "react";
import { ListGroup } from "react-bootstrap";
import SkillLine from "./SkillLine";
import ReatingButton from "./ReatingButton";
import { useGetScoresAvgQuery } from "../../services/api/apiScores";
import useQueryStatus from "../../hooks/useQueryStatus";
import { useTranslation } from "react-i18next";

function ListSkills({ data }) {
    const { t } = useTranslation();
    const { type, postId, sport } = data;
    const scoresAvgQuery = useGetScoresAvgQuery({ type: type, postId: postId, sport: sport });
    const scoresAvgStatus = useQueryStatus(scoresAvgQuery);
    if (scoresAvgStatus) return scoresAvgStatus;
    const { data: dataAvgQuery } = scoresAvgQuery;

    const renerdScoreList = () => {
        return dataAvgQuery.map(({ avg_rating_type, avg_rating_value }) => {
            const name = t(`skills.${avg_rating_type}`);
            const value = avg_rating_value;
            return (
                <ListGroup.Item key={avg_rating_type}>
                    <SkillLine name={name} score={value} />
                </ListGroup.Item>
            )
        }
        )
    }

    return (
        <>
            <ListGroup className="list-group-flush mb-3">
                {renerdScoreList()}
            </ListGroup>
            <ReatingButton />
        </>
    )
}

export default ListSkills;