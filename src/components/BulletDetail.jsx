import React from 'react';

function BulletDetail({ title, content, image, children }) {
  return (
    <div
      className="
        bg-gradient-noise
        min-h-screen
        w-full
        flex
        flex-col
        items-center
        px-6
        py-12
        box-border
        relative
        overflow-y-auto
      "
    >
      {/* Header */}
      <header
        className="w-full flicker min-h-[220px] mb-12 bg-circuit-glow bg-opacity-30 flex flex-col items-center justify-center text-center px-12 pt-0 pb-24 box-border flex-shrink-0"
        role="banner"
      >
        <img
          src="/a.jpg"
          alt="Inner City Tech official logo"
          className="mx-auto w-24 mb-4 rounded-full"
          loading="lazy"
          width={96}
          height={96}
        />
        <h1
          className="text-5xl font-sans tracking-[.25em] glow-pop font-bold text-green-400 glow-green drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
          tabIndex={-1}
        >
          Inner City Tech
        </h1>

        {/* LinkedIn link */}
        <a
          href="https://www.linkedin.com/in/inner-city-tech-615151361"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center space-x-2 text-green-400 hover:text-green-500 transition"
          aria-label="Visit LinkedIn profile of Inner City Tech founder"
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

        {/* Email link */}
        <a
          href="mailto:innercitycomponents@gmail.com"
          className="mt-2 text-green-400 hover:text-green-500 transition font-medium"
          aria-label="Send email to innercitycomponents@gmail.com"
        >
          innercitycomponents@gmail.com
        </a>
      </header>

      {/* Content */}
      <main
        className="max-w-2xl text-center box-border flex-shrink-0"
        role="main"
      >
        {/* Use h2 here since h1 is header */}
        <h2 className="text-4xl font-bold flicker text-green-400 mb-6">{title}</h2>

        {image && (
          <figure className="max-w-md mx-auto mb-8 box-border animate-zoomGlowFade">
            <img
              src={image}
              alt={`Visual representation of ${title}`}
              className="w-full rounded-lg shadow-lg block"
              loading="lazy"
              width={400}
              height={300}
            />
            <figcaption className="sr-only">{`Image illustrating ${title}`}</figcaption>
          </figure>
        )}

        <p className="text-lg text-pink-400 whitespace-pre-line">{content}</p>
      </main>

      {/* Optional Buttons or extra controls */}
      {children && <div className="mt-12 w-full flex justify-center">{children}</div>}
    </div>
  );
}

export default BulletDetail;
