import React from 'react';

import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import HomeBanner from '../components/home/HomeBanner';
// import HomeInformation from '../components/home/HomeInformation';
import LatestBlog from '../components/home/LatestBlog';
import Reviews from '../components/global/Reviews';
import ServicesInfo from '../components/home/ServicesInfo';
import InfoCycle from '../components/home/InfoCycle';

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" description={config.description} />
      <HomeBanner />
      {/* <HomeInformation /> */}
      <InfoCycle />
      <ServicesInfo />
      <Reviews
        title="Great things are done by a series of small things brought together."
        subtitle="- Vincent Van Gogh"
      />
      <LatestBlog />
    </Layout>
  );
};
export default IndexPage;
