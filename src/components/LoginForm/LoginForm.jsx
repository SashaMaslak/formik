import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(16).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  color: red;
`;

export const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <br />
        <br />
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage name="login" />
        </label>{' '}
        <br />
        <br />
        <label htmlFor="password">
          Password
          <Input type="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </label>
        <br />
        <br />
        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
};
