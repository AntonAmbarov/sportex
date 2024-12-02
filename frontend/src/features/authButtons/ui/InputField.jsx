import React from 'react';
import { Field } from 'formik';
import cn from 'classnames';

const styleField = (isError) => {
    return cn('form-control', {
        'is-invalid': isError
    })
}

export function InputField({ textLabel, name, placeholder, errors, touched, type = 'text' }) {
    return (
        <div className="form-group mb-3">

            <label
                htmlFor={name}
                className='form-label'
                hidden
            >{textLabel}</label>

            <Field
                type={name}
                name={name}
                placeholder={placeholder}
                className={styleField(errors.username && touched.username)}
            />

            {errors.username && touched.username ?
                <div className='invalid-feedback'>{errors.username}</div> :
                null}

        </div>
    )
}