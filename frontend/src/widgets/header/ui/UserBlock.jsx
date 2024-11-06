import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusAuth } from 'shared/model/ui';
import { removeProfil, selectCurrentUser } from 'shared/model/currentUser';

export function UserBlock() {

    const dispatch = useDispatch();
    const { userName } = useSelector(selectCurrentUser);

    const handleExit = () => {
        dispatch(toggleStatusAuth(false));
        dispatch(removeProfil());
        localStorage.removeItem('currentUser');
    }

    return (
        <div className='col-md-3 text-end'>
            <Dropdown>
                <Dropdown.Toggle variant='secondary'>
                    {userName}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item href={`/profile/`}>Профиль</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href='#' onClick={handleExit}>Выход</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}