import styled, { keyframes } from "styled-components";

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

// export const Spinner = styled.div`
//   border: 4px solid rgba(255, 255, 255, 0.2); /* Light grey */
//   width: 36px;
//   height: 36px;
//   border-radius: 50%;
//   border-left-color: #2081e2; /* Spinner color */
//   animation: spin 1s ease infinite;

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

// export const Spinner = styled.div`
//   display: inline-block;
//   width: 36px;
//   height: 36px;
//   border: 4px solid rgba(255, 255, 255, 0.3); /* Slightly lighter grey for outer ring */
//   border-radius: 50%;
//   border-top-color: #2081e2; /* Primary spinner color */
//   border-bottom-color: #2081e2; /* Primary spinner color */
//   animation: spin 1s ease-in-out infinite;
//   position: relative;

//   &:after {
//     content: "";
//     position: absolute;
//     top: 3px;
//     right: 3px;
//     bottom: 3px;
//     left: 3px;
//     border: 3px solid transparent;
//     border-radius: 50%;
//     border-top-color: #49c5b6; /* Secondary spinner color */
//     border-bottom-color: #49c5b6; /* Secondary spinner color */
//     animation: spin 0.5s ease-in-out infinite;
//   }

//   @keyframes spin {
//     0% {
//       transform: rotate(0deg);
//     }
//     100% {
//       transform: rotate(360deg);
//     }
//   }
// `;

// export const Spinner = styled.div`
//   position: relative;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: #444; /* Treasure color */
//   border: 2px solid #ffd700; /* Gold border for treasure */
  
//   &:before, &:after {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 20px;
//     height: 4px;
//     background: #228b22; /* Dragon's tail color */
//     border-radius: 2px;
//     transform-origin: left;
//     animation: spin 2s linear infinite;
//   }

//   &:after {
//     animation-delay: -1s; /* Makes the second part of the tail delay */
//     background: #32cd32; /* A slightly different color for variety */
//     width: 15px; /* Shorter than the main part of the tail */
//   }

//   @keyframes spin {
//     from {
//       transform: translate(-50%, -50%) rotate(0deg);
//     }
//     to {
//       transform: translate(-50%, -50%) rotate(360deg);
//     }
//   }
// `;

// export const Spinner = styled.div`
//   position: relative;
//   width: 50px;
//   height: 50px;
//   border-radius: 50%;
//   background-color: transparent;
  
//   &:before {
//     content: '';
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     width: 6px;
//     height: 6px;
//     background: #900; /* Base of the flame */
//     border-radius: 50%;
//     transform: translate(-50%, -50%);
//     box-shadow:
//       16px -16px 0 2px #f90, /* Right top flame */
//       16px 16px 0 2px #f90,  /* Right bottom flame */
//       -16px 16px 0 2px #f90, /* Left bottom flame */
//       -16px -16px 0 2px #f90; /* Left top flame */
//     animation: spin 1s linear infinite;
//   }

//   @keyframes spin {
//     0% {
//       box-shadow:
//         16px -16px 0 2px #f90,
//         16px 16px 0 2px #f90,
//         -16px 16px 0 2px #f90,
//         -16px -16px 0 2px #f90;
//     }
//     25% {
//       box-shadow:
//         16px 0 0 2px #fc0,  /* Right flame */
//         0 16px 0 2px #fc0,  /* Bottom flame */
//         -16px 0 0 2px #fc0, /* Left flame */
//         0 -16px 0 2px #fc0; /* Top flame */
//     }
//     50% {
//       box-shadow:
//         16px -16px 0 2px #f60,
//         16px 16px 0 2px #f60,
//         -16px 16px 0 2px #f60,
//         -16px -16px 0 2px #f60;
//     }
//     75% {
//       box-shadow:
//         16px 0 0 2px #f30,
//         0 16px 0 2px #f30,
//         -16px 0 0 2px #f30,
//         0 -16px 0 2px #f30;
//     }
//     100% {
//       box-shadow:
//         16px -16px 0 2px #f90,
//         16px 16px 0 2px #f90,
//         -16px 16px 0 2px #f90,
//         -16px -16px 0 2px #f90;
//     }
//   }
// `;

const flameSpin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const dragonFlame = keyframes`
  0%, 100% {
    box-shadow:
      20px -20px #f90, /* Right top flame */
      20px 20px #f90,  /* Right bottom flame */
      -20px 20px #f90, /* Left bottom flame */
      -20px -20px #f90; /* Left top flame */
  }
  25% {
    box-shadow:
      20px 0 #fc0,  /* Right flame */
      0 20px #fc0,  /* Bottom flame */
      -20px 0 #fc0, /* Left flame */
      0 -20px #fc0; /* Top flame */
  }
  50% {
    box-shadow:
      20px -20px #f60,
      20px 20px #f60,
      -20px 20px #f60,
      -20px -20px #f60;
  }
  75% {
    box-shadow:
      20px 0 #f30,
      0 20px #f30,
      -20px 0 #f30,
      0 -20px #f30;
  }
`;

export const Spinner = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: transparent;
  animation: ${flameSpin} 2s linear infinite;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 16px;
    height: 16px;
    background: #900;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    animation: ${dragonFlame} 2s linear infinite;
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

export const StyledSelect = styled.select`
  width: 100%;
  padding: 12px 15px; // Increased padding for a better touch area and visual balance
  margin-bottom: 20px; // Consistent spacing with other elements
  background-color: #ffffff; // Clear white background for crisp appearance
  border: 2px solid #e2e2e2; // Subtle border color for depth
  border-radius: 8px; // More pronounced rounded corners for a modern look
  font-size: 16px; // Legible font size
  color: #333333; // Darker text color for better contrast
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; // Modern, clean font-family
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); // Soft shadow for depth

  &:focus {
    border-color: #9ecaed; // Highlight color when focused
    box-shadow: 0 0 5px rgba(156,202,235,0.8); // Expanding the shadow for focus indication
    outline: none; // Removing default focus outline
  }

  -webkit-appearance: none; // Removing default select dropdown style
  -moz-appearance: none;
  appearance: none;
  cursor: pointer; // Cursor pointer for better user indication

  // Custom dropdown arrow using background-image
  background-image: linear-gradient(45deg, transparent 50%, gray 50%), linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #f0f0f0, #f0f0f0); // Creating a custom arrow with gradients
  background-position: right 15px top 1em, right 10px top 1em, right 2.5em bottom 0.5em; // Positioning the custom arrows
  background-size: 5px 5px, 5px 5px, 1px 1.5em; // Sizing the custom arrows
  background-repeat: no-repeat;

  &:hover {
    border-color: #9ecaed; // Border color change on hover for visual feedback
  }
`;


