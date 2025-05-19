export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 px-4 border-t border-gray-700">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Inner City Tech. All rights reserved.</p>
        <nav className="flex gap-6 text-sm">
          <a href="#classes" className="hover:text-green-400 transition glow-green">Classes</a>
          <a href="#donate" className="hover:text-green-400 transition glow-green">Donate</a>
          <a href="#story" className="hover:text-green-400 transition glow-green">Our Story</a>
          <a href="mailto:contact@innercitytech.org" className="hover:text-green-400 transition glow-green">Email</a>
          <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition glow-green">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}

