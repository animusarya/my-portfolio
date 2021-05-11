import React from 'react';

import config from '../utils/config';
import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import AboutInformation from '../components/about/AboutInformation';
import OurBoard from '../components/about/OurBoard';
import OurTeam from '../components/about/OurTeam';
import Reviews from '../components/global/Reviews';

const About = () => {
  return (
    <Layout>
      <Seo title="About" description={`About ${config.siteName}`} />
      <AboutInformation />
      <OurBoard />
      <OurTeam />
      <Reviews
        title="The strength of the team is each member. The strength of each member is the team."
        subtitle="- Phil Jackson"
      />
    </Layout>
  );
};

export default About;
