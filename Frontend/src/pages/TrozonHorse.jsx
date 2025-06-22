import { useEffect, useState } from "react";

function TrozonHorse() {
  const [isDevToolsOpen, setIsDevToolsOpen] = useState(false);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    // Detect developer tools
    const element = new Image();
    Object.defineProperty(element, 'id', {
      get: function () {
        setIsDevToolsOpen(true);
      }
    });
    console.log(element);

    // Timer countdown
    let interval;
    if (isDevToolsOpen) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    if (timer <= 0) {
      window.location.href = "https://www.google.com";
    }

    return () => clearInterval(interval);
  }, [isDevToolsOpen, timer]);

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-center">
      {!isDevToolsOpen && (
        <h1 className="text-white text-5xl font-bold">Welcome to the Safe Page</h1>
      )}

      {isDevToolsOpen && (
        <div className="p-8 bg-red-900 text-white rounded-lg shadow-lg">
          <h1 className="text-5xl font-extrabold mb-4">⚠️ WARNING ⚠️</h1>
          <p className="text-2xl mb-6">
            Developer Tools Detected! <br />
            Your device is at EXTREME RISK!
          </p>
          <p className="text-xl mb-4 animate-pulse">
            A Trojan horse will be installed in <span className="font-bold">{timer}</span> seconds!
          </p>
          <p className="text-lg text-yellow-400">
            To stop this, <span className="text-yellow-300 underline">redirect to safety</span> now!
          </p>
          <a
            href="https://www.google.com"
            className="mt-6 px-6 py-3 bg-yellow-500 text-black font-bold text-xl rounded-full hover:bg-yellow-700 transition duration-300"
          >
            Go to Fusiotech
          </a>
        </div>
      )}

      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black opacity-50 ${
          isDevToolsOpen ? "block" : "hidden"
        }`}
      ></div>
    </div>
  );
}

export default TrozonHorse;