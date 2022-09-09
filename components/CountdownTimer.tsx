import React from "react";
import Countdown from "react-countdown";

type Props = {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
};

function CountdownTimer() {
  const renderer = ({ hours, minutes, seconds, completed }: Props) => {
    if (completed) {
      return (
        <div className="stats border border-black shadow flex space-between">
          <div className="stat place-items-center">
            <div className="stat-title">{hours}</div>
            <div className="stat-value">hours</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">{minutes}</div>
            <div className="stat-value">minutes</div>
          </div>

          <div className="stat place-items-center">
            <div className="stat-title">{seconds}</div>
            <div className="stat-value">seconds</div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {/* <h3 className="flex items-center text-center justify-center text-xl mb-2 font-bold">
            Time remaining in this round:
          </h3>

          <div className="stats border border-black stats-vertical lg:stats-horizontal shadow">
            <div className="stat border-r border-black place-items-center">
              <div className="stat-value ">{hours}</div>
              <div className="stat-value">hours</div>
            </div>
            <div className="stat place-items-center">
              <div className="stat-value">{minutes}</div>
              <div className="stat-value">minutes</div>
            </div>
            <div className="stat  border-black place-items-center">
              <div className="stat-value">{seconds}</div>
              <div className="stat-value">seconds</div>
            </div>
          </div> */}
          <section className="bg-white mt-4">
            <div className="px-4 py-12 mx-auto max-w-screen-xl md:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                  Time remaining in this round:
                </h2>
              </div>

              <div className="mt-8 sm:mt-12">
                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div className="flex flex-col px-4 py-8 text-center border border-black rounded-lg">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Hours
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      {hours}
                    </dd>
                  </div>

                  <div className="flex flex-col px-4 py-8 text-center border border-black rounded-lg">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Minutes
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      {minutes}
                    </dd>
                  </div>

                  <div className="flex flex-col px-4 py-8 text-center border border-black rounded-lg">
                    <dt className="order-last text-lg font-medium text-gray-500">
                      Seconds
                    </dt>

                    <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                      {seconds}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>
        </div>
      );
    }
  };

  return (
    <div>
      <Countdown date={Date.now() + 10000000} renderer={renderer} />
    </div>
  );
}

export default CountdownTimer;
