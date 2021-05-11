import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Subtitle from './Subtitle';
import Button from './Button';

const Card = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  border-radius: 0px 0px 100px 0px !important;
  .card-content {
    @media screen and (max-width: 768px) {
      padding: 2rem !important;
    }
  }
`;

const ImgWrapper = styled.div`
  box-shadow: 0px 4px 4px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 250px;
  background: ${(props) => (props.hasBackground ? props.theme.textColor : '')};
`;

const CardItem = ({
  img,
  title,
  subtitle,
  buttonTitle,
  hasBackground,
  secondary,
  to,
  hasButton,
}) => {
  return (
    <div>
      <Card className="card">
        <ImgWrapper hasBackground={hasBackground}>
          <img src={img} alt="Projects" className="blog-img" />
        </ImgWrapper>
        <div className="card-content p-6">
          <div className="media">
            <div className="media-content">
              <Title
                isSmall
                color={(props) => props.theme.textColor}
                className="mb-4"
              >
                {title}
              </Title>
              <Subtitle secondary className="mb-5">
                {subtitle}
              </Subtitle>
              {hasButton && (
                <Button secondary={secondary} to={to}>
                  {buttonTitle}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default CardItem;
