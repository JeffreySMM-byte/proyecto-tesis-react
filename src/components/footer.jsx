import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  .footer-middle {
    background: #343a40;
    padding-top: 3rem;
    color: #fff;
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
`;

const Footer = () => {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4>Información de contacto</h4>
              <ul className="list-unstyled">
                <li>Jeffrey Muñoz</li>
                <li>mun17323@uvg.edu.gt</li>
                <li>+502 5156-2006</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy; 2021 Ciudad de Guatemala - Todos los derechos reservados
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
