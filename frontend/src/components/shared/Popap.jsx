import React, { useEffect, useState } from "react";
import { Modal } from 'react-bootstrap';

function Popap({ title, children, onClose }) {
    const [show, setShow] = useState(false);

    useEffect(() => setShow(true), []);
    const handleClose = () => {
        setShow(false);
        onClose();
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {children}
            </Modal.Body>
        </Modal>
    )
}

export default Popap;