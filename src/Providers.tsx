import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';
import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core';
import { ToastContainer } from 'react-toastify';
import { ModalProvider } from 'react-simple-modal-provider';
import { Provider as StoreProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from './store';
import { NetworkContextName } from './constants/index';
import getLibrary from './utils/getLibrary';

import WalletConnectModal from './modal/WalletConnectModal';
import WalletAccountModal from './modal/WalletAccountModal';


import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';


const modals = [WalletConnectModal, WalletAccountModal];

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName);

const { store, persistor } = configureStore(window?.__PRELOADED_STATE__);
delete window?.__PRELOADED_STATE__;

function Providers({ children }: any) {
  return (
    <Suspense fallback={null}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <Web3ProviderNetwork getLibrary={getLibrary}>
          <StoreProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <I18nextProvider i18n={i18n}>
                <ModalProvider value={modals}>
                  <Router>
                    {children}
                  </Router>
                </ModalProvider>
              </I18nextProvider>
            </PersistGate>
          </StoreProvider>
        </Web3ProviderNetwork>
      </Web3ReactProvider>

      <ToastContainer
        position='top-right'
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{ zIndex: 10000 }}
      />
    </Suspense>
  );
}

export default hot(module)(Providers);
