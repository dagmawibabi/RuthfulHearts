import { useEffect, useState } from "react";

export default function OdometerTimer({ destination, duration }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const startingNumber = currentNumber;
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(duration / frameDuration);
    const increment = (destination - startingNumber) / totalFrames;
    let frame = 0;

    const timer = setInterval(() => {
      setCurrentNumber((prevNumber) => prevNumber + increment);

      frame++;
      if (frame === totalFrames) {
        clearInterval(timer);
        setCurrentNumber(destination);
      }
    }, frameDuration);

    return () => clearInterval(timer);
  }, [destination, duration]);

  const renderDigits = () => {
    const currentNumberStr = Math.round(currentNumber).toString();
    const destinationStr = destination.toString();
    const digits = [];

    for (let i = 0; i < destinationStr.length; i++) {
      const currentDigit = parseInt(currentNumberStr[i]);
      const destinationDigit = parseInt(destinationStr[i]);
      const isAnimating = currentDigit !== destinationDigit;

      digits.push(
        <span
          key={i}
          className={`inline-block w-6   overflow-hidden transition-transform duration-300 ${
            isAnimating ? "animate-slide-up" : ""
          }`}
        >
          {currentDigit}
        </span>
      );
    }

    return digits;
  };

  return <div className="overflow-hidden">{renderDigits()}</div>;
}
