import React from 'react';
import { Dropdown, DropdownItem, DropdownDivider } from 'shared/ui/dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatusAuth } from 'shared/model/ui';
import { removeProfil, selectCurrentUser } from 'shared/model/currentUser';
import { BtnSecondary } from 'shared/ui/button';

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
            <Dropdown toggle={() =>
                <BtnSecondary>
                    {userName}
                </BtnSecondary>
            }>
                <DropdownItem as={'a'} href={`/profile/`}>Профиль</DropdownItem>
                <DropdownDivider />
                <DropdownItem as={'a'} href='#' onClick={handleExit}>Выход</DropdownItem>
            </Dropdown>
        </div>
    )
}