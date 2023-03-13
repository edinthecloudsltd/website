import { useRouter } from 'next/router';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import MaxWidthWrapper from 'src/components/max-width-wrapper';

import * as Styled from './footer.styles';

function Footer() {
  const router = useRouter();
  const date = new Date().getFullYear();

  return (
    <Styled.Wrapper>
      <MaxWidthWrapper>
        <Styled.FooterFlex>
          <Styled.CompanyName>© {date} Ed in the Clouds Consulting Limited</Styled.CompanyName>
          <Styled.FooterFlexRight>
            {router.pathname === '/' && (
              <Styled.CompanyInfo>
                Company Number: 12110132
                <br />
                VAT Registered: 328988441
              </Styled.CompanyInfo>
            )}
            <Styled.SocialIcons>
              <Styled.IconWrapper>
                <a href="https://github.com/tedsmitt">
                  <FaGithub size={25} />
                </a>
              </Styled.IconWrapper>
              <Styled.IconWrapper>
                <a href="https://twitter.com/_edintheclouds">
                  <FaTwitter size={25} />
                </a>
              </Styled.IconWrapper>
              <Styled.IconWrapper>
                <a href="https://www.linkedin.com/in/edwardsmith92/">
                  <FaLinkedinIn size={25} />
                </a>
              </Styled.IconWrapper>
              <Styled.IconWrapper>
                <a href="mailto:ed@edintheclouds.io">
                  <FiMail size={25} />
                </a>
              </Styled.IconWrapper>
            </Styled.SocialIcons>
          </Styled.FooterFlexRight>
        </Styled.FooterFlex>
      </MaxWidthWrapper>
    </Styled.Wrapper>
  );
}

export default Footer;
