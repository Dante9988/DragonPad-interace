import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProvider from "utils/ContextProvider";
import App from "app/App";
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react'

// 1. Get projectId
const projectId = '838f8044330838f5327436cdab4adae5'

// 2. Set chains
const eth_mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://eth-mainnet.g.alchemy.com/v2/z4OmRUoip77ylYYWFon56AYBhY3IoOOR'
}

const eth_sepolia = {
  chainId: 11155111,
  name: 'Sepolia',
  currency: 'SepoliaETH',
  explorerUrl: 'https://sepolia.etherscan.io',
  rpcUrl: 'https://eth-sepolia.g.alchemy.com/v2/yGwUwvfEKQhX1lHKwtbC_WG6z7M9CFph'
}

const bnb_sepolia = {
  chainId: 56,
  name: 'BNB Chain',
  currency: 'BNB',
  explorerUrl: 'https://bscscan.com/',
  rpcUrl: 'https://base-sepolia.g.alchemy.com/v2/7KbVOrGpJ0Fu-91p9jFK904-Sc2mZSbs'
}

const base_mainnet = {
  chainId: 8453,
  name: 'Base',
  currency: 'ETH',
  explorerUrl: 'https://basescan.org/',
  rpcUrl: 'https://base-mainnet.g.alchemy.com/v2/W3blepCxPkOC3E9cWu_t3BoLzc9WmCtQ'
}

// 3. Create a metadata object
const metadata = {
  name: 'DragonPad',
  description: 'Dragon Empowering IDOs',
  url: 'http://localhost:3000/', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
})

// 5. Create a Web3Modal instance
export const modal = createWeb3Modal({
  ethersConfig,
  chains: [base_mainnet],
  projectId,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
