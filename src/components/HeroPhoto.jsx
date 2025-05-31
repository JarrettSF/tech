import React, { useEffect, useState } from 'react';

const images = ['/c.jpg', '/k.jpg', '/l.jpg', '/p.jpg', '/s.jpg', '/t.jpg', '/e.jpg']; //  images

function HeroPhoto() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // start fade out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true); // trigger fade in
      }, 500); // fade out duration before switching
    }, 6000); // full display duration
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto mt-6">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[index]}
          alt="Community Donation"
          className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
            fade ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </div>
  );
}

export default HeroPhoto;

