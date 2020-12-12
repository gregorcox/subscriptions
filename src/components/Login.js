import React from 'react';
import { Formik, Field, Form } from "formik";

import { validateEmail, validatePassword } from "../helpers/validation";

const Login = () => {
    return (
        <div>
            <h1>Login</h1>
             <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={() => { console.log("Submitted") }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className="form-field">
                            <label htmlFor="email">Email:</label>
                            <Field name="email" type="email" validate={validateEmail} />
                            {touched.email && errors.email && <span className="error">{errors.email}</span>}
                        </div>

                        <div className="form-field">
                            <label htmlFor="password">Password:</label>
                            <Field name="password" type="password" validate={validatePassword} />
                            {touched.password && errors.password && <span className="error">{errors.password}</span>}
                        </div>

                        <button type="submit">Login</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default Login;
