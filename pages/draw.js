import Head from "next/head";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Web3 from "web3";
import DrawingBoard from "../components/DrawingBoard";
import Navbar from "../components/Navbar";

function draw() {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    if (typeof window.ethereum !== "undefined") {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      const accounts = await web3.eth.getAccounts();

      if (accounts.length > 0) {
        setAccount(accounts[0]);
      }

      const networkId = await web3.eth.net.getId();

      // Event listeners...
      window.ethereum.on("accountsChanged", function (accounts) {
        setAccount(accounts[0]);
      });

      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });
    }
  };

  // Enable metamask connection
  const Web3Handler = async () => {
    if (web3) {
      const notification = toast.loading("Connecting...");
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        toast.success("Connected!", {
          id: notification,
        });
      } catch (error) {
        console.log(error);
        toast.error("Error connecting! Please try again.", {
          id: notification,
        });
      }
    }
  };

  useEffect(() => {
    loadBlockchainData();
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
    }
  }, [account]);
  return (
    <div className="min-h-screen" data-theme="light">
      <Head>
        <title>doodl</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar Web3Handler={Web3Handler} account={account} />
        <DrawingBoard />
      </div>
    </div>
  );
}

export default draw;
