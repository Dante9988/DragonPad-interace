import styled from "styled-components";

export const PopUpOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure this is above other content */
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.2); /* Light grey */
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: #2081e2; /* Spinner color */
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  &::before, &::after {
    position: absolute;
    left: 11px;
    content: ' ';
    height: 24px;
    width: 2px;
    background-color: #333; /* Adjust the color to fit your design */
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0 20px; // Adjust spacing as needed
  border: 1px solid #ccc; // A light grey border
  border-radius: 4px; // Slightly rounded corners for a modern look
  box-sizing: border-box; // Ensures padding doesn't increase the input's width
  font-size: 16px; // Increase font size for better readability

  &:focus {
    border-color: #4CAF50; // Highlight with a green border on focus
    outline: none; // Remove default focus outline
  }
`;

export const PopUpButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  background-color: ${({ state }) => state === 'Submit' ? '#4CAF50' : '#F44336'}; /* Green for submit, red for close */
  &:hover {
    opacity: 0.8;
  }
`;


export const PopUpContent = styled.div`
  background: radial-gradient(circle, #4a4176 -24%, #1e1f35 40%);
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 30px;
  position: relative;
  width: 90%;
  max-width: 500px;
  text-align: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 10px; /* Match the parent's border-radius */
    background: url($});
    opacity: 0.8;
    z-index: -1;
  }

  p {
    font-family: "Inter", sans-serif;
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 20px;
  }

  a {
    font-family: "Russo One", sans-serif;
    background: #2081e2;
    color: #ffffff;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
    margin-bottom: 20px;
    display: inline-block;
    transition: background-color 0.3s;

    &:hover {
      background-color: #1064a3;
    }
  }

  button {
    font-family: "Russo One", sans-serif;
    background: #e02020;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: #a31212;
    }
  }
`;
