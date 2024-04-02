import { ethers } from 'ethers';

const API_URL = 'https://api.coingecko.com/api/v3/simple/price';
const API_KEY = 'CG-CBDakoMXDyYkq1gnR71kSsdU'; // Your API key

export const fetchTokenPrice = async (tokenIds, currency = 'usd') => {
    const url = `${API_URL}?ids=${tokenIds}&vs_currencies=${currency}`;

    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'x-cg-demo-api-key': API_KEY,
            },
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not fetch token price:", error);
        return null;
    }
};

export const fetchContractBalance = async (contractAddress) => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const balance = await provider.getBalance(contractAddress);
    const balanceInEther = ethers.utils.formatEther(balance);
    return balanceInEther;
};

const fetchEthPrice = async () => {
    const ethIds = 'ethereum';
    const data = await fetchTokenPrice(ethIds);
    if (data && data[ethIds] && data[ethIds].usd) {
        const ethPrice = data[ethIds].usd;
        return ethPrice;
    }
};

export const updateProgress = async (contractAddress, totalRaiseInUsd) => {
    const ethPrice = await fetchEthPrice();
    const contractBalanceEth = await fetchContractBalance(contractAddress);
    const contractBalanceUsd = contractBalanceEth * ethPrice;
    
    const progressPercentage = (contractBalanceUsd / totalRaiseInUsd) * 100;
    // Update your progress bar here
    console.log(`Progress: ${progressPercentage.toFixed(2)}%`);
    return progressPercentage.toFixed(2);
  }