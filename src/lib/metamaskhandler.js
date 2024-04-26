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

const NETWORK_PARAMS = {
  Ethereum: {
    chainId: '0x1', // Hexadecimal for 11155111
    chainName: 'Ethereum Mainnet',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://eth-mainnet.g.alchemy.com/v2/z4OmRUoip77ylYYWFon56AYBhY3IoOOR'], // Replace API_KEY with your actual API key
    blockExplorerUrls: ['https://etherscan.io'],
},
BSC: {
    chainId: '0x61', // Hexadecimal for 11155111
    chainName: 'Bsc Testnet',
    nativeCurrency: {
        name: 'Bnb',
        symbol: 'BNB',
        decimals: 18,
    },
    rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/yGwUwvfEKQhX1lHKwtbC_WG6z7M9CFph'], // Replace API_KEY with your actual API key
    blockExplorerUrls: ['https://etherscan.io'],
},
Base: {
    chainId: '0x14a34', // Hexadecimal for 11155111
    chainName: 'Base Sepolia',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18,
    },
    rpcUrls: ['https://base-sepolia.g.alchemy.com/v2/7KbVOrGpJ0Fu-91p9jFK904-Sc2mZSbs'], // Replace API_KEY with your actual API key
    blockExplorerUrls: ['https://base-sepolia.blockscout.com'],
},
  // Polygon: {
  //     chainId: '0x89', // Hexadecimal for 11155111
  //     chainName: 'Sepolia Testnet',
  //     nativeCurrency: {
  //         name: 'Ether',
  //         symbol: 'ETH',
  //         decimals: 18,
  //     },
  //     rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/yGwUwvfEKQhX1lHKwtbC_WG6z7M9CFph'], // Replace API_KEY with your actual API key
  //     blockExplorerUrls: ['https://etherscan.io'],
  // },
  // Blast: {
  //     chainId: '0xAA36A7', // Hexadecimal for 11155111
  //     chainName: 'Sepolia Testnet',
  //     nativeCurrency: {
  //         name: 'Ether',
  //         symbol: 'ETH',
  //         decimals: 18,
  //     },
  //     rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/yGwUwvfEKQhX1lHKwtbC_WG6z7M9CFph'], // Replace API_KEY with your actual API key
  //     blockExplorerUrls: ['https://etherscan.io'],
  // },
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

export const SEPOLIA_TESTNET_PARAMS = {
  chainId: '0xAA36A7', // Hexadecimal for 11155111
  chainName: 'Sepolia Testnet',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/yGwUwvfEKQhX1lHKwtbC_WG6z7M9CFph'], // Replace API_KEY with your actual API key
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
};


export const switchToBscTestnet = async () => {
  try {
      await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [SEPOLIA_TESTNET_PARAMS],
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

// window.ethereum.on('chainChanged', async (chainId) => {
//     // Check if the current chain is not Binance Smart Chain
//     if (chainId !== BSC_TESTNET_PARAMS.chainId) {
//       try {
//         // Prompt user to switch to Binance Smart Chain
//         await window.ethereum.request({
//           method: 'wallet_addEthereumChain',
//           params: [BSC_TESTNET_PARAMS],
//         });
//       } catch (switchError) {
//         // Handle errors, e.g., User rejected the request
//         console.error('Failed to switch to Binance Smart Chain:', switchError);
//       }
//     }
//   });

export const switchNetwork = async (networkName) => {
  const params = NETWORK_PARAMS[networkName];
  
  if (!params) {
    console.error(`Network parameters for ${networkName} not found`);
    return;
  }

  try {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [params],
    });
  } catch (switchError) {
    console.error(`Error switching to ${networkName}:`, switchError);
  }
};

  export const connectWalletAndCheckNetwork = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();
  
      if (parseInt(chainId) !== parseInt(SEPOLIA_TESTNET_PARAMS.chainId, 16)) {
        // Prompt user to switch to Binance Smart Chain
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [SEPOLIA_TESTNET_PARAMS],
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
export const onMetamaskconnect = async () =>{
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

export const getChainId = async () =>{
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