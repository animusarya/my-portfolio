import React from 'react';
import styled from 'styled-components';

import Layout from '../components/global/Layout';
import Seo from '../components/Seo';
import { Title, Subtitle } from '../components/elements';

const Container = styled.div`
  background-color: ${(props) => props.theme.mainBrandColor};
`;

const SafeguardingStatement = () => {
  return (
    <Layout>
      <Seo title="Safeguarding Statement" />
      <Container className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="mb-4">
              <Title className="mb-5">Safeguarding Statement</Title>
            </div>
            <Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
              nibh venenatis cras sed felis eget velit. Eleifend quam adipiscing
              vitae proin sagittis nisl. Tristique et egestas quis ipsum
              suspendisse. At quis risus sed vulputate odio ut enim. Ultrices
              eros in cursus turpis massa tincidunt dui ut. Justo eget magna
              fermentum iaculis eu non diam. Nulla facilisi morbi tempus iaculis
              urna. Odio aenean sed adipiscing diam. Amet est placerat in
              egestas erat imperdiet sed euismod nisi. Condimentum id venenati
              Lectus proin nibh nisl condimentum id venenatis. Eget egestas
              purus viverra accumsan in nisl nisi scelerisque eu. Condimentum
              vitae sapien pellentesque habitant morbi tristique senectus et. Ac
              orci phasellus egestas tellus rutrum tellus pellentesque eu.
              Consequat nisl vel pretium lectus. Luctus accumsan tortor posuere
              ac ut consequat semper viverra. Luctus venenatis lectus magna
              fringilla urna. Cursus euismod quis viverra nibh cras pulvinar
              mattis nunc. Quisque sagittis purus sit amet volutpat consequat.
              Nascetur ridiculus mus mauris vitae ultricies leo integer
              malesuada. Mauris pellentesque pulvinar pellentesque habitant
            </Subtitle>
          </div>
        </div>
      </Container>
    </Layout>
  );
};
export default SafeguardingStatement;
