import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { Button } from '../elements';

const Section = styled.div`
  .error {
    color: ${(props) => props.theme.lightShades};
  }
`;

const SubscribeForm = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Section>
      <div onSubmit={handleSubmit}>
        <h1 className="subtitle mb-3">Sign up to our newsletter</h1>
        <div className="field is-grouped is-block-mobile">
          <div className="control is-expanded">
            <input
              className="input is-medium mb-4"
              type="email"
              name="email"
              placeholder="Email address"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email && (
              <p className="error has-text-weight-bold">{errors.email}</p>
            )}
          </div>
          <div className="control">
            <Button secondary to="/" className="button mb-4">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    // console.log(values, 'values');
    props
      .onSubmit({ ...values, telephone: values.telephone.toString() })
      .then(() => {
        setSubmitting(false);
        resetForm();
      })
      .catch(() => {
        setSubmitting(false);
      });
  },
  displayName: 'SubscribeForm', // helps with React DevTools
})(SubscribeForm);
