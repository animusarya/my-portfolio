import React from 'react';

import config from '../utils/config';

import Seo from '../components/Seo';

const IndexPage = () => {
  return (
    <div>
      <Seo title="Home" description={config.description} />
      <h1 className="title mt-6">hdih</h1>
    </div>
  );
};
export default IndexPage;
