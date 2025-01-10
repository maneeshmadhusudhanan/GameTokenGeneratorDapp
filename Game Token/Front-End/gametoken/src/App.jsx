import React, { useState } from "react";
import { ethers } from "ethers";
import ABI from "./assets/MyToken.json";
import address from "./assets/deployed_addresses.json";
import "./App.css";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [userAddress, setUserAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const [mintAddress, setMintAddress] = useState("");
  const [mintAmount, setMintAmount] = useState("");

  const connectWallet = async (e) => {
    e.preventDefault();
    if (!window.ethereum) {
      alert("MetaMask is not installed!");
      return;
    }

    try {
      const tempProvider = new ethers.BrowserProvider(window.ethereum);
      await tempProvider.send("eth_requestAccounts", []);

      const tempSigner = await tempProvider.getSigner();
      const tempContract = new ethers.Contract(
        address["GameModule#MyToken"],
        ABI.abi,
        tempSigner
      );

      setProvider(tempProvider);
      setSigner(tempSigner);
      setContract(tempContract);

      const userAddress = await tempSigner.getAddress(); 
      setUserAddress(userAddress);

      const balance = await tempContract.balanceOf(userAddress);
      setBalance(ethers.formatUnits(balance, 2)); 
    } catch (err) {
      console.error("Failed to connect wallet:", err);
      alert("Failed to connect wallet");
    }
  };

  const mintTokens = async () => {
    if (!contract) {
      alert("Connect your wallet first!");
      return;
    }
    try {
      const tx = await contract.transfer(mintAddress, ethers.parseUnits(mintAmount, 2));
      await tx.wait();
      alert(`Minted ${mintAmount} tokens to ${mintAddress}`);
    } catch (err) {
      console.error("Failed to mint tokens:", err);
      alert("Failed to mint tokens");
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col">
    {/* Navbar */}
    <nav className="w-full bg-blue-600 py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-white tracking-wide animate-pulse">
          GameToken DApp
        </h1>
        <button
          onClick={connectWallet}
          className="px-4 py-2 bg-white text-blue-600 font-bold rounded shadow hover:bg-gray-100 transition-all duration-300 ease-in-out"
        >
          Connect Wallet
        </button>
      </div>
    </nav>

    {/* Main Content */}
    <div className="flex-grow container mx-auto px-4 flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-6 animate-fade-in-down">
        Welcome to GameToken DApp
      </h2>

      {userAddress && (
        <div className="mt-4 text-center space-y-2">
          <p className="text-xl font-semibold text-gray-700">
            Connected Wallet:
            <span className="text-blue-600 font-bold"> {userAddress}</span>
          </p>
          <p className="text-2xl font-extrabold text-green-700 animate-bounce">
            Token Balance: {balance} GT
          </p>
        </div>
      )}

      <div className="mt-8 w-full max-w-md space-y-4">
        <input
          type="text"
          placeholder="Recipient Address"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          value={mintAddress}
          onChange={(e) => setMintAddress(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          value={mintAmount}
          onChange={(e) => setMintAmount(e.target.value)}
        />
        <button
          onClick={mintTokens}
          className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded shadow hover:bg-green-700 transition-all duration-300 ease-in-out animate-hover"
        >
          Mint Tokens
        </button>
      </div>
    </div>

    {/* Footer */}
    <footer className="w-full bg-blue-600 py-4 mt-8">
      <p className="text-center text-white font-semibold">
        GameToken DApp ©maneesh_madhusudhanan 2025
      </p>
    </footer>
  </div>








  );
};

export default App;

{/* <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
<h1 className="text-3xl font-bold mb-4">GameToken DApp</h1>
<button
  onClick={connectWallet}
  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
>
  Connect Wallet
</button>

{userAddress && (
  <div className="mt-4">
    <p className="text-lg">Connected Wallet: {userAddress}</p>
    <p className="text-lg">Token Balance: {balance} GT</p>
  </div>
)}

<div className="mt-8 space-y-4">
  <input
    type="text"
    placeholder="Recipient Address"
    className="w-full px-4 py-2 border rounded"
    value={mintAddress}
    onChange={(e) => setMintAddress(e.target.value)}
  />
  <input
    type="number"
    placeholder="Amount"
    className="w-full px-4 py-2 border rounded"
    value={mintAmount}
    onChange={(e) => setMintAmount(e.target.value)}
  />
  <button
    onClick={mintTokens}
    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
  >
    Mint Tokens
  </button>
</div>
</div> */}