import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const CustomFilterMenu = React.forwardRef(
    ({ children, style = null, className = null, 'aria-labelledby': labeledBy, onReset }, ref) => {
        const [value, setValue] = useState('');
        const { t } = useTranslation();

        const handleReset = () => {
            setValue('');
            onReset();
        }
        return (
            <div
                ref={ref}
                style={style}
                className={className}
                aria-labelledby={labeledBy}
            >
                <Form.Control
                    autoFocus
                    className="mx-3 my-2 w-auto"
                    placeholder={t('ui.search')}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <ul className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                    )}
                </ul>
                <Button variant="link" onClick={handleReset}>
                    {t('ui.reset')}
                </Button>
            </div>
        );
    },
)

CustomFilterMenu.displayName = 'CustomFilterMenu';

export { CustomFilterMenu };