import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "react-fast-marquee";
import CountdownTimer from "./CountdownTimer";

function LandingPage({ Web3Handler, account }) {
  return (
    <div>
      <Navbar Web3Handler={Web3Handler} account={account} />
      <Marquee className="bg-black p-5" gradient={false} speed={130}>
        <div className="flex space-x-48 mx-10">
          <h4 className="text-white font-bold mr-4">Last Winner: {account}</h4>
          <h4 className="text-white font-bold">Previous winnings: 69 ETH</h4>
        </div>
      </Marquee>
      <div className="mt-12 flex flex-col items-center justify-center gap-4">
        <Hero Web3Handler={Web3Handler} account={account} />
        <CountdownTimer date={Date.now() + 5000} />
      </div>

      <div className="mt-2 px-10 py-7 flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-lg font-medium">Previous Winners</h3>
        <div className="flex gap-4">
          <a className="flex items-center justify-center">
            <img
              className="h-7 w-7"
              src="https://mintibbl.fun/img/opensea.png"
              alt="OpenSea"
            />
            <span className="text-blue-500 text-sm font-medium">OpenSea</span>
          </a>
          <a className="flex items-center justify-center">
            <img
              className="h-7 w-7"
              src="https://mintibbl.fun/img/mint.png"
              alt="OpenSea"
            />{" "}
            <span className="text-violet-500 text-sm font-medium">
              Gas-Free NFTs
            </span>
          </a>
        </div>
      </div>
      <Marquee className="rounded mb-24" gradient={false} speed={30}>
        <div className="border border-black card card-compact w-96 bg-base-100 shadow-xl mr-2">
          <figure>
            <img
              src="https://avatars.dicebear.com/api/male/nigger.svg"
              alt="Shoes"
              height={30}
              width={215}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">random prompt!</h2>
            <p>Artist: 0x7462108B1511E924501456Bc3ee8c466351819F8</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline rounded">
                view on opensea
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black card card-compact w-96 bg-base-100 shadow-xl mr-2">
          <figure>
            <img
              src="https://avatars.dicebear.com/api/male/nigge2r.svg"
              alt="Shoes"
              height={30}
              width={215}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">random prompt!</h2>
            <p>Artist: 0x7462108B1511E924501456Bc3ee8c466351819F8</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline rounded">
                view on opensea
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black card card-compact w-96 bg-base-100 shadow-xl mr-2">
          <figure>
            <img
              src="https://avatars.dicebear.com/api/male/nigg22er.svg"
              alt="Shoes"
              height={30}
              width={215}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">random prompt!!</h2>
            <p>Artist: 0x7462108B1511E924501456Bc3ee8c466351819F8</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline rounded">
                view on opensea
              </button>
            </div>
          </div>
        </div>
        <div className="border border-black card card-compact w-96 bg-base-100 shadow-xl mr-2">
          <figure>
            <img
              src="https://avatars.dicebear.com/api/male/nigg23123er.svg"
              alt="Shoes"
              height={30}
              width={215}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">random prompt!!</h2>
            <p>Artist: 0x7462108B1511E924501456Bc3ee8c466351819F8</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-outline rounded">
                view on opensea
              </button>
            </div>
          </div>
        </div>
      </Marquee>

      <div className="flex flex-col items-center justify-center font-medium gap-2 p-12  sticky ">
        <div className="flex gap-4">
          <a href="" target="_blank" className="opacity-75 hover:opacity-100">
            🐦 twitter
          </a>
          <a href="" target="_blank" className="opacity-75 hover:opacity-100">
            👾 discord
          </a>
        </div>
      </div>

      <footer className="bg-black footer items-center p-4 text-neutral-content">
        <div className="items-center grid-flow-col">
          🔐
          <p>built by Chris Abdo</p>
        </div>
        <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.twitter.com/chrisabdo_eth"
            className="hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/chrisabdo"
            className="hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/christopher-abdo/"
            className="hover:text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
