import { hot } from 'react-hot-loader';
import Modal, { useModalState } from 'react-simple-modal-provider';
import { useTranslation } from "react-i18next";

import LinkExternal from '../components/Link/LinkExternal';

import { useEagerConnect, useActiveWeb3React } from '../hooks/index';
import useAuth from '../hooks/useAuth';

import { toast } from 'react-toastify';
import copy from 'copy-to-clipboard';



const WalletAccountModal = ({ children }) => {
  const [isOpen, setOpen] = useModalState();
  const { t } = useTranslation();

  const triedEager = useEagerConnect();
  const { account } = useActiveWeb3React();
  const { logout } = useAuth();

  const handleCopyAddress = () => {
    copy(account);
    toast.info('Address copied!');
  }

  const connectorLocalStorageKey = 'connectorId';
  const handleLogout = () => {
    logout();
    window.localStorage.removeItem(connectorLocalStorageKey);
    setOpen(false);
  }

  return (
    <Modal
      id={'WalletAccountModal'}
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
          {t('Your wallet')}
        </h1>
      </div>

      <div style={{ cursor: 'pointer', fontSize: '0.8rem', color: 'rgb(161, 131, 239)', }}
        onClick={handleCopyAddress}
      >
        {account}
      </div>

      <br />
      <div>
        <LinkExternal href={`https://bscscan.com/address/${account}`}>
          <button style={{ width: '100%', padding: '1.0rem', background: 'linear-gradient(31.35deg, #5F30CD -0.12%, #8065E6 100%)', }} >
            View on BscScan
          </button>
        </LinkExternal>
      </div>

      <br />
      <div>
        <button
          style={{ width: '100%', padding: '1.0rem', background: 'linear-gradient(31.35deg, #5F30CD -0.12%, #8065E6 100%)', }}
          onClick={handleLogout}
        >Log Out</button>
      </div>
    </Modal>
  );
};

export default hot(module)(WalletAccountModal);
