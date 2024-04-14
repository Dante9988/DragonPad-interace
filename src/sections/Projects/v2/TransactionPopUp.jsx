import { PopUpOverlay, PopUpContent, Spinner, PopUpButton, CloseIcon, StyledInput, StyledSelect } from './TransactionPopUp.style';
import React, { useEffect, useState } from 'react';
import Button from "components/button";

const TransactionPopUp = ({ isOpen, isTxnPending, txHash, isTxnFailed, onClose, onSubmit, isTxnSuccess, currency, setCurrency, isApprovalPending, isApprovalFailed, isApprovalSuccess }) => {
    const [amount, setAmount] = useState('');
    const [buttonState, setButtonState] = useState(''); // 'submit', 'close'
    const [isApproved, setIsApproved] = useState(false);
    const [isAmountDisabled, setIsAmountDisabled] = useState(false);
    const [buttonText, setButtonText] = useState('Submit');

    useEffect(() => {
        if (txHash || isTxnSuccess) {
          setButtonState('');
          setIsAmountDisabled(false);
        } else if (isTxnFailed) {
          setButtonState('try again');
          setIsAmountDisabled(false);
        } else if (currency === 'USDT' && !isApprovalSuccess) {
          setButtonState('approve');
        } else {
          setButtonState('submit');
        }
      }, [txHash, isTxnSuccess, isTxnFailed, currency, isApprovalSuccess]);

    const handleButtonClick = async () => {
        if (buttonState === 'submit') {
            await onSubmit(amount, currency, 'deposit');
        } else if (buttonState === 'approve') {
            await onSubmit(amount, currency, 'approve');
        } else if (buttonState === 'try again') {
            // logic to retry the transaction
        } else {
            onClose();
            setAmount('');
        }
    };

    const onButtonClick = async () => {
        const action = currency === 'USDT' && !isApprovalSuccess ? 'approve' : 'deposit';
        buttonState = currency === 'USDT' && !isApprovalSuccess ? 'approve' : 'submit';

        await onSubmit(amount, currency, action); // Assuming onSubmit is a prop that refers to handleInvest
      };

    // const handleCurrencyChange = (e) => {
    //     setCurrency(e.target.value);
    //     if (onCurrencyChange) {
    //         onCurrencyChange(e.target.value); // Notifying the parent component about the change
    //     }
    // };

    if (!isOpen) return null;

    return (
        <PopUpOverlay>
            <PopUpContent>
                <CloseIcon onClick={onClose} />
                {isApprovalPending && (
                    <>
                        <Spinner />
                        <p>Approval is processing...</p>
                    </>
                )}
                {isTxnPending && !isApprovalPending && (
                    <>
                        <Spinner />
                        <p>Transaction is processing...</p>
                    </>
                )}
                {isTxnSuccess && (
                    <>
                        <p>Transaction successful!</p>
                        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank" style={{ borderRadius: '20px' }} rel="noopener noreferrer">
                            View on Etherscan
                        </a>
                        <PopUpButton onClick={onClose} style={{ borderRadius: '20px' }}>
                            Close
                        </PopUpButton>
                    </>
                )}
                {isApprovalSuccess && !isApprovalFailed && !isApprovalPending && (
                    <>
                        <p>Approval successful!</p>
                        <a href={`https://etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
                            View on Etherscan
                        </a>
                        {/* <StyledInput
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            disabled={isAmountDisabled}
                />*/}
                        {/* <PopUpButton onClick={handleButtonClick}>Submit</PopUpButton>  */}
                    </>
                )}
                {(isTxnFailed && isApprovalFailed) && (
                    <>
                        <p>Transaction failed. Please try again.</p>
                        <PopUpButton onClick={onClose} style={{ borderRadius: '20px' }}>
                            Close
                        </PopUpButton>
                    </>
                )}
                {(!isTxnPending && !isTxnSuccess && !isTxnFailed && !isApprovalPending) && (
                    <>
                        <StyledSelect value={currency} onChange={(e) => setCurrency(e.target.value)}>
                            <option value="ETH">ETH</option>
                            <option value="USDT">USDT</option>
                        </StyledSelect>
                        <StyledInput
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            disabled={isAmountDisabled}
                        />
                        <PopUpButton onClick={handleButtonClick} style={{ borderRadius: '20px' }}>{buttonState}</PopUpButton>
                    </>
                )}
            </PopUpContent>
        </PopUpOverlay>
    );
};

export default TransactionPopUp;
// return (
//     <PopUpOverlay>
//         <PopUpContent>
//             <CloseIcon onClick={onClose} />
//             {isTxnPending && (
//                 <>
//                     <Spinner />
//                     <p>Transaction is processing...</p>
//                 </>
//             )}
//             {isTxnSuccess && (
//                 <>
//                     <p>Transaction successful!</p>
//                     <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
//                         View on Etherscan
//                     </a>
//                     <PopUpButton onClick={handleButtonClick}>
//                         Close
//                     </PopUpButton>
//                 </>
//             )}
//             {isTxnFailed && (
//                 <>
//                     <p>Transaction failed. Please try again.</p>
//                     <PopUpButton onClick={() => setAmount('')}>
//                         Try Again
//                     </PopUpButton>
//                 </>
//             )}
//             {(!isTxnPending && !isTxnSuccess && !isTxnFailed) && (
//                 <>
//                     <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//                         <option value="ETH">ETH</option>
//                         <option value="BNB">BNB</option>
//                         <option value="USDT">USDT</option>
//                     </select>
//                     <StyledInput
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         placeholder="Enter amount"
//                     />
//                     <PopUpButton onClick={handleButtonClick}>
//                         Submit
//                     </PopUpButton>
//                 </>
//             )}
//         </PopUpContent>
//     </PopUpOverlay>
// );
// return (
//     <PopUpOverlay>
//         <PopUpContent>
//             <CloseIcon onClick={onClose} />
//             {isTxnPending ? (
//                 <>
//                     <Spinner />
//                     <p>Transaction is processing...</p>
//                 </>
//             ) : txHash ? (
//                 <>
//                     <p>Transaction successful!</p>
//                     <a href={`https://sepolia.etherscan.io/tx/${txHash}`} target="_blank" rel="noopener noreferrer">
//                         View on Etherscan
//                     </a>
//                     <PopUpButton onClick={handleButtonClick} state={txHash || isTxnFailed ? "close" : "submit"}>
//                         {txHash || isTxnFailed ? 'Close' : 'Submit'}
//                     </PopUpButton>
//                 </>
//             ) : isTxnFailed ? (
//                 <>
//                     <p>Transaction failed. Please try again.</p>
//                     <PopUpButton onClick={handleButtonClick} state={txHash || isTxnFailed ? "close" : "submit"}>
//                         {txHash || isTxnFailed ? 'Close' : 'Submit'}
//                     </PopUpButton>
//                 </>
//             ) : (
//                 <>
//                     <StyledInput
//                         type="number"
//                         value={amount}
//                         onChange={(e) => setAmount(e.target.value)}
//                         placeholder="Enter amount to invest"
//                     />
//                     <PopUpButton onClick={() => handleButtonClick(amount)} state="submit">Submit</PopUpButton>
//                 </>
//             )}
//         </PopUpContent>
//     </PopUpOverlay>
// );

// };

// export default TransactionPopUp;