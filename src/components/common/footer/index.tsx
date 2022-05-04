import { useRouter } from 'next/router';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import MaxWidthWrapper from 'src/components/common/max-width-wrapper';

import * as Styled from './styles';

const Footer: React.FC = () => {
  const router = useRouter();
  const isMobile = useMediaQuery({ query: '(max-width: 544px)' });

  const date = new Date().getFullYear();

  return (
    <Styled.Wrapper>
      <MaxWidthWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column-reverse' : 'row',
            justifyContent: isMobile ? '' : 'space-between',
            gap: '1rem',
            width: '100%',
            height: '100%',
            paddingBottom: '2rem',
          }}
        >
          <div
            style={{ marginTop: isMobile ? '0' : 'auto', textAlign: isMobile ? 'center' : 'left' }}
          >
            <p>© {date} Ed in the Clouds Consulting Limited</p>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              margin: isMobile ? '1rem 0 0 auto' : 'auto 0 0 0',
            }}
          >
            <div style={{ marginLeft: 'auto' }}>
              {router.pathname === '/' && (
                <p style={{ fontStyle: 'italic' }}>
                  Company Number: 12110132
                  <br />
                  VAT Registered: 328988441
                </p>
              )}
            </div>
            <div id="social-icons" style={{ display: 'flex', gap: '1rem', marginLeft: 'auto' }}>
              <Styled.IconWrapper>
                <a href="https://twitter.com/ed1nthecloud">
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
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </Styled.Wrapper>
  );
};

export default Footer;
