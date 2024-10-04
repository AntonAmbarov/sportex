import React from "react";
import formatDate from "../../utils/formatDate";
import { Badge, Col, ListGroup } from "react-bootstrap";
import { useGetAllScoresQuery } from "../../services/api/apiScores";
import useQueryStatus from "../../hooks/useQueryStatus";
import { useTranslation } from "react-i18next";

const convertData = (data) => {
    const result = data.reduce((acc, {
        rating_date: ratingDate,
        user_name: userName,
        rating_value: ratingValue
    }) => {
        const date = formatDate(ratingDate);

        const entry = acc[date] || { userList: new Set(), scoresList: [] };
        entry.userList.add(userName);
        entry.scoresList.push(Number(ratingValue));
        acc[date] = entry;

        return acc;
    }, {})
    return Object.entries(result);
}

const sortData = (data) => {
    return data.sort((a, b) => {
        const dateA = a[0].split('.').reverse().join('-');
        const dateB = b[0].split('.').reverse().join('-');
        return new Date(dateB) - new Date(dateA);
    })
}

function RecentScores({ data }) {
    const { t } = useTranslation();
    const { postId, type, sport } = data;
    const scoresQuery = useGetAllScoresQuery({ postId: postId, type: type, sport: sport });
    const scoresStatus = useQueryStatus(scoresQuery);
    if (scoresStatus) return scoresStatus;
    const { data: dataScores } = scoresQuery;

    const convertedData = convertData(dataScores);
    const sortedData = sortData(convertedData);

    const getAvg = (arr) => Math.round(arr.reduce((acc, num) => acc += num, 0) / arr.length);

    const renderList = (data) => {
        return data.map(([date, { userList, scoresList }]) => {
            const count = userList.size - 1;
            const [lastName] = userList;
            const avg = getAvg(scoresList);
            return (
                <ListGroup.Item key={date} className="d-flex justify-content-between align-items-center">
                    <Col xs={2} md={1} className="d-flex justify-content-center align-items-center flex-column">
                        <i className="bi bi-person-circle fs-1"></i>
                        <Badge bg="secondary">{count + 1}</Badge>
                    </Col>
                    <Col xs={10} md={11}>
                        <span className="fs-5">{date}</span>
                        <p>{`${lastName} ${t('messages.recentScores', { count })} ${avg}`}</p>
                    </Col>
                </ListGroup.Item>
            )
        })
    }

    return (
        <ListGroup>
            {renderList(sortedData)}
        </ListGroup>
    )
}

export default RecentScores;