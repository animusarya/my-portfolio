import React, { useState } from 'react';
import styled from 'styled-components';

import TeamModalBox from './TeamModalBox';

const Card = styled.div`
  border-bottom-left-radius: 30px !important;
  border-bottom-right-radius: 30px !important;
  max-width: 400px;
  .media-left {
    margin-right: 0rem;
  }
  .title {
    color: ${(props) => props.theme.textColor} !important;
  }
  .subtitle {
    color: ${(props) => props.theme.mainBrandColor} !important;
    font-size: ${(props) => props.theme.fontSizeMedium} !important;
    font-weight: 500 !important;
  }
`;

const LinkStyled = styled.button`
  background-color: ${(props) => props.theme.mainBrandColor} !important;
  color: ${(props) => props.theme.backgroundWhite} !important;
  border-bottom-right-radius: 30px !important;
  width: 70px;
  height: 100px;
`;

const AboutCard = ({ data }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
      <TeamModalBox
        active={modalActive}
        item={data}
        closeModal={() => setModalActive(!modalActive)}
      />

      <Card className="card">
        <div className="card-image">
          <img src={data.img} className="image-01" alt="board member" />
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <h3 className="title mb-5">{data.title}</h3>
              <h2 className="subtitle">{data.subtitle}</h2>
            </div>
            <div className="media-left">
              <LinkStyled
                className="button"
                type="button"
                onClick={() => setModalActive(!modalActive)}
              >
                <i className="is-size-3 fas fa-plus" />
              </LinkStyled>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default AboutCard;
