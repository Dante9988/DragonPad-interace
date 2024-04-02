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

  const contractAddress = '0x63720ac99714f71000a8be17a6c76830b7ead6b8';
  const contractABI = [{ "inputs": [], "stateMutability": "nonpayable", "type": "constructor" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "OwnableInvalidOwner", "type": "error" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "OwnableUnauthorizedAccount", "type": "error" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }, { "indexed": true, "internalType": "address", "name": "depositedTo", "type": "address" }], "name": "depositDone", "type": "event" }, { "inputs": [], "name": "deposit", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "payable", "type": "function" }, { "inputs": [], "name": "getBalance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "withdraw", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "nonpayable", "type": "function" }];

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
      const balance = await fetchContractBalance(contractAddress);
      setContractBalance(balance);
    };

    const totalRaiseInUSD = gamefiPrice ? (gamefiPrice * totalGAFITokens).toFixed(2) : 'Loading...';

    const fetchAndUpdateProgress = async () => {
      const progressPercentage = await updateProgress(contractAddress, totalRaiseInUSD);
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
  const totalRaiseGoal = 1200; // Example total raise goal in ether
  const progressPercentage = (contractBalance / totalRaiseGoal) * 100;
  const totalRaiseInUSD = gamefiPrice ? (gamefiPrice * totalGAFITokens).toFixed(2) : 'Loading...';
  console.log("Precentage of pool funded",progressPercentage);

  const CountdownRender = ({ days, hours, minutes, seconds, completed }) => {
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

  const resetTransactionState = () => {
    setIsTxnPending(false);
    setIsTxnFailed(false);
    setIsTxnSuccess(false);
    setTransactionHash('');
    // Reset the investment amount if you're storing it in the state
    setInvestmentAmount('');
  };


  const handleInvest = async (amount) => {
    // First, check if MetaMask is available
    if (typeof window.ethereum !== 'undefined') {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_accounts' });

        // We use ethers to create a new provider based on MetaMask
        const provider = new ethers.providers.Web3Provider(window.ethereum);

        // Create a signer which is needed to sign transactions
        const signer = provider.getSigner();

        // Now we create a new contract instance with the signer
        const contract = new ethers.Contract(
          contractAddress, // Contract address
          contractABI, // The imported contract ABI
          signer
        );

        setIsPopupVisible(true);

        const tx = await contract.deposit({ value: ethers.utils.parseEther(amount.toString()) });
        setTransactionHash(tx.hash);
        setIsTxnPending(false);
        console.log('Transaction sent:', tx);
        setIsTxnPending(true);
        // Wait for the transaction to be confirmed
        const receipt = await tx.wait();
        console.log('Transaction confirmed:', receipt);

        setIsTxnPending(true);


        if (receipt.status === 1) {
          setTransactionHash(tx.hash);
          console.log('Transaction succeeded with hash:', tx.hash);
          setIsTxnSuccess(true);
          setIsTxnPending(false);
          setIsTxnFailed(false);

        } else {
          setIsTxnFailed(true);
        }

      } catch (error) {
        console.error('An error occurred:', error);

        if (error.code === 4001) { // Code 4001 indicates the user rejected the request in MetaMask
          setIsTxnFailed(true);
        }
        setIsTxnPending(false);
        setIsPopupVisible(true);
        //setIsTxnFailed(true);
      }
    } else {
      console.log('MetaMask is not installed!');
      setIsPopupVisible(false);
      setIsTxnPending(false);
      // Notify the user they need to install MetaMask
    }
  };


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
                        <div className="dsc">LIVE PRICE = {gamefiPrice ? `${gamefiPrice} USD` : 'Loading...'}</div>
                      </div>
                    </div>
                    <div className="all-raise">
                      Total Raise in USD ${totalRaiseInUSD}
                    </div>
                  </div>
                  <div className="allocation-max text-center">
                    <img src={item.coinIcon} alt="icon" />
                    <Button onClick={handleInvest} // Replace this with the actual event handler function
                      variant="mint" // Same style as "JOIN COMMUNITY" button
                      md
                      isCenter
                      className="banner-btn">
                      INVEST
                    </Button>
                  </div>
                  <div className="targeted-raise">
                    <div className="seles-end-text">Pool raise in progress</div>
                    <Countdown date="2024-02-01T01:02:03" renderer={CountdownRender} />
                    <div className="targeted-raise-amount">
                      Targeted Raise For Staking {item.targetedRise}
                    </div>
                    <div className="max-allocation">
                      Maximum Guaranteed Allocation in IDOs
                    </div>
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
