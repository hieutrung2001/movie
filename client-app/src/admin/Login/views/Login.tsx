import React from 'react'

import './Login.css'
import { Formik, replace } from 'formik'
import * as Yup from 'yup'
import { LoginModel } from '../../constants'
import { auth } from '../apis'
import { useNavigate } from 'react-router-dom'

const schema = Yup.object().shape({
  username: Yup.string()
      .required("Username is a required field"),
  password: Yup.string()
      .required("Password is a required field")
      .min(2, "Password must be at least 2 characters")
})

const initialValues: LoginModel = {
  username: 'admin ',
  password: 'admin'
}

const Login = () => {
  document.title = 'Login'
  const navigate = useNavigate()
  return (
    <>
      {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={async (values) => {
          // Alert the input values of the form that we filled
          const res = await auth(values)
          if (res.status != 200) {
            alert(res.message)
          } else {
            sessionStorage.setItem('_token', res.data)
            navigate("/admin")
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit
        }) => (
          <div className="login">
            <div className="form">
              {/* Passing handleSubmit parameter tohtml form onSubmit property */}
              <form noValidate onSubmit={handleSubmit}>
                <span>Login</span>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  placeholder="Enter your username"
                  className="form-control inp_text"
                  id="username"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.username && touched.username && errors.username}
                </p>
                {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter your password"
                  className="form-control"
                />
                {/* If validation is not passed show errors */}
                <p className="error">
                  {errors.password && touched.password && errors.password}
                </p>
                {/* Click on submit button to submit the form */}
                <button type="submit">Login</button>
              </form>
            </div>
          </div>
        )}
      </Formik>
    </>
  )
}

export default Login