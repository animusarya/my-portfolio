import React from 'react';
import Seo from '../components/Seo';

import Layout from '../components/global/Layout';
import WorkItem from '../components/work/WorkItem';

const Work = () => {
  return (
    <Layout>
      <Seo title="Work" />
      <WorkItem />
    </Layout>
  );
};
export default Work;
