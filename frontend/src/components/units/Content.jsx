import React, { useState } from "react";
import DOMPurify from "dompurify";
import { Button } from "react-bootstrap";
import { Collapse } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

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
    const [t] = useTranslation();

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
                {isOpen ? t('ui.hide') : t('ui.show')}
            </Button>
        </>
    )
}

export default Content;