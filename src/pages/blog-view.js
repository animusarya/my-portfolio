import React from 'react';

import config from '../utils/config';

import Seo from '../components/Seo';
import Layout from '../components/global/Layout';
import BlogDetail from '../components/blog/BlogDetail';

const BlogView = () => {
  return (
    <Layout>
      <Seo title="Blog View" description={config.description} />
      <BlogDetail />
    </Layout>
  );
};
export default BlogView;
