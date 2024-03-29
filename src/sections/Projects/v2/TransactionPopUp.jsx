import { PopUpOverlay, PopUpContent, Spinner, PopUpButton, CloseIcon, StyledInput } from './TransactionPopUp.style';
import React, { useEffect, useState } from 'react';
import Button from "components/button";

const TransactionPopUp = ({ isOpen, isTxnPending, txHash, isTxnFailed, onClose, onSubmit }) => {
    const [amount, setAmount] = useState('');
    const [buttonState, setButtonState] = useState(''); // 'submit', 'close'

    useEffect(() => {
        if (txHash || isTxnFailed) {
            setButtonState('close');
        } else {
            setButtonState('submit');
        }
    }, [txHash, isTxnFailed]);

    const handleButtonClick = async () => {
        if (buttonState === 'submit') {
            await onSubmit(amount);
        } else {
            onClose();
            setAmount('');
        }
    };

    if (!isOpen) return null;

    return (
        <PopUpOverlay>
            <PopUpContent>
                <CloseIcon onClick={onClose} />
                {isTxnPending ? (
                    <>
                        <Spinner />
                        <p>Transaction is processing...</p>
                    </>
                ) : txHash ? (
                    <>
                        <p>Transaction successful!</p>
                        <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                            View on Etherscan
                        </a>
                        <PopUpButton onClick={handleButtonClick} state={txHash || isTxnFailed ? "close" : "submit"}>
                            {txHash || isTxnFailed ? 'Close' : 'Submit'}
                        </PopUpButton>
                    </>
                ) : isTxnFailed ? (
                    <>
                        <p>Transaction failed. Please try again.</p>
                        <PopUpButton onClick={handleButtonClick} state={txHash || isTxnFailed ? "close" : "submit"}>
                            {txHash || isTxnFailed ? 'Close' : 'Submit'}
                        </PopUpButton>
                    </>
                ) : (
                    <>
                        <StyledInput
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount to invest"
                        />
                        <PopUpButton onClick={() => handleButtonClick(amount)} state="submit">Submit</PopUpButton>
                    </>
                )}
            </PopUpContent>
        </PopUpOverlay>
    );

};

export default TransactionPopUp;