import React from "react";
import { Formik, Form } from 'formik';
import { InputField } from "./InputField";

export function CustomForm({ formInit, inputs = [], submitButtonText = 'Отправить', ...props }) {
    const { initialValues, onSubmit, validationSchema } = formInit;

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {({ errors, touched }) =>
                <Form {...props}>
                    {inputs.map((inputProps) =>
                        <InputField
                            key={inputProps.name}
                            {...inputProps}
                            errors={errors}
                            touched={touched}
                        />
                    )}
                    <input className='btn btn-primary' type='submit' value={submitButtonText} />
                </Form>}
        </Formik>
    )
}