import React, { useState, useRef, useEffect } from 'react';
import HeroPhoto from './components/HeroPhoto';
import CallToActionBullets from './components/CallToActionBullets';
import BulletDetail from './components/BulletDetail';

import Footer from './components/Footer';

function App() {
  const [showBullets, setShowBullets] = useState(false);
  const [slideRight, setSlideRight] = useState(false);
  const [currentBullet, setCurrentBullet] = useState(null);

  const bulletsRef = useRef(null);
  const rightPanelRef = useRef(null);

  const donationLinks = {
    1: 'https://forms.gle/qii5d4PqUfwakxNUA',
    2: 'https://forms.gle/MVHXtnGQTKjqKDcQ6',
    3: 'https://forms.gle/qii5d4PqUfwakxNUA',
  };

  const bulletContents = {
    1: {
      title: 'Turn Your Old Gear Into Someone’s First Break',
      content:
        'We refurbish donated tech and put it in the hands of low-income students, families, and future builders. Can’t be reused? We recycle it clean. Anything resold funds the mission — with 10% to Foster Care Youth charity and the rest reinvested into the program. Zero waste, all impact.',
      image: '/d.jpg',
      alt: 'Refurbished laptops ready for donation',
    },
    2: {
      title: '💡 Learn & Launch — Free Classes + Web Help',
      content:
        'We offer free classes in web design and CompTIA A+ to help you level up or launch a new career — no cost, just bring your curiosity. Need a website? We also provide free web design services for community orgs and small businesses.💸 Donations are welcome but never required. Impact first.',
      image: '/i.jpg',
      alt: 'Students learning web design and tech skills',
    },
    3: {
      title: 'Mission-Driven Hustle',
      content:
        'Life came at me fast; foster care, operating rooms, jail, chaos...  So what, right. Inner City Tech is how I look life in the eyes and ask for more speed please sir. It’s how I turn my skills and scars into support for others to rise. I am from Maryland. I have always had a curiosity about electronics, but life didn’t immediately make space for my dreams. I aged out of foster care, picked up a felony, and became a statistic - vagrant — but I kept learning. Eventually, I picked up a degree - cum laude, and Inner City Tech became a way.',
      image: '/o.jpg',
      alt: 'Founder of Inner City Tech sharing his story',
    },
  };

  const handleGetInvolvedClick = () => {
    setShowBullets(true);
    setTimeout(() => {
      bulletsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const handleArrowClick = (id) => {
    setCurrentBullet(id);
    setSlideRight(true);
  };

  const handleSlideBack = () => {
    setSlideRight(false);
    setCurrentBullet(null);
  };

  useEffect(() => {
    if (currentBullet && rightPanelRef.current) {
      rightPanelRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentBullet]);

  return (
    <main
      className="bg-gradient-noise text-white flex overflow-x-hidden h-screen"
      style={{
        width: '200vw',
        transform: slideRight ? 'translateX(-100vw)' : 'translateX(0)',
        transition: 'transform 0.7s ease-in-out',
      }}
      aria-label="Inner City Tech main content"
    >
      {/* Left Panel */}
      <section
        className="w-screen h-screen flex flex-col items-center overflow-y-auto px-12 py-8"
        style={{ minHeight: '100vh' }}
        aria-label="Main content and call to action"
      >
        <header
          className="w-full flicker min-h-[220px] bg-circuit-glow bg-opacity-30 flex flex-col items-center justify-center text-center px-12 pt-16 pb-20 flex-shrink-0"
          role="banner"
        >
          <img
            src="/a.jpg"
            alt="Inner City Tech Logo"
            className="mx-auto w-24 mb-4 rounded-full"
            loading="lazy"
            width={96}
            height={96}
          />
          <h1 className="text-5xl font-sans tracking-[.25em] glow-pop font-bold text-green-400 glow-green drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]">
            Inner City Tech
          </h1>

          <nav aria-label="Social and contact links" className="mt-4 flex flex-col items-center space-y-3">
            <a
              href="https://www.linkedin.com/in/inner-city-tech-615151361"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-green-400 hover:text-green-500 transition"
              aria-label="Visit Inner City Tech LinkedIn Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.792-1.75-1.767s.784-1.767 1.75-1.767 1.75.792 1.75 1.767-.784 1.767-1.75 1.767zm13.5 11.268h-3v-5.604c0-1.337-.026-3.059-1.865-3.059-1.868 0-2.154 1.459-2.154 2.964v5.699h-3v-10h2.881v1.367h.041c.401-.759 1.379-1.56 2.838-1.56 3.036 0 3.6 2 3.6 4.59v5.603z" />
              </svg>
              <span className="font-semibold text-lg">LinkedIn</span>
            </a>

            <a
              href="mailto:innercitycomponents@gmail.com"
              className="text-green-400 hover:text-green-500 transition font-medium"
              aria-label="Send email to Inner City Tech"
            >
              innercitycomponents@gmail.com
            </a>
          </nav>
        </header>

        {!showBullets && (
          <button
            onClick={handleGetInvolvedClick}
            className="mt-12 mx-auto block px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold shadow-md transition-all duration-300 w-fit animate-deepPulse hover:bg-cyan-600 hover:shadow-[0_0_20px_#0ff]"
            aria-label="Get involved with Inner City Tech"
          >
            Get Involved
          </button>
        )}

        <section
          className="flex flex-col items-center justify-center px-4 py-8 max-w-3xl w-full"
          aria-labelledby="empowerment-heading"
        >
          <h2
            id="empowerment-heading"
            className="text-3xl font-extrabold bg-gradient-to-r from-green-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg mb-6 text-center"
          >
            Empowering Communities Through Tech Donations
          </h2>
          <HeroPhoto />
        </section>

        {showBullets && (
          <section
            ref={bulletsRef}
            className="flex flex-col items-center justify-center px-4 py-12 w-full max-w-3xl"
            aria-label="Call to action bullets"
          >
            <CallToActionBullets onArrowClick={handleArrowClick} />
          </section>
        )}
      </section>

      {/* Right Panel */}
      <aside
        ref={rightPanelRef}
        className="w-screen h-screen flex flex-col items-center justify-start bg-gray-900 px-8 py-20 overflow-y-auto"
        style={{ minHeight: '100vh' }}
        aria-live="polite"
        aria-label="Detailed bullet content"
      >
        {currentBullet ? (
          <BulletDetail
            id={currentBullet}
            title={bulletContents[currentBullet].title}
            content={bulletContents[currentBullet].content}
            image={bulletContents[currentBullet].image}
            alt={bulletContents[currentBullet].alt}
          >
            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center w-full max-w-md">
              <button
                onClick={handleSlideBack}
                className="px-6 py-3 bg-transparent border border-cyan-600 text-cyan-300 rounded-full font-semibold hover:bg-cyan-700 hover:text-white transition"
                aria-label="Go back to main options"
              >
                ← Back
              </button>

              <a
                href={donationLinks[currentBullet]}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-green-500 rounded-full text-white glow-pop font-semibold hover:bg-green-600 transition text-center"
                aria-label={`Act now on: ${bulletContents[currentBullet].title}`}
              >
                Act Now
              </a>
            </div>
          </BulletDetail>
        ) : (
          <p className="text-center text-gray-400 max-w-md">
            Select an option from the left
          </p>
        )}
      </aside>
    </main>
  );
}

export default App;
