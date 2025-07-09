'use client';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="part1">
        <h2>Mini Digital Media</h2>
        <div className="footer-social">
          {/* Replace with your actual icons */}
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Behance">BE</a>
          <a href="#" aria-label="LinkedIn">IN</a>
        </div>
        </div>
        <div className="part2">
          <h2>Quick Links</h2>
            <a className="ql" href="/services">Services</a>
            <a className="ql" href="/about">About Us</a>
            <a  className="wwd" href="/whatwedo">What We Do</a>
            <a className="ql" href="/contact">Contact</a>
            
        </div>
        <div className="part3">
          <div className="service"><h2>Services</h2></div>
          <div className="services">

            <a className="q2" href="/services">Mobile App Promotion</a>
            <a className="q2" href="/services">Lead Generation</a>
            <a className="q2" href="/services">Digital Marketing</a>
            <a className="q2" href="/services">Web Development</a>
            <a className="q2" href="/services">Video Production</a>
            <a className="q2" href="/services">Graphic Design</a>
            <a className="q2" href="/services">CPS</a>
            <a className="q2" href="/services">CPI</a>
            <a className="q2" href="/services">CPI</a>
            <a className="q2" href="/services">Search Monetization
</a>
            <a className="q2" href="/services">Advertisers</a>
            <a className="q2" href="/services">Publishers</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
