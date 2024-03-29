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
//import contractABI from '../../../../contants/ABI.json'

const LiveProject = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [transactionHash, setTransactionHash] = useState('');
  const [isTxnPending, setIsTxnPending] = useState(false);
  const [isTxnFailed, setIsTxnFailed] = useState(false);
  const [investmentAmount, setInvestmentAmount] = useState('');

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
        setIsTxnPending(true);
        setIsTxnFailed(false);

        // You'll call the deposit method from your contract
        // Here, we assume that you want to deposit 0 ether just for demonstration
        // You will replace '0' with the amount you want to deposit
        // and convert it to the correct units using ethers.utils.parseEther
        const tx = await contract.deposit({ value: ethers.utils.parseEther(amount || '0') });
        setTransactionHash(tx.hash);
        setIsTxnPending(false);
        console.log('Transaction sent:', tx);
        // Wait for the transaction to be confirmed
        await tx.wait();
        console.log('Transaction confirmed');
      } catch (error) {
        console.error('An error occurred:', error);

        if (error.code === 4001) { // Code 4001 indicates the user rejected the request in MetaMask
          setIsTxnFailed(true);
        }
        setIsPopupVisible(true);
        setIsTxnPending(false);
        isTxnFailed(true);
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
                        <div className="dsc">PRICE = {item.price}</div>
                      </div>
                    </div>
                    <div className="all-raise">
                      Total Raise {item.totalRise}
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
                    <div className="seles-end-text">Pool raise ended</div>
                    <Countdown date="2024-02-01T01:02:03" renderer={CountdownRender} />
                    <div className="targeted-raise-amount">
                      Targeted Raise {item.targetedRise}
                    </div>
                  </div>
                </div>
                <div className="progress-inner">
                  <ProgressBar progress={item.progress} />
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
