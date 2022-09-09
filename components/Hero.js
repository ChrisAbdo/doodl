import React from "react";
import styles from "../styles/Hero.module.css";

function Hero({ Web3Handler, account }) {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mx-4">
      <div className="w-full lg:w-[400px]">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center bg-white border rounded-md border-black w-96 gap-8 p-8">
            <div className="flex flex-shrink-0 items-center justify-center overflow-hidden">
              <img
                src="https://img.freepik.com/premium-vector/beautiful-hand-drawn-fashion-pen-icon-hand-drawn-black-sketch-sign-symbol-doodle-isolated-white-background-flat-design-vector-illustration_379823-811.jpg?w=2000"
                style={{ height: "75px", width: "75px" }}
              />
            </div>

            {account ? (
              <input
                className="input rounded border-black border w-full focus:outline-none items-center justify-center text-center"
                type="text"
                disabled
                value={account.slice(0, 5) + "..." + account.slice(38, 42)}
              />
            ) : (
              <button
                className="btn btn-ghost w-full btn-outline rounded"
                onClick={Web3Handler}
              >
                Connect Wallet to play
              </button>
            )}

            {account ? (
              <div className="flex flex-col w-full">
                <button className={styles.playbutton}>Draw!</button>
                <button className={styles.roombutton}>Rank doodls</button>
              </div>
            ) : (
              <div className="hidden flex-col w-full">
                <button disabled className={styles.playbutton}>
                  Draw!
                </button>
                <button className={styles.roombutton}>Rank Others</button>
              </div>
            )}
            <div className="flex items-center justify-center opacity-50">
              <span className="text-xs mr-2">powered by</span>
              <img
                className="h-4 w-auto"
                src="https://mintibbl.fun/img/polygon.svg"
                alt="Polygon"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[700px]">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-black text-7xl font-bold leading-[1.2]">
            One <span className="text-[#11aa63]">prompt.</span> One{" "}
            <span className="text-[#c4b5fd]">day.</span> One{" "}
            <span className="text-[#d4af37]">winner.</span>
          </h1>
          <h2 className="text-black text-xl font-medium leading-[1.2]">
            Draw the prompt. Time is ticking. Vote for the winner.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
