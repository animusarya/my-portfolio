import React from 'react';

import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import HelpBanner from '../components/help/HelpBanner';
import Information from '../components/help/Information';
import HarmSection from '../components/help/HarmSection';
import OurHelpSteps from '../components/help/OurHelpSteps';
import Reviews from '../components/global/Reviews';

const Help = () => {
  return (
    <Layout>
      <Seo title="Help" description={config.description} />
      <HelpBanner />
      <OurHelpSteps />
      <Information />
      <HarmSection />
      <Reviews
        title="If we want to change things, we must first change ourselves."
        subtitle="- Paul Rusesabagina"
      />
    </Layout>
  );
};
export default Help;
