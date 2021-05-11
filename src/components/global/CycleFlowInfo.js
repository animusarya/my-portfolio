import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .box {
    border-radius: 0;
    background-color: ${(props) => props.theme.textColorLite} !important;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: relative;
  }

  .inner-two {
    position: absolute;
    right: 13%;
    top: 20%;
  }
  p {
    color: ${(props) => props.theme.textColor} !important;
  }
  .title-one {
    color: rgba(52, 51, 65, 0.5) !important;
  }
  .title-two {
    color: ${(props) => props.theme.lightShades} !important;
  }
  .title-three {
    color: ${(props) => props.theme.mainBrandColor} !important;
  }
  @media screen and (max-width: 768px) {
    .inner-two {
      position: inherit;
    }
    .column {
      display: block !important;
    }
  }
`;

const CycleFlowInfo = () => (
  <Container>
    <div className="box">
      <div className="p-6">
        <div className="columns is-gapless">
          <div className="column is-flex is-align-items-flex-end">
            <div className="mb-6 ">
              <h1 className="has-text-weight-medium is-size-5 has-text-centered title-one ">
                Innovative
              </h1>
              <p className=" mb-6 has-text-centered is-size-5">
                Retrain and learn new skills
              </p>
            </div>
          </div>
          <div className="column is-7">
            <div className="mb-6 inner-two">
              <h1 className="has-text-weight-medium  is-size-5 has-text-centered title-two">
                Positive
              </h1>
              <p className=" mb-6 has-text-centered is-size-5">
                Rebuild confidence and resilience
              </p>
            </div>
            <img src="/images/new-cycle-01.png" alt="cycle" />
          </div>
          <div className="column is-flex is-align-items-flex-end">
            <div className="mb-6 ml-4">
              <h1 className="has-text-weight-medium  is-size-5 has-text-centered title-three">
                Together
              </h1>
              <p className=" mb-6 has-text-centered is-size-5">
                Reassurance that 'you're not alone'
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
);
export default CycleFlowInfo;
