import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .modal-content {
    background-color: ${(props) => props.theme.textColorLite};
    border: 7px solid ${(props) => props.theme.mainBrandColor};
  }
  .button {
    outline: none;
    background-color: ${(props) => props.theme.backgroundWhite};
    color: ${(props) => props.theme.mainBrandColor};
    border-width: 1px;
    margin: 0.5rem;
  }
  .text {
    padding: 1rem 0rem 0rem 0rem;
  }
  .social {
    padding: 0rem 1rem;
  }
  .icon {
    font-size: 2rem;
  }
  .para {
    color: ${(props) => props.theme.darkShades};
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

const TeamModalBox = ({ active, item, closeModal }) => {
  return (
    <Container className={active ? 'modal is-active' : 'modal'}>
      <div className="modal-background" />
      <div className="modal-content">
        <button
          type="button"
          className="button is-medium is-pulled-right"
          onClick={closeModal}
        >
          <i className="fas fa-times-circle" />
        </button>
        <section className="section">
          {item ? (
            <div className="container">
              <div className="columns">
                <div className="column">
                  <img className="" src={item.img} alt="placeholder" />
                  <p className="title is-5 text has-text-weight-light has-text-centered">
                    {item.title}
                  </p>
                  <p className="subtitle is-6 is-size-5-mobile has-text-centered">
                    {item.subtitle}
                  </p>
                </div>
                <div className="column">
                  <p className="para">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </Container>
  );
};

export default TeamModalBox;
