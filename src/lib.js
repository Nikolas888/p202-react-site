import { toast } from 'react-toastify';
import { TokenAddress, TokenLogoUri, TokenLogo } from './constants';



export const BscChainParams = {
  chainId: '0x38', // 0x38 - 56 - BSC Mainnet
  chainName: 'BSC Mainnet',
  nativeCurrency: {
    name: 'BNB',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: ['https://bsc-dataseed.binance.org'],
  blockExplorerUrls: ['https://bscscan.com/'],
  iconUrls: ['https://bscscan.com//images/svg/brands/bnb.svg?v=1.3'],
};

export async function switchEthereumChain(library) {
  try {
    return await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [BscChainParams]
    });
    return await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x38', }]
    });
  } catch (switchError) {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {
      try {
        return await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [BscChainParams]
        });
      } catch (addError) { }
    } else {
      // handle other "switch" errors
      toast.error('Please switch to the Chain network');
    }
  }
}

export async function watchAsset(library) {
  try {
    /*const tokenAdded = await library.send(
     'wallet_watchAsset',
     {
       type: 'ERC20',
       options: {
         address: TokenAddress,
         symbol: 'P202',
         decimals: 18,
         image: TokenLogoUri,
       },
     },
   );*/
    const tokenAdded = await window.ethereum.request({
      method: 'wallet_watchAsset',
      params: {
        type: 'ERC20',
        options: {
          address: TokenAddress,
          symbol: 'P202',
          decimals: 18,
          image: TokenLogoUri,
        },
      },
    });
    return tokenAdded;
  } catch (error) {
    console.log(error);
  }
}

