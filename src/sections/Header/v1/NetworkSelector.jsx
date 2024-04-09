import React from 'react';

const NETWORKS = {
    Ethereum: {
        chainId: '0xAA36A7', // Hexadecimal for 11155111
        chainName: 'Sepolia Testnet',
        nativeCurrency: {
            name: 'Ether',
            symbol: 'ETH',
            decimals: 18,
        },
        rpcUrls: ['https://eth-sepolia.g.alchemy.com/v2/yGwUwvfEKQhX1lHKwtbC_WG6z7M9CFph'], // Replace API_KEY with your actual API key
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

const NetworkSelector = ({ onNetworkSelected }) => {
    const handleChange = (event) => {
      onNetworkSelected(event.target.value);
    };
  
    return (
      <select onChange={handleChange} defaultValue="">
        <option value="" disabled>Select Network</option>
        {Object.keys(NETWORKS).map((network) => (
          <option key={network} value={network}>{network}</option>
        ))}
      </select>
    );
  };

  export default NetworkSelector;
