import React from "react";
import SharedCard from "../shared/SharedCard";
import formatDate from "../../utils/formatDate";
import { Badge, Col, ListGroup } from "react-bootstrap";
// import i18n from "../../config/i18n";

const convertData = (data) => {
    const result = data.reduce((acc, item) => {

        const date = formatDate(item.rating_date);
        const userName = item.user_name;
        // const ratingType = i18n[item.rating_type];
        const ratingValue = item.rating_value;

        if (acc[date]) {
            acc[date].scoresList.push(ratingValue);
            acc[date].userList.add(userName);
        } else {
            acc[date] = {
                userList: new Set().add(userName),
                scoresList: [ratingValue],
            }
        }

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
    const convertedData = convertData(data);
    const sortedData = sortData(convertedData);

    const renderList = (data) => {
        return data.map(([date, value]) => {
            const count = value.userList.size;
            const lastName = Array.from(value.userList)[0];
            const getAvg = arr => Math.round(arr.reduce((acc, num) => acc += Number(num), 0) / arr.length);
            const avg = getAvg(value.scoresList);

            return (
                <ListGroup.Item key={date} className="d-flex justify-content-between align-items-center">
                    <Col xs={2} md={1} className="d-flex justify-content-center align-items-center flex-column">
                        <i className="bi bi-person-circle fs-1"></i>
                        <Badge bg="secondary">{count}</Badge>
                    </Col>
                    <Col xs={10} md={11}>
                        <span className="fs-5">{date}</span>
                        <p>{`${lastName} и еще ${count - 1} пользователей поставили оценки в среднем на ${avg}`}</p>
                    </Col>
                </ListGroup.Item>
            )
        })
    }

    return (
        <SharedCard title={`Последние оценки`}>
            <ListGroup>
                {renderList(sortedData)}
            </ListGroup>
        </SharedCard>
    )
}

export default RecentScores;