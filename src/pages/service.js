import React from 'react';

import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import ServiceBanner from '../components/ourServices/ServiceBanner';
import Facility from '../components/ourServices/Facility';
import Features from '../components/ourServices/Features';
import FeatureDetail from '../components/ourServices/FeatureDetail';
import Notice from '../components/ourServices/Notice';

const Service = () => {
  return (
    <Layout>
      <Seo title="Services" />
      <ServiceBanner />
      <Facility />
      <Features />
      <FeatureDetail />
      <Notice />
    </Layout>
  );
};
export default Service;
