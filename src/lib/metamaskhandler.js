import { ethers } from 'ethers';
const ethereum = typeof window !== 'undefined' ? window.ethereum : '';

// check if metamask extension is installed on the browser
export const isMetaMaskInstalled = () =>{
    if(ethereum){
        return true;
    }

    return false;
}

// Connect to MetaMask Wallet
export const connectWallet = async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // Request account access if needed
      const accounts = await provider.send("eth_requestAccounts", []);
      return accounts; // Returns an array of account addresses
    } catch (error) {
      console.error('Error connecting to MetaMask:', error);
      throw error; // Rethrow the error to be handled by the caller
    }
  } else {
    console.log('MetaMask is not installed!');
    throw new Error('MetaMask is not installed!');
  }
};
// connect to metakmask wallet
export const connectWalletMetamask = async () =>{
    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    
    return accounts;
}

// connect to metakmask wallet
export const isAccountConnected = async () =>{
    if(typeof ethereum !== 'undefined'){
        const accounts = await ethereum.request({method: 'eth_accounts'});

        return accounts;
    }
}

export const BSC_TESTNET_PARAMS = {
  chainId: '0x61', // Hexadecimal for 97
  chainName: 'BSC Testnet',
  nativeCurrency: {
      name: 'Binance Coin',
      symbol: 'BNB',
      decimals: 18,
  },
  rpcUrls: ['https://bsc-testnet-rpc.publicnode.com'],
  blockExplorerUrls: ['https://testnet.bscscan.com'],
};

export const switchToBscTestnet = async () => {
  try {
      await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [BSC_TESTNET_PARAMS],
      });
  } catch (switchError) {
      console.error('Error switching to BSC Testnet:', switchError);
  }
};

const BSC_MAINNET_PARAMS = {
    chainId: '0x38', // 56 in decimal
    chainName: 'Binance Smart Chain Mainnet',
    nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    blockExplorerUrls: ['https://bscscan.com/'],
};

window.ethereum.on('chainChanged', async (chainId) => {
    // Check if the current chain is not Binance Smart Chain
    if (chainId !== BSC_TESTNET_PARAMS.chainId) {
      try {
        // Prompt user to switch to Binance Smart Chain
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [BSC_TESTNET_PARAMS],
        });
      } catch (switchError) {
        // Handle errors, e.g., User rejected the request
        console.error('Failed to switch to Binance Smart Chain:', switchError);
      }
    }
  });

  export const connectWalletAndCheckNetwork = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
  
      if (parseInt(chainId) !== parseInt(BSC_TESTNET_PARAMS.chainId, 16)) {
        // Prompt user to switch to Binance Smart Chain
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [BSC_TESTNET_PARAMS],
        });
      } else {
        // Proceed with wallet connection
      }
    } catch (error) {
      console.error('Error connecting to the wallet or switching network:', error);
    }
  };

// disconnect metamask wallet
export const disconnectWallet = () =>{
    localStorage.removeItem('isWalletConnected');
    window.location.reload();
}

// check metamask on disconnect
if(isMetaMaskInstalled()){
    ethereum.on('accountsChanged', () =>{
        window.location.reload();
    });
}


// check metamask on connected
const onMetamaskconnect = async () =>{
    const chainId = await getChainId();
    ethereum.on('connect', () =>{
        console.log(chainId);
    });
}

// on chain change
export const onChainChange = () =>{
    ethereum.on('chainChanged', (_chainId) =>{
        return parseInt(_chainId);
    });
}

export const removeChainChangeListener = (callback) => {
  window.ethereum.removeListener('chainChanged', callback);
};

const getChainId = async () =>{
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    return parseInt(chainId);
}


const isWalletConnected = () => {
    if(localStorage.getItem('isWalletConnected') === 'true'){
        return true
    }

    return false;
}


const connectWalletLocaly = () => {
    localStorage.setItem('isWalletConnected', true);
}