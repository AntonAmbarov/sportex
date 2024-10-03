import React, { useState } from "react";
import DOMPurify from "dompurify";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";

const splitContent = (text) => {
    const divText = document.createElement('div');
    divText.innerHTML = text;

    const firstP = divText.querySelector('p');
    const firstPart = firstP.innerHTML;
    firstP.remove();
    const secondPart = divText.innerHTML;
    return {
        firstPart,
        secondPart,
    }
}

function Content({ title, children }) {
    const [isOpen, setOpen] = useState(false);
    const sanitizeHTML = DOMPurify.sanitize(children);
    const { firstPart, secondPart } = splitContent(sanitizeHTML);
    return (
        <>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: firstPart }} />
            <Collapse in={isOpen}>
                <div id="collapse-content" dangerouslySetInnerHTML={{ __html: secondPart }} />
            </Collapse>
            <Button
                onClick={() => setOpen(!isOpen)}
                aria-controls="collapse-content"
                aria-expanded={isOpen}
                variant="link"
            >
                {isOpen ? 'Скрыть' : 'Развернуть'}
            </Button>
        </>
    )
}

export default Content;