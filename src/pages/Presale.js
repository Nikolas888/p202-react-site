import { useState, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Number from 'react-number-format';
import { Contract, utils } from 'ethers';
import { Input } from 'semantic-ui-react';
import BN from 'bignumber.js';
import { toast } from 'react-toastify';
import { useModal } from 'react-simple-modal-provider';

import { Footer } from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

import { useEagerConnect, useActiveWeb3React } from '../hooks/index';
import getExternalLinkProps from '../utils/getExternalLinkProps';
import { switchEthereumChain, watchAsset } from '../lib';

import {
   TokenAddress, TokenLogoUri, PresaleAddress,
} from '../constants';
import P202Abi from '../abis/P202.json';
import P202PresaleAbi from '../abis/P202Presale.json';

import { routerPaths } from "../router/helper";
import { Link } from 'react-router-dom';

BN.config({ DECIMAL_PLACES: 18 });



export default function Presale() {
   const { t } = useTranslation();
   const triedEager = useEagerConnect();
   const context = useActiveWeb3React();
   const { library, chainId, account, active } = context;

   const { open: openWalletConnectModal } = useModal('WalletConnectModal');
   const { open: openWalletAccountModal } = useModal('WalletAccountModal');

   const accountShort = account
      ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}`
      : t("header.button-back-to-home");

   const getTokenContract = (withSigner = false) => {
      if (withSigner) {
         const signer = library.getSigner();
         return new Contract(TokenAddress, P202Abi, signer);
      } else {
         return new Contract(TokenAddress, P202Abi, library);
      }
   }
   const getPresaleContract = (withSigner = false) => {
      if (withSigner) {
         const signer = library.getSigner();
         return new Contract(PresaleAddress, P202PresaleAbi, signer);
      } else {
         return new Contract(PresaleAddress, P202PresaleAbi, library);
      }
   }

   const [price, setPrice] = useState('0.0');
   const [forSale, setForSale] = useState('25000000');
   const [balanceBnb, setBalanceBnb] = useState('0');
   const [balanceToken, setBalanceToken] = useState('0');
   const [tokenAmount, setTokenAmount] = useState('0');
   const [bnbAmount, setBnbAmount] = useState('0');

   const onChangeTokenAmount = (e, { name, value }) => {
      setTokenAmount(value);
      setBnbAmount(BN(value).multipliedBy(price).toString());
   }
   const onChangeMaxTokenAmount = () => {
      const amount = parseInt(forSale).toString();
      setTokenAmount(amount);
      setBnbAmount(BN(amount).multipliedBy(price).toString());
   }

   const onChangeBnbAmount = (e, { name, value }) => {
      setBnbAmount(value);
      setTokenAmount(BN(value).dividedBy(price).toString());
   }
   const onChangeMaxBnbAmount = () => {
      const tkn = Math.floor(BN(balanceBnb).dividedBy(price).toString());
      setBnbAmount(BN(tkn).multipliedBy(price).toString());
      setTokenAmount(tkn);
   }

   const onBuy = async () => {
      if (parseFloat(tokenAmount) <= 0) {
         return toast.warn('Wrong amount.');
      }

      if (!(chainId === 3 || chainId === 56)) {
         return toast.warn('Wrong network.');
      }

      const presale = getPresaleContract(true);
      try {
         const tx = await presale.buy({ value: utils.parseEther(bnbAmount) });
         toast.info(<a href={'https://bscscan.com/tx/' + tx.hash} {...getExternalLinkProps()}>Pending. tx: {tx.hash.substring(0, 6)}...</a>);
         await tx.wait(1);
         toast.success(<a href={'https://bscscan.com/tx/' + tx.hash} {...getExternalLinkProps()}>Done. tx: {tx.hash.substring(0, 6)}...</a>);
      } catch (error) {
         if (typeof error === 'string' && error.includes('insufficient funds')) {
            toast.error('Insufficient funds');
         } else if (typeof error === 'object' && error.data.message.includes('insufficient funds')) {
            toast.error('Insufficient funds');
         } else {
            toast.error('Error');
         }
      }
   }

   useEffect(() => {
      setTokenAmount(Math.floor(BN(bnbAmount).dividedBy(price).toString()));
   }, [price]);

   const [updating, setUpdating] = useState(false);
   const update = async () => {
      if (updating) return;
      setUpdating(true);
      try {
         const presale = getPresaleContract();
         setPrice(
            utils.formatEther(await presale.price()).toString()
         );

         const token = getTokenContract();
         setForSale(
            utils.formatEther(await token.balanceOf(PresaleAddress)).toString()
         );
         setBalanceToken(
            utils.formatEther(await token.balanceOf(account)).toString()
         );

         setBalanceBnb(
            utils.formatEther(await library.getBalance(account)).toString()
         );
      } catch (error) { console.error(error); }
      setUpdating(false);
   }

   useEffect(() => {
      if (library) {
         library.on('block', (blockNumber) => {
            console.log('block', blockNumber);
            update();
         });
      }
   }, []);
   useEffect(() => {
      if (library) {
         library.on('block', (blockNumber) => {
            console.log('block', blockNumber);
            update();
         });
      }
   }, [library]);

   return (
      <div className="wrap">
         <ScrollToTop />

         <main className="main presale">
            <section className="presale-contract"
               style={{ backgroundImage: 'url(/images/top_block_bg.png)' }}
            >
               <div className='presale-contract__body'>
                  <header className="header presale">
                     <div className="header__body">
                        <div className="header__logo">
                           <h1 className="header__logo-image">
                              <Link to={routerPaths.main}>
                                 <img src="/images/logo.svg" className="image" alt="logo" />
                              </Link>
                           </h1>
                        </div>

                        <div className="header__button">
                           <a
                              onClick={(triedEager && active && account)
                                 ? openWalletAccountModal
                                 : openWalletConnectModal
                              }
                           >{accountShort}</a>
                        </div>
                     </div>

                     <div className='presale-contract__title'>
                        <h2 className='presale-contract__title-text'>
                           {t("presale-contract.title")}
                        </h2>
                        <div className='presale-contract__hash'
                           style={{ backgroundImage: 'url(/images/presale_border.png)', }}
                        >
                           <div className='presale-contract__hash-row'>
                              <div className='label'>{t("presale-contract.text-1")}:</div>
                              <div className='value'>
                                 <a
                                    style={{ color: '#A183EF' }}
                                    href={'https://bscscan.com/token/' + TokenAddress}
                                    {...getExternalLinkProps()}
                                 >{TokenAddress}</a>
                              </div>
                           </div>
                           <div className='presale-contract__hash-row'>
                              <div className='label'>{t("presale-contract.text-2")}:</div>
                              <div className='value'>
                                 <a
                                    style={{ color: '#A183EF' }}
                                    href={'https://bscscan.com/address/' + PresaleAddress}
                                    {...getExternalLinkProps()}
                                 >{PresaleAddress}</a>
                              </div>
                           </div>
                        </div>

                        {!library?.provider.isMetaMask && <button className='presale-contract__button'>
                           <a
                              href={'https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain'}
                              {...getExternalLinkProps()}
                              style={{ color: 'white' }}
                           >{t("presale-contract.button-text")}</a>
                        </button>}

                        {library?.provider.isMetaMask && chainId !== 56 && <button
                           className='presale-contract__button' onClick={() => switchEthereumChain(library)}>
                           {t("presale-contract.button-swith-text")}
                        </button>}

                        {library?.provider.isMetaMask && <button
                           className='presale-contract__button' onClick={() => watchAsset(library)}
                        >
                           {t("presale-contract.button-add-token-text")}
                        </button>}
                     </div>
                  </header>
               </div>
            </section >

            <section className='presale-amount'>
               <div className="presale-amount__body">
                  <h3 className='presale-amount__title'>
                     {t("presale-amount.title")}: <Number
                        value={forSale} displayType='text'
                        thousandSeparator fixedDecimalScale decimalScale={4}
                     />
                  </h3>
                  <div className='presale-amount__rows'>
                     <div className='presale-amount__row'>
                        <div className='label'>
                           <span>{t("presale-amount.label-1")}:</span>
                        </div>
                        <div className='value'>
                           <div className='value__number'>
                              <Number
                                 value={price} displayType='text'
                                 thousandSeparator decimalScale={18}
                              />
                           </div>
                           <div className='value__button'></div>
                        </div>
                     </div>

                     <div className='presale-amount__row'>
                        <div className='label'>
                           <span>{t("presale-amount.label-2")}:</span>
                        </div>
                        <div className='value'>
                           <Input
                              className='value__number' style={{ padding: '0', }}
                              fluid name='tokenAmount' required
                              type='number' min='0'
                              value={tokenAmount}
                              onChange={onChangeTokenAmount}
                           />
                           <div className='value__button'>
                              <button onClick={onChangeMaxTokenAmount}>
                                 {t("presale-amount.row-button-text")}
                              </button>
                           </div>
                        </div>
                     </div>

                     <div className='presale-amount__row'>
                        <div className='label'>
                           <span>{t("presale-amount.label-3")}:</span>
                        </div>
                        <div className='value'>
                           <Input
                              className='value__number' style={{ padding: '0', }}
                              fluid name='bnbAmount' required
                              type='number' min='0' step={price}
                              value={bnbAmount}
                              onChange={onChangeBnbAmount}
                           />
                           <div className='value__button'>
                              <button onClick={onChangeMaxBnbAmount}>
                                 {t("presale-amount.row-button-text")}
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <button className='presale-amount__button' onClick={onBuy}>
                     {t("presale-amount.button-text")}
                  </button>

                  <p className='presale-amount__total'>
                     <span className='balance-1'>{t("presale-amount.label-4")}: <Number
                        value={balanceToken} displayType='text' thousandSeparator fixedDecimalScale decimalScale={4}
                     /></span>
                     <span className='balance-2'>{t("presale-amount.label-5")}: <Number
                        value={balanceBnb} displayType='text' thousandSeparator fixedDecimalScale decimalScale={4}
                     /></span>
                     <span className='address'>{t("presale-amount.label-6")}: <a
                        style={{ color: '#7F6CAD' }}
                        href={'https://bscscan.com/address/' + account}
                        {...getExternalLinkProps()}
                     >{account}</a></span>
                  </p>
               </div>
            </section>
         </main >

         <Footer hideNav link={routerPaths.main} text={t("footer.button-back-to-home")} />
      </div >
   );
}