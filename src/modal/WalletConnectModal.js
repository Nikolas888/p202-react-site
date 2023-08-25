import { hot } from 'react-hot-loader';
import Modal, { useModalState } from 'react-simple-modal-provider';
import { useTranslation } from "react-i18next";

import MetamaskIcon from '../components/Svg/MetamaskIcon';
import WalletConnectIcon from '../components/Svg/WalletConnectIcon';

import useAuth from '../hooks/useAuth';



const WalletConnectModal = ({ children }) => {
  const [isOpen, setOpen] = useModalState();
  const { t } = useTranslation();

  const { login } = useAuth();
  const connectorLocalStorageKey = 'connectorId';
  const onConnectToMetamask = () => {
    const connectorId = 'injected';
    login(connectorId);
    window.localStorage.setItem(connectorLocalStorageKey, 'injected');
    setOpen(false);
  }
  const onConnectToWalletConnect = () => {
    const connectorId = 'walletconnect';
    login(connectorId);
    window.localStorage.setItem(connectorLocalStorageKey, 'injected');
    setOpen(false);
  }

  return (
    <Modal
      id={'WalletConnectModal'}
      className='header presale'
      consumer={children}
      isOpen={isOpen}
      setOpen={setOpen}
      draggable={false}
      duration={300}
      width={320}
      height={320}
      radius={10}
      backgroundColor={'#1a1142'}
    >
      <div>
        <h1 style={{ color: 'white', fontSize: '38px', lineHeight: '48px', textAlign: 'center' }}>
          {t('Connect wallet')}
        </h1>
      </div>

      <br />
      <div>
        <button onClick={onConnectToMetamask} style={{ width: '100%', background: 'linear-gradient(31.35deg, #5F30CD -0.12%, #8065E6 100%)', }}>
          <span><MetamaskIcon /></span> Metamask
        </button>
      </div>

      <br />
      <div>
        <button onClick={onConnectToWalletConnect} style={{ width: '100%', background: 'linear-gradient(31.35deg, #5F30CD -0.12%, #8065E6 100%)', }}>
          <span><WalletConnectIcon /></span> Wallet Connect
        </button>
      </div>
    </Modal>
  );
};

export default hot(module)(WalletConnectModal);
