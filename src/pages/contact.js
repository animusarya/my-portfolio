import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import ContactForm from '../components/contact/ContactForm';

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact Us" />
      <ContactForm />
    </Layout>
  );
};
export default Contact;
