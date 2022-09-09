import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Web3 from "web3";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
import LandingPage from "../components/LandingPage";
import Footer from "../components/Footer";

function Home() {
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
        <title>Spark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <LandingPage Web3Handler={Web3Handler} account={account} />
      </div>
    </div>
  );
}

export default Home;

// Art board where users are given a specific prompt. winner of the week, voting DAO, etc
