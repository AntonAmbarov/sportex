import React, { useState } from 'react';
import { CustomFilterMenu } from './CustomFilterMenu';
import { BtnSecondary } from 'shared/ui/button';
import { Dropdown, DropdownItem } from 'shared/ui/dropdown';

export function Filter2({ title, options, onSelect }) {
    const { ids, entities } = options;
    const [activeId, setActiveId] = useState(null);
    const [activeTitle, setActiveTitle] = useState(title);

    const handleSelect = (id) => {
        const newTitle = id ? entities[id].title.rendered : title;
        setActiveId(id);
        setActiveTitle(newTitle);
        onSelect(id);
    };

    const handleReset = () => {
        setActiveId(null);
        setActiveTitle(title);
        onSelect(null);
    };

    return (
        <Dropdown toggle={() =>
            <BtnSecondary>
                {activeTitle}
            </BtnSecondary>
        }
        >
            <CustomFilterMenu onReset={handleReset}>
                {ids.map((id) => {
                    const name = entities[id].title.rendered;
                    return (
                        <DropdownItem
                            key={id}
                            onClick={() => handleSelect(id)}
                            className={id === activeId ? 'active' : ''}
                        >
                            {name}
                        </DropdownItem>
                    );
                })}
            </CustomFilterMenu>
        </Dropdown>
    );
}