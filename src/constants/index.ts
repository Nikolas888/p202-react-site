export const isProduction = process.env.NODE_ENV === 'production';
export const publicUrl = process.env.PUBLIC_URL;


export const pollingInterval = 10000;
export const NetworkContextName = 'NETWORK';
export const connectorLocalStorageKey = 'connectorId';
export enum ChainId {
  ETH_MAINNET = 1,
  ETH_ROPSTEN = 3,
  ETH_RINKEBY = 4,
  ETH_GOERLI = 5,
  ETH_KOVAN = 42,

  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
};
export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
}


export const appVersion = '1.0.0';
export const appName = 'Project 202';


export const companyName = '';
export const companyDuns = 118511839;
export const companyEmail = 'info@p202.io';
export const companyInstagram = 'https://instagram.com/?';
export const companyTwitter = 'https://twitter.com/P202Global';
export const companyGithub = 'https://github.com/p202io';
export const companyTelegram = 'https://t.me/p202io';
export const companyYoutube = 'https://www.youtube.com/c/Project202official';
export const companyDiscord = 'https://discord.com/?';
export const companyMedium = 'https://medium.com/@project202';




export const TokenAddress = '0x61a960C3F213B80EaC761e2f996414AB52C08985';
export const TokenLogoUri = 'https://p202.io/logo512.png';
export const PresaleAddress = '0xd3c1ed1e263bb16951B054d670Ff9eAf6b8391Df';
