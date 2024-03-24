import { useModal } from "utils/ModalContext";
import { MdNotes, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from "react-icons/md";
import NavWrapper from "./Header.style";
import Button from "components/button";
import MobileMenu from "../MobileMenu/MobileMenu";
import data from "assets/data/menu/menuData";
import logo from "assets/images/logo.png";
import React, { useState, useEffect } from "react";
import { isAccountConnected, onChainChange, removeChainChangeListener } from "../../../lib/metamaskhandler"

import connectIcon from "assets/images/icons/connect.png"
// import walletIcon1 from "assets/images/icons/pancake.png"
// import walletIcon2 from "assets/images/icons/uniswap.png"
// import walletIcon3 from "assets/images/icons/market.png"
// import walletIcon4 from "assets/images/icons/gate.png"



const Header = () => {
  const { walletModalHandle } = useModal();
  const [isMobileMenu, setMobileMenu] = useState(false);
  const [userAddress, setUserAddress] = useState(false);
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(true);

  useEffect(() => {
    const checkWalletConnection = async () => {
      const accounts = await isAccountConnected();
      if (accounts && accounts.length > 0) {
        setIsWalletConnected(true);
        setUserAddress(accounts[0]);
      }
    };

    checkWalletConnection();
  }, []);

  const formatAddress = (address) => `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;

  const handleWalletBtn = (e) => {
    e.preventDefault();
    walletModalHandle();
  };

  const handleMobileMenu = () => {
    setMobileMenu(!isMobileMenu);
  };

  // *******Comment out this code blew if you want to use sticky menu *******
  // useEffect(() => {
  //   const header = document.getElementById("navbar");
  //   const handleScroll = window.addEventListener("scroll", () => {
  //     if (window.pageYOffset > 50) {
  //       header.classList.add("sticky");
  //     } else {
  //       header.classList.remove("sticky");
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("sticky", handleScroll);
  //   };
  // }, []);

  // const handleWalletBtn = (e) => {
  //   e.preventDefault();
  //   walletModalHandle()
  // }

  return (
    <NavWrapper className="gamfi_header" id="navbar">
      <div className="container">
        {/* Main Menu Start */}
        <div className="gamfi_menu_sect">
          <div className="gamfi_menu_left_sect">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="gamfi nft logo" />
              </a>
            </div>
          </div>
          <div className="gamfi_menu_right_sect gamfi_v1_menu_right_sect">
            <div className="gamfi_menu_list">
              <ul>
                {/* menu  */}
                {data?.map((menu, i) => (
                  <li key={i}>
                    <a href={menu.url}>{menu.title} {menu.subMenus?.length > 0 && <MdOutlineKeyboardArrowDown />}</a>

                    {/* if has subMenu and length is greater than 0 */}
                    {menu.subMenus?.length > 0 && (
                      <ul className="sub_menu_list">
                        {menu.subMenus?.map((subMenu, i) => (
                          <li key={i}>
                            <a href={subMenu.url}>{subMenu.title} {subMenu?.subMenuChilds?.length > 0 && <MdOutlineKeyboardArrowRight />}</a>

                            {/* if subMenu child has menu child */}
                            {subMenu?.subMenuChilds?.length > 0 && (
                              <ul className="sub_menu_child_list">
                                {subMenu?.subMenuChilds?.map((subChild, i) => (
                                  <li key={i}>
                                    <a href={subChild.url}> {subChild.title} </a>
                                  </li>

                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="gamfi_menu_btns">
              <button className="menu_btn" onClick={() => handleMobileMenu()}>
                <MdNotes />
              </button>

              <div className="wallet_btn">
                Join a Pool <a href="#"/>
                {/* Join a Pool <MdOutlineKeyboardArrowDown /> */}

                {/* <div className="wallet_token_list"> 
                    <a href="#"> <img src={walletIcon1} alt="icon" /> Raydium </a>  
                    <a href="#"> <img src={walletIcon2} alt="icon" />  Orca</a>  
                    <a href="#"> <img src={walletIcon3} alt="icon" />  DexTools</a>  
                    <a href="#"> <img src={walletIcon4} alt="icon" />  DexScreener</a> 
                    <a href="#"> <img src={walletIcon4} alt="icon" />  BirdEye</a> 
                </div> */}
              </div>
              <Button
                href="# "
                sm
                variant="white"
                className="connect_btn"
                onClick={e => handleWalletBtn(e)}
              >
                <img src={connectIcon} alt="icon" />
                {isWalletConnected ? formatAddress(userAddress) : 'Connect'}
              </Button>
            </div>
          </div>
        </div>
        {/* <!-- Main Menu END --> */}
        {/* <!-- mobile menu --> */}
        {isMobileMenu && <MobileMenu mobileMenuhandle={handleMobileMenu} />}
      </div>
    </NavWrapper>
  );
};

export default Header;
