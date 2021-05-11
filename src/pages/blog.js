import React from 'react';

import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import BlogItem from '../components/blog/BlogItem';

const Blog = () => {
  return (
    <Layout>
      <Seo title="Blog" />
      <BlogItem />
    </Layout>
  );
};
export default Blog;
