import React from 'react';
import styled from 'styled-components';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { Button, Title, Subtitle } from '../elements';

const Section = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
  input,
  textarea {
    background: ${(props) => props.theme.backgroundInputColor} !important;
    margin-top: 0.6rem;
    border-color: ${(props) => props.theme.borderColor} !important;
    box-shadow: none;
    border-radius: 20px;
  }
  input:active,
  .input:focus,
  .textarea:active,
  .textarea:focus {
    border-color: ${(props) => props.theme.borderColor};
    box-shadow: none;
    color: ${(props) => props.theme.placeholderColor} !important;
  }
  input ::placeholder,
  textarea ::placeholder {
    color: ${(props) => props.theme.placeholderColor};
    background: ${(props) => props.theme.backgroundInputColor};
    font-size: ${(props) => props.theme.fontSizeMedium};
    font-weight: 400;
  }

  .error {
    color: ${(props) => props.theme.lightShades};
  }
  .cXSUwC .field-body .field {
    margin-bottom: 0 !important;
  }
  textarea {
    background: ${(props) => props.theme.backgroundInputColor} !important;
    margin-top: 0.6rem;
    border-color: ${(props) => props.theme.borderColor} !important;
    box-shadow: none;
    border-radius: 20px;
    height: 218px !important;
  }
  input {
    height: 70px;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSizeMedium};
    line-height: ${(props) => props.theme.lineHeight};
    @media screen and (max-width: 768px) {
      line-break: anywhere !important;
    }
  }
`;

const ContactForm = ({
  values,
  touched,
  errors,
  handleSubmit,
  handleChange,
  handleBlur,
}) => {
  return (
    <Section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <Title className="mb-5">Contact</Title>
              <Subtitle small>
                We help those recovering from the effects of a gambling
              </Subtitle>
              <div className="mt-5">
                <h1>
                  Phone:
                  <a href="tel: 0123 567 8910" className="has-text-white ml-2">
                    0123 567 8910
                  </a>
                </h1>
              </div>
              <h1>
                Email:
                <a
                  href="mailto: info@epicrestartfoundation.com"
                  className="has-text-white ml-2"
                >
                  info@epicrestartfoundation.com
                </a>
              </h1>
            </div>
          </div>
          <form method="post" action="#" onSubmit={handleSubmit}>
            <div className="field is-horizontal mb-5">
              <div className="field-body">
                <div className="field">
                  <div className="control">
                    <input
                      className="input p-5"
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.name && touched.name && (
                      <p className="error mt-4 has-text-weight-bold">
                        {errors.name}
                      </p>
                    )}
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <input
                      className="input p-5"
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {errors.email && touched.email && (
                      <p className="error mt-4 has-text-weight-bold">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="field">
              <textarea
                className="textarea p-5"
                name="message"
                id="message"
                placeholder="Enter Your message"
                rows={6}
                defaultValue=""
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.message && touched.message && (
                <p className="error mt-4 has-text-weight-bold">
                  {errors.message}
                </p>
              )}
            </div>
            <Subtitle className="mt-5">
              By contacting us, you thereby agree to our contact terms and
              conditions.
            </Subtitle>
            <div className="has-text-left mt-5">
              <Button type="submit" to="/">
                Send
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: '',
    email: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    message: Yup.string().required('Message is required!'),
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
  displayName: 'ContactForm', // helps with React DevTools
})(ContactForm);
