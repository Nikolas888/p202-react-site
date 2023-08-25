// https://github.com/pancakeswap/pancake-swap-interface-v1/blob/master/src/connectors/index.ts
import { Web3Provider } from '@ethersproject/providers';
import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { NetworkConnector } from './NetworkConnector';
import { ConnectorNames } from '../constants';



export const network = new NetworkConnector({
  urls: {
    56: 'https://bsc-dataseed.binance.org/',
    3: 'https://ropsten.infura.io/v3/f5fbbfe740f440ffa045cb223bc566fc',
    1: 'https://mainnet.infura.io/v3/f5fbbfe740f440ffa045cb223bc566fc',
  },
  defaultChainId: 56,
});

let networkLibrary: Web3Provider | undefined;
export function getNetworkLibrary(): Web3Provider {
  // eslint-disable-next-line no-return-assign
  return (networkLibrary = networkLibrary ?? new Web3Provider(network.provider as any));
}

export const injected = new InjectedConnector({
  supportedChainIds: [56, 3, 1],
});

export const walletconnect = new WalletConnectConnector({
  //chainId: 56,
  rpc: {
    56: 'https://bsc-dataseed.binance.org/',
    3: 'https://ropsten.infura.io/v3/f5fbbfe740f440ffa045cb223bc566fc',
    1: 'https://mainnet.infura.io/v3/f5fbbfe740f440ffa045cb223bc566fc',
  },
  //infuraId: 'f5fbbfe740f440ffa045cb223bc566fc',
  //bridge: 'https://bridge.walletconnect.org',
  qrcode: true,
  qrcodeModalOptions: { mobileLinks: ['metamask'] }
  //pollingInterval: 10000,
});


export const connectorsByName: { [connectorName in ConnectorNames]: any } = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
}
