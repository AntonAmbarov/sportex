import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import CustomFilterMenu from "../CustomFilterMenu";

function Filter({ title, options, onSelect }) {
    const { ids, entities } = options;
    const [activeId, setActiveId] = useState(null);
    const [activeTitle, setActiveTitle] = useState(title);

    const handleSelect = (eventKey) => {
        const id = Number(eventKey);
        const newTitle = eventKey ? entities[id].title.rendered : title;
        setActiveId(id);
        setActiveTitle(newTitle);
        onSelect(id);
    }

    return (

        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="secondary">
                {activeTitle}
            </Dropdown.Toggle>

            <Dropdown.Menu as={CustomFilterMenu} onReset={handleSelect}>
                {ids.map(id => {
                    const name = entities[id].title.rendered;
                    return <Dropdown.Item key={id} eventKey={id} active={id === activeId}>{name}</Dropdown.Item>
                })}
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Filter;