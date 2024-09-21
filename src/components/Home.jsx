import React, { useState, useEffect } from "react";

const Home = () => {
  const words = ["DRIVE INNOVATION", "SPARKING IDEAS", "IGNITE TECH"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0); // To loop through words
  const [charIndex, setCharIndex] = useState(0); // To manage typing/deleting characters
  const [typingSpeed, setTypingSpeed] = useState(100); // Speed of typing
  const [animationComplete, setAnimationComplete] = useState(false); // Stop after one full cycle

  useEffect(() => {
    if (animationComplete) return; // Stop the effect after one full animation cycle

    const handleTyping = () => {
      const currentWord = words[loopIndex];
      if (isDeleting) {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
        setTypingSpeed(100); // Speed while deleting
        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
          if (loopIndex + 1 === words.length) {
            setAnimationComplete(true); // Stop after the last word
          }
        }
      } else {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
        if (charIndex === currentWord.length) {
          setIsDeleting(true);
          setTypingSpeed(300); // Pause before deleting
        }
      }
    }; 

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, typingSpeed, loopIndex, words, animationComplete]);

  return (
    <div className="z-20 flex flex-col items-center justify-center gap-2 text-center mt-[30vw] md:mt-44">
      <h1 className="font-space-grotesk font-bold text-[4.5rem] sm:text-9xl tracking-[0.2rem] mb-6 bg-gradient-to-tr from-zinc-300 via-gray-400 to-slate-500 bg-clip-text text-transparent transition-all ease-out ">
      {animationComplete ? "INNOVAGE TECH" : <span>&nbsp;{text}&nbsp;</span>}
      </h1>

      <p className="sm:text-2xl text-base w-80% px-6 font-space-grotesk bg-gradient-to-tl from-zinc-300 via-gray-400 to-slate-500 bg-clip-text text-transparent">
       {animationComplete && "Fueling Tomorrow’s Innovators to Transform the World of Technology"}  
      </p>
    </div>
  );
};

export default Home;
