import React from "react";
import { Nav } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMenu } from "../../slices/menuSlice";

function MainMenu() {
    const state = useSelector(state => state.menu.activeMenu);
    const dispatch = useDispatch();
    const handleSelect = (selectedKey, e) => {
        e.pereventDefault();
        const id = Number(selectedKey);
        dispatch(setActiveMenu(id));
    }
    return (
        <Nav
            variant="pills"
            activeKey={state}
            onSelect={handleSelect}
            fill
            className="col-12 col-md-auto mb-2 mb-md-0 justify-content-center"
        >
            <Nav.Item>
                <Nav.Link
                    eventKey={1}
                    href="/teams"
                    className="link-dark px-2"
                >
                    Команды
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    eventKey={2}
                    href="/players"
                    className="link-dark px-2"
                >
                    Игроки
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link
                    eventKey={3}
                    href="/"
                    className="link-dark px-2"
                >
                    Виды спорта
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default MainMenu;