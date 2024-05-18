import Countdown, { zeroPad } from 'react-countdown';
import { Slider, SliderItem } from "components/slider/Slider";
import ProgressBar from "components/progressBar";
import React, { useEffect, useState } from 'react';
import CardHover from "components/cardHover";
import LiveProjectStyleWrapper from "./LiveProject.style";
import data from "assets/data/liveProject/dataV1";
import Button from "components/button";
import { ethers } from 'ethers';
import TransactionPopUp from './TransactionPopUp';
import { fetchTokenPrice, fetchContractBalance, updateProgress } from '../../../utils/BlockchainUtils'

//import contractABI from '../../../../contants/ABI.json'

const LiveProject = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const [isTxnPending, setIsTxnPending] = useState(false);
  const [isTxnFailed, setIsTxnFailed] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');
  const [isTxnSuccess, setIsTxnSuccess] = useState(false);
  const [gamefiPrice, setGamefiPrice] = useState('');
  const [contractBalance, setContractBalance] = useState(0);
  const [ethPrice, setEthPrice] = useState('');
  const [progress, setProgress] = useState(0);
  const totalGAFITokens = 1200; // Total GAFI tokens for the raise
  const [selectedNetwork] = useState('');
  const [currency, setCurrency] = useState('');
  const [isApprovalPending, setIsApprovalPending] = useState(false);
  const [isApprovalSuccess, setIsApprovalSuccess] = useState(false);
  const [isApprovalFailed, setIsApprovalFailed] = useState(false);
  const [countdownDate, setCountdownDate] = useState(new Date('2024-06-01T01:02:03'));

  // const [contractABI, setContractABI] = useState(null);

  // useEffect(() => {
  //   const loadABI = async () => {
  //     try {
  //       // Fetch the ABI from the public folder if static serving is set up
  //       const response = await fetch('../../../../contants/ABI.json');
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       } else {
  //         const json = await response.json();
  //         setContractABI(json);
  //       }
  //     } catch (e) {
  //       console.error("Could not load ABI", e);
  //     }
  //   };

  //   loadABI();
  // }, []);

  const depositContractAddress = '0x6C72507364d23F1447a8da80d35B2eB0FD89E7Ff';
  const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ReentrancyGuardReentrantCall",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositedToken",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositedTo",
          "type": "address"
        }
      ],
      "name": "ERC20DepositDone",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "depositedTo",
          "type": "address"
        }
      ],
      "name": "depositDone",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "depositERC20",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        }
      ],
      "name": "getERC20Balance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getInvestors",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawERC20",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

  const erc20ABI = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_upgradedAddress","type":"address"}],"name":"deprecate","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"deprecated","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_evilUser","type":"address"}],"name":"addBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"upgradedAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"maximumFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"unpause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_maker","type":"address"}],"name":"getBlackListStatus","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"paused","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pause","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newBasisPoints","type":"uint256"},{"name":"newMaxFee","type":"uint256"}],"name":"setParams","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"issue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"redeem","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"basisPointsRate","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isBlackListed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_clearedUser","type":"address"}],"name":"removeBlackList","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_UINT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_blackListedUser","type":"address"}],"name":"destroyBlackFunds","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_initialSupply","type":"uint256"},{"name":"_name","type":"string"},{"name":"_symbol","type":"string"},{"name":"_decimals","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Issue","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amount","type":"uint256"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"newAddress","type":"address"}],"name":"Deprecate","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"feeBasisPoints","type":"uint256"},{"indexed":false,"name":"maxFee","type":"uint256"}],"name":"Params","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_blackListedUser","type":"address"},{"indexed":false,"name":"_balance","type":"uint256"}],"name":"DestroyedBlackFunds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"AddedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_user","type":"address"}],"name":"RemovedBlackList","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"}]

  const USDT_ADDRESSES = {
    Ethereum: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    BNBChain: '0x55d398326f99059ff775485246999027b3197955',
  };

  const sliderSettings = {
    dots: true,
    arrows: false,
    autoplay: false,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    centerMode: true,
    centerPadding: "0px",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const tokenIds = 'gamefi'; // CoinGecko Gamefi ID
    const ethIds = 'ethereum';
    let intervalId;

    const fetchPrice = async () => {
      const data = await fetchTokenPrice(tokenIds);
      if (data && data[tokenIds] && data[tokenIds].usd) {
        setGamefiPrice(data[tokenIds].usd);
      }
    };

    const fetchEthPrice = async (ethPrice) => {
      const data = await fetchTokenPrice(ethIds);
      if (data && data[ethIds] && data[ethIds].usd) {
        setEthPrice(data[ethIds].usd);
      }
    };

    const loadBalance = async () => {
      const balance = await fetchContractBalance(depositContractAddress);
      setContractBalance(balance);
    };

    const totalRaiseInUSD = gamefiPrice ? (gamefiPrice * totalGAFITokens).toFixed(2) : 'Loading...';

    const fetchAndUpdateProgress = async () => {
      const progressPercentage = await updateProgress(depositContractAddress, totalRaiseInUSD);
      setProgress(progressPercentage);
    };

    loadBalance();

    fetchPrice(); // Fetch immediately on component mount
    fetchAndUpdateProgress();

    // Setting up the interval to fetch price every minute
    // Convert this to a larger interval if necessary to stay within API call limits
    intervalId = setInterval(fetchPrice, 60000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  //setTotalRaise(gamefiPrice * 1200);
  const totalRaiseGoal = 400000; // Example total raise goal in ether
  const progressPercentage = (contractBalance / totalRaiseGoal) * 100;
  const totalRaiseInUSD = "400,000";//gamefiPrice ? (gamefiPrice * totalGAFITokens).toFixed(2) : 'Loading...';
  console.log("Precentage of pool funded", progressPercentage);

  const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <div>Pool raise has ended</div>;
    } else {
      return (
        <div className="countdown_wrapper">
          <div>
            {zeroPad(days)}
            <span>D</span>
          </div>
          <div>
            {zeroPad(hours)}
            <span>H</span>
          </div>
          <div>
            {zeroPad(minutes)}
            <span>M</span>
          </div>
          <div>
            {zeroPad(seconds)}
            <span>S</span>
          </div>
        </div>
      )
    }
  }

  const resetTransactionState = () => {
    setIsTxnPending(false);
    setIsTxnFailed(false);
    setIsTxnSuccess(false);
    setTransactionHash('');
    // Reset the investment amount if you're storing it in the state
    setInvestmentAmount('');
    setIsApprovalFailed(false);
    setIsApprovalPending(false);
    setIsApprovalSuccess(false);
  };

  const WFTToken = "0xdAC17F958D2ee523a2206206994597C13D831ec7"


  const handleInvest = async (amount, currency, action) => {
    if (typeof window.ethereum === 'undefined') {
      console.log('MetaMask is not installed!');
      setIsPopupVisible(false);
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const depositContract = new ethers.Contract(depositContractAddress, contractABI, signer);
    let tx;

    try {
      if (currency === 'USDT') {
        if (action === 'approve') {
          setIsApprovalPending(true);
          const usdtContract = new ethers.Contract(WFTToken, erc20ABI, signer);
          const amountInWei = ethers.utils.parseUnits(amount, '6'); // USDT usually has 6 decimals

          // Approve the USDT transfer
          tx = await usdtContract.approve(depositContractAddress, amountInWei);
          const receipt = await tx.wait();
          if (receipt.status === 1) {
            setTransactionHash(tx.hash);
            setIsTxnSuccess(true);
          } else {
            setIsTxnFailed(true);
          }
          setIsApprovalPending(false);
          setIsApprovalSuccess(true);
          // You can now set a state to indicate that the app can proceed with the deposit after approval
        } else if (action === 'deposit') {
          // Deposit USDT after approval
          const amountInWei = ethers.utils.parseUnits(amount, '18');
          tx = await depositContract.depositERC20(WFTToken, amountInWei);
          setIsTxnPending(true);
          const receipt = await tx.wait();
          setIsTxnPending(false);

          if (receipt.status === 1) {
            setTransactionHash(tx.hash);
            setIsTxnSuccess(true);
          } else {
            setIsTxnFailed(true);
          }
        }
      } else if (currency === 'ETH') {
        setIsTxnPending(true);
        const amountInWei = ethers.utils.parseEther(amount);
        // Deposit ETH directly without approval
        tx = await depositContract.deposit({ value: amountInWei });
        const receipt = await tx.wait();
        setIsTxnPending(false);

        if (receipt.status === 1) {
          setTransactionHash(tx.hash);
          setIsTxnSuccess(true);
        } else {
          setIsTxnFailed(true);
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setIsTxnPending(false);
      setIsApprovalPending(false);

      if (error.code === 4001) {
        // User rejected the transaction
        setIsTxnFailed(true);
      }
      setIsPopupVisible(true);
    }
  };


  // const handleInvest = async (amount, currency, action) => {
  //   // First, check if MetaMask is available
  //   if (typeof window.ethereum !== 'undefined') {
  //     try {
  //       // Request account access if needed
  //       await window.ethereum.request({ method: 'eth_accounts' });

  //       // We use ethers to create a new provider based on MetaMask
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       // Create a signer which is needed to sign transactions
  //       const signer = provider.getSigner();

  //       // Now we create a new contract instance with the signer
  //       const contract = new ethers.Contract(
  //         depositContractAddress, // Contract address
  //         contractABI, // The imported contract ABI
  //         signer
  //       );

  //       setIsPopupVisible(true);
  //       let tx, amountInWei;


  //       if (currency === 'USDT' && action === 'approve') {

  //         // try {
  //         //   console.log("Currency is: ",currency)
  //         //   let decimals = 18; 
  //         //   let amountInTokenUnits = ethers.utils.parseUnits(amount.toString(), decimals);
  //         //   tx = await contract.deposit({ value: amountInTokenUnits});
  //         // } catch (error) {
  //         //   console.error("Approval transaction failed:", error);
  //         // }
  //         try {
  //           setIsApprovalPending(true);
  //           amountInWei = ethers.utils.parseUnits(amount, '18'); // Assuming 6 decimals for USDT
  //           //await approveUSDT(signer, WFTToken, depositContractAddress, amountInWei);
  //           const usdtContract = new ethers.Contract(WFTToken, erc20ABI, signer);
  //           const tx = await usdtContract.approve(depositContractAddress, amountInWei);
  //           console.log('Approval transaction:', tx);
  //           const approvalReceipt = await tx.wait();
  //           setIsApprovalPending(false);
  //           console.log("Approval status:",approvalReceipt.status);
  //           console.log("Txn hash:", approvalReceipt.transactionHash);
  //           setIsApprovalSuccess(true);
  //         } catch (error) {
  //           console.error('Approval or Deposit Failed:', error);
  //           setIsApprovalPending(false);
  //           setIsApprovalFailed(true);
  //           setIsTxnFailed(true);
  //         }
  //       } else if (currency === 'USDT' && action === 'deposit' || currency === 'ETH') {
  //         try {
  //           if (currency === 'USDT') {
  //             // Assuming you have a function to handle the USDT deposit in your contract
  //             tx = await contract.depositERC20(WFTToken, ethers.utils.parseUnits(amountInWei, '18'));
  //           } else {
  //             // ETH deposit flow
  //             tx = await contract.deposit({ value: ethers.utils.parseEther(amountInWei) });
  //           }

  //           const receipt = await tx.wait();
  //           setIsTxnPending(false);

  //           if (receipt.status === 1) {
  //             setTransactionHash(receipt.transactionHash);
  //             setIsTxnSuccess(true);
  //           } else {
  //             setIsTxnFailed(true);
  //           }

  //           // if (approvalReceipt.status === 1 && action === 'deposit') {
  //           //   console.log("Approval status:",approvalReceipt.status)
  //           //   setIsApprovalSuccess(true);
  //           //   // Proceed with the deposit after successful approval
  //           //   const depositTx = await contract.depositERC20({ value: WFTToken, amountInWei});
  //           //   setIsTxnPending(true);
  //           //   await depositTx.wait();
  //           //   setIsTxnPending(false);
  //           //   setIsTxnSuccess(true);
  //           //   setTransactionHash(depositTx.transactionHash);
  //           // } else {
  //           //   setIsApprovalFailed(true);
  //           // }

  //           // setIsTxnPending(true);
  //           // const amountInWei = ethers.utils.parseEther(amount);
  //           // const depositTx = await contract.deposit({ value: amountInWei });
  //           // await depositTx.wait();
  //           // setIsTxnPending(false);
  //           // setIsTxnSuccess(true);
  //           // setTransactionHash(depositTx.transactionHash);
  //         } catch (error) {
  //           console.error('ETH or USDT Deposit Failed:', error);
  //           setIsTxnPending(false);
  //           setIsTxnFailed(true);
  //         }
  //       }
  //       // } else if (currency === 'USDT') {
  //       //   try {
  //       //     console.log("Currency is: ",currency)
  //       //     let decimals = 12; 
  //       //     let amountInTokenUnits = ethers.utils.parseUnits(amount.toString(), decimals);
  //       //     setIsApprovalPending(true);
  //       //     await approveUSDT(signer, WFTToken, depositContractAddress, amountInTokenUnits);
  //       //     console.log('Approval successful');
  //       //     setIsApprovalSuccess(true);
  //       //     tx = await contract.depositERC20({ value: WFTToken, amountInTokenUnits});
  //       //   } catch (error) {
  //       //     setIsApprovalPending(false);
  //       //     setIsApprovalFailed(true);
  //       //     console.error("Approval transaction failed:", error);
  //       //   }
  //       // }


  //       // setTransactionHash(tx.hash);
  //       // setIsTxnPending(false);
  //       // console.log('Transaction sent:', tx);
  //       // setIsTxnPending(true);
  //       // // Wait for the transaction to be confirmed
  //       // const receipt = await tx.wait();
  //       // console.log('Transaction confirmed:', receipt);

  //       // setIsTxnPending(true);


  //       // if (receipt.status === 1) {
  //       //   setTransactionHash(tx.hash);
  //       //   console.log('Transaction succeeded with hash:', tx.hash);
  //       //   setIsTxnSuccess(true);
  //       //   setIsTxnPending(false);
  //       //   setIsTxnFailed(false);

  //       // } else {
  //       //   setIsTxnFailed(true);
  //       // }

  //     } catch (error) {
  //       console.error('An error occurred:', error);

  //       if (error.code === 4001) { // Code 4001 indicates the user rejected the request in MetaMask
  //         setIsTxnFailed(true);
  //       }
  //       setIsTxnPending(false);
  //       setIsPopupVisible(true);
  //       //setIsTxnFailed(true);
  //     }
  //   } else {
  //     console.log('MetaMask is not installed!');
  //     setIsPopupVisible(false);
  //     setIsTxnPending(false);
  //     // Notify the user they need to install MetaMask
  //   }
  // };

  // const handleInvest = async (amount, currency) => {
  //   if (typeof window.ethereum === 'undefined') {
  //     console.log('MetaMask is not installed!');
  //     setIsPopupVisible(false);
  //     // Optionally, notify the user MetaMask is not installed
  //     return;
  //   }

  //   const provider = new ethers.providers.Web3Provider(window.ethereum);
  //   const signer = provider.getSigner();
  //   //const depositContractAddress = '0xYourDepositContractAddressHere'; // Replace with your contract's address

  //   setIsPopupVisible(true);

  //   try {
  //     if (currency === 'USDT') {
  //       const usdtAddress = USDT_ADDRESSES[selectedNetwork]; // Use selected network to determine USDT address
  //       await approveUSDT(signer, usdtAddress, depositContractAddress, amount);
  //       await depositUSDT(signer, depositContractAddress, amount, currency);
  //     } else if (currency === 'ETH') {
  //       // Handle ETH investment (native currency)
  //       const tx = await signer.sendTransaction({
  //         to: depositContractAddress,
  //         value: ethers.utils.parseEther(amount.toString()), // Convert amount to wei
  //       });
  //       console.log('Transaction sent:', tx);
  //       setTransactionHash(tx.hash);
  //       await handleTransactionConfirmation(tx);
  //     }
  //   } catch (error) {
  //     console.error('An error occurred:', error);
  //     handleTransactionError(error);
  //   }
  // };

  // Helper function for USDT approval
  async function approveUSDT(signer, usdtContractAddress, depositContractAddress, amount) {
    const usdtContract = new ethers.Contract(usdtContractAddress, erc20ABI, signer);
    const amountInWei = ethers.utils.parseUnits(amount.toString(), 6); // USDT typically has 6 decimals
    const tx = await usdtContract.approve(depositContractAddress, amountInWei);
    console.log('Approval transaction:', tx);
    await tx.wait(); // Wait for the transaction to be confirmed
  }

  // Generalized deposit function, assuming your contract's deposit method can handle both USDT and ETH
  async function depositUSDT(signer, depositContractAddress, amount, currency) {
    const contract = new ethers.Contract(depositContractAddress, contractABI, signer);
    const method = currency === 'USDT' ? 'depositUSDT' : 'deposit';
    const tx = await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
    setTransactionHash(tx.hash);
    await handleTransactionConfirmation(tx);
  }

  // Handles transaction confirmation logic
  async function handleTransactionConfirmation(tx) {
    const receipt = await tx.wait();
    setIsTxnPending(false);

    if (receipt.status === 1) {
      console.log('Transaction succeeded:', receipt);
      setIsTxnSuccess(true);
    } else {
      console.log('Transaction failed:', receipt);
      setIsTxnFailed(true);
    }
  }

  // Handles errors during the transaction
  function handleTransactionError(error) {
    setIsTxnPending(false);
    setIsTxnFailed(true);
    if (error.code === 4001) {
      // User rejected the transaction
      console.log('Transaction was rejected by the user.');
    } else {
      console.error('Transaction error:', error);
    }
  }
  // const handleInvest = async (amount) => {
  //   // First, check if MetaMask is available
  //   if (typeof window.ethereum !== 'undefined') {
  //     try {
  //       // Request account access if needed
  //       await window.ethereum.request({ method: 'eth_accounts' });

  //       // We use ethers to create a new provider based on MetaMask
  //       const provider = new ethers.providers.Web3Provider(window.ethereum);

  //       // Create a signer which is needed to sign transactions
  //       const signer = provider.getSigner();

  //       // Now we create a new contract instance with the signer
  //       const contract = new ethers.Contract(
  //         depositContractAddress, // Contract address
  //         contractABI, // The imported contract ABI
  //         signer
  //       );

  //       setIsPopupVisible(true);

  //       const tx = await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
  //       setTransactionHash(tx.hash);
  //       setIsTxnPending(false);
  //       console.log('Transaction sent:', tx);
  //       setIsTxnPending(true);
  //       // Wait for the transaction to be confirmed
  //       const receipt = await tx.wait();
  //       console.log('Transaction confirmed:', receipt);

  //       if (receipt.status === 1) {
  //         setTransactionHash(tx.hash);
  //         console.log('Transaction succeeded with hash:', tx.hash);
  //         setIsTxnSuccess(true);
  //         setIsTxnPending(false);
  //         setIsTxnFailed(false);

  //       } else {
  //         setIsTxnFailed(true);
  //       }

  //     } catch (error) {
  //       console.error('An error occurred:', error);

  //       if (error.code === 4001) { // Code 4001 indicates the user rejected the request in MetaMask
  //         setIsTxnFailed(true);
  //       }
  //       setIsTxnPending(false);
  //       setIsPopupVisible(true);
  //       //setIsTxnFailed(true);
  //     }
  //   } else {
  //     console.log('MetaMask is not installed!');
  //     setIsPopupVisible(false);
  //     setIsTxnPending(false);
  //     // Notify the user they need to install MetaMask
  //   }
  // };


  return (
    <LiveProjectStyleWrapper className="live_project_wrapper">
      <div className="container">
        <Slider {...sliderSettings}>
          {data?.map((item, i) => (
            <SliderItem key={i}>
              <div className="game-price-item">
                <div className="game-price-inner">
                  <div className="total-price">
                    <div className="price-inner d-flex mb-45 md-mb-20">
                      <div className="image-icon">
                        <a href="/projects-details-1">
                          <img src={item.projectIcon} alt="icon" />
                        </a>
                      </div>
                      <div className="price-details">
                        <h3 className="mb-15">
                          <a href="/projects-details-1">{item.title}</a>
                        </h3>
                        <div className="dsc">USDT PRICE = 0.002</div>
                      </div>
                    </div>
                    <div className="all-raise">
                      Total Raise in USD ${totalRaiseInUSD}
                    </div>
                  </div>
                  <div className="allocation-max text-center">
                    <img src={item.coinIcon} alt="icon" style={{ marginBottom: '10px' }} />
                    <Button onClick={() => setIsPopupVisible(true)} // Replace this with the actual event handler function
                      variant="mint" // Same style as "JOIN COMMUNITY" button
                      md
                      isCenter
                      style={{ borderRadius: '20px' }}
                      className="banner-btn">
                      INVEST
                    </Button>
                  </div>
                  <div className="targeted-raise">
                    <div className="seles-end-text">Sale in progress</div>
                    <Countdown date={countdownDate} 
                      renderer={CountdownRender} />
                    <div className="targeted-raise-amount">
                      Maximum Rewards to Early Birds!!!
                    </div>
                    {/* <div className="max-allocation">
                      Maximum Guaranteed Allocation in IDOs
                    </div> */}
                  </div>
                </div>
                <div className="progress-inner">
                  <ProgressBar progress={`${progress}%`} />
                </div>

                {/* hover */}
                <CardHover />
              </div>
            </SliderItem>
          ))}
        </Slider>
        <TransactionPopUp
          isOpen={isPopupVisible}
          onSubmit={handleInvest}
          isTxnPending={isTxnPending}
          txHash={transactionHash}
          isTxnFailed={isTxnFailed}
          isTxnSuccess={isTxnSuccess}
          currency={currency}
          setCurrency={setCurrency}
          isApprovalPending={isApprovalPending}
          isApprovalFailed={isApprovalFailed}
          isApprovalSuccess={isApprovalSuccess}
          onClose={() => {
            setIsPopupVisible(false);
            resetTransactionState(); // Call reset when closing the pop-up
          }}
        />
      </div>
    </LiveProjectStyleWrapper>
  );
};

export default LiveProject;
