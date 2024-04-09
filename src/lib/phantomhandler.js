export const isPhantomInstalled = () => {
  return window.phantom && window.phantom.solana && window.phantom.solana.isPhantom;
};

export const connectWallet = async () => {
  if (isPhantomInstalled()) {
    try {
      const response = await window.phantom.solana.connect({ onlyIfTrusted: true });
      return {
        publicKey: response.publicKey.toString(),
        isConnected: true,
      };
    } catch (error) {
      // Handle any errors that occur during connection
      console.error('Error connecting to Phantom wallet:', error);
      return {
        publicKey: null,
        isConnected: false,
        error: error.message,
      };
    }
  } else {
    // Handle the case where Phantom is not installed
    console.log('Phantom wallet is not installed!');
    return {
      publicKey: null,
      isConnected: false,
      error: 'Phantom wallet is not installed!',
    };
  }
};

export const getProvider = () => {
  if ('phantom' in window) {
    const provider = window.phantom?.solana;

    if (provider?.isPhantom) {
      return provider;
    }
  }

  window.open('https://phantom.app/', '_blank');
};

export const connect = async () => {
  const provider = getProvider(); // see "Detecting the Provider"
  try {
    const resp = await provider.request({ method: "connect", onlyIfTrusted: true });
    console.log(resp.publicKey.toString());
    provider.on("connect", () => console.log("connected!"));
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo 
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
}

