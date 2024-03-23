import checkIcon from "assets/images/kycimg/RMcheckicon.svg";
import minusIcon from "assets/images/kycimg/munies.svg";

const data = [
  {
    title: "Q1 2021",
    isLunched: true,
    checkList: [
      {
        icon: checkIcon,
        text: "Launch on GamFi",
      },
      {
        icon: checkIcon,
        text: "Seed round",
      },
      {
        icon: checkIcon,
        text: "Listing on CEX",
      },
      {
        icon: checkIcon,
        text: "Development of NFT Marketplace",
      },
    ],
  },
  {
    title: "Q2 2021",
    isLunched: true,
    checkList: [
      {
        icon: checkIcon,
        text: "First NFT pre-orders",
      },
      {
        icon: checkIcon,
        text: "Launch of the GAME coin",
      },
      {
        icon: checkIcon,
        text: "Full-scale platform launch",
      },
    ],
  },
  {
    title: "Q1 2022",
    isLunched: true,
    checkList: [
      {
        icon: checkIcon,
        text: "Launch on GamFi",
      },
      {
        icon: checkIcon,
        text: "Auction system integration",
      },
      {
        icon: minusIcon,
        text: "Mobile app for iOS and Android",
      },
      {
        icon: minusIcon,
        text: "Development of NFT Marketplace",
      },
      {
        icon: minusIcon,
        text: "Game launch",
      },
    ],
  },
  {
    title: "Q2 2022",
    isLunched: false,
    checkList: [
      {
        icon: minusIcon,
        text: "Application for crypto exchange",
      },
      {
        icon: minusIcon,
        text: "Private round",
      },
      {
        icon: minusIcon,
        text: "New team member added",
      },
      {
        icon: minusIcon,
        text: "Team expansion",
      },
    ],
  },
];

export default data;
