import React, { useState } from 'react';
import { CustomFilterMenu } from './CustomFilterMenu';
import { Btn, BtnSecondary } from 'shared/ui/button';

export function Filter({ title, options, onSelect }) {
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
        <div className="dropdown">
            <BtnSecondary
                className="dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
                {activeTitle}
            </BtnSecondary>

            <div className="dropdown-menu">
                {/* Custom Filter Menu */}
                <CustomFilterMenu onReset={handleReset}>
                    {ids.map((id) => {
                        const name = entities[id].title.rendered;
                        return (
                            <Btn
                                key={id}
                                className={`dropdown-item ${id === activeId ? 'active' : ''}`}
                                onClick={() => handleSelect(id)}
                            >
                                {name}
                            </Btn>
                        );
                    })}
                </CustomFilterMenu>
            </div>
        </div>
    );
}