import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusAuth } from 'shared/model/ui';
import { removeProfil } from 'shared/model/currentUser';

export function UserBlock() {

    const dispatch = useDispatch();
    const userName = useSelector(state => state.authorizedUser.userName);

    const handleExit = () => {
        dispatch(toggleStatusAuth(false));
        dispatch(removeProfil());
        localStorage.removeItem('currentUser');
    }

    return (
        <div className="col-md-3 text-end">
            <Dropdown>
                <Dropdown.Toggle variant="secondary">
                    {userName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#" onClick={handleExit}>Выход</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}