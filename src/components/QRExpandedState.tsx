import { AnimatePresence, motion } from 'framer-motion';
import React, { Dispatch, SetStateAction } from 'react';
import LogoAppStore from '../icons/LogoAppStore';
import XButton from '../icons/XButton';
import {
  Column,
  Container,
  DownloadButton,
  DownloadContainer,
  ExpandedState,
  ExpandedStateBackground,
  TitleText,
  UniqueTokenExpandedStateContent,
  XButtonWrapper,
} from '../styled';
import QRCode from './qrcode/QRCode';

const easingConfig = {
  duration: 0.125,
  ease: [0.25, 0.1, 0.25, 1],
};

const springConfig = {
  damping: 45,
  mass: 1,
  stiffness: 700,
  type: 'spring',
};

const QRExpandedState = ({
  enabled,
  value,
  setIsQRCodeOpen,
}: {
  enabled: boolean;
  value: string;
  setIsQRCodeOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <AnimatePresence>
      {enabled && (
        <>
          <UniqueTokenExpandedStateContent key={value}>
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              transition={easingConfig}
            >
              <ExpandedStateBackground
                onClick={() => setIsQRCodeOpen(false)}
                opacity={0.8}
              />
            </motion.div>
            <ExpandedState
              animate={{ scale: 1, y: 0 }}
              as={motion.div}
              exit={{ scale: 0.8, y: '100vh' }}
              initial={{ scale: 0.8, y: '100vh' }}
              style={{ pointerEvents: 'auto' }}
              qr
              transition={springConfig}
            >
              <Column
                onClick={() => setIsQRCodeOpen(false)}
                style={{ justifyContent: 'center', height: '100%' }}
              >
                <TitleText>
                  <span role="img" aria-labelledby="emoji">
                    📲
                  </span>{' '}
                  Scan to connect to Rainbow
                </TitleText>
                <Container onClick={proxy => proxy.stopPropagation()}>
                  <QRCode value={value} size={380} logoSize={100} />
                </Container>
                <DownloadContainer>
                  <TitleText subtitle>
                    <span role="img" aria-labelledby="emoji">
                      👇
                    </span>{' '}
                    Don’t have the app yet?{' '}
                    <span role="img" aria-labelledby="emoji">
                      👇
                    </span>
                  </TitleText>
                  <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <DownloadButton
                      href="https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021"
                      onClick={proxy => proxy.stopPropagation()}
                      target="_blank"
                    >
                      <div style={{ marginRight: 6 }}>
                        <LogoAppStore />
                      </div>
                      App Store
                    </DownloadButton>
                  </div>
                </DownloadContainer>
              </Column>
            </ExpandedState>
          </UniqueTokenExpandedStateContent>
          <XButtonWrapper onClick={() => setIsQRCodeOpen(false)}>
            <motion.div
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              initial={{ opacity: 0, scale: 0 }}
              transition={easingConfig}
            >
              <XButton />
            </motion.div>
          </XButtonWrapper>
        </>
      )}
    </AnimatePresence>
  );
};

export default QRExpandedState;
