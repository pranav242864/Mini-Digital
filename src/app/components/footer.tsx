'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2>Mini Digital Media</h2>
        <ul className="footer-nav">
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <div className="footer-social">
          {/* Replace with your actual icons */}
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Behance">BE</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Mini Digital Media. All rights reserved.</p>
      </div>
    </footer>
  );
}
