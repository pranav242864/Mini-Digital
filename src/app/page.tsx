import './globals.css';

export default function Home() {
  return (
    <section className="steps">
      <h2 className="section-title">Our Services</h2>
      <div className="cards-grid">
        <div className="card fade-left visible">
          <img src="/asset/Screenshot 2025-06-12 172156.png" alt="App Promotion" />
          <div className="card-content">
            <h3>App Promotion</h3>
            <p>We specialize in accelerating your app’s visibility across premium devices through strategic placements and OEM-level partnerships.</p>
          </div>
        </div>
        <div className="card fade-right visible">
          <img src="/asset/Screenshot 2025-06-12 172206.png" alt="Graphic Design" />
          <div className="card-content">
            <h3>Graphic Design</h3>
            <p>Our design team crafts stunning visuals that speak your brand language — from social creatives to identity design.</p>
          </div>
        </div>
        <div className="card fade-up visible">
          <img src="/asset/Screenshot 2025-06-12 172214.png" alt="Video Production" />
          <div className="card-content">
            <h3>Video Production</h3>
            <p>We turn your ideas into cinematic stories — engaging, impactful videos that elevate your marketing campaigns.</p>
          </div>
        </div>
        <div className="card fade-left visible">
          <img src="/asset/Screenshot 2025-06-12 172221.png" alt="Lead Generation" />
          <div className="card-content">
            <h3>Lead Generation</h3>
            <p>Reach real users, not just numbers. Our data-driven lead generation strategies bring high-intent customers to your doorstep.</p>
          </div>
        </div>
        <div className="card fade-right visible">
          <img src="/asset/Screenshot 2025-06-12 172230.png" alt="Digital Marketing" />
          <div className="card-content">
            <h3>Digital Marketing</h3>
            <p>We deliver full-funnel marketing strategies that combine reach, performance, and ROI — from clicks to conversions.</p>
          </div>
        </div>
        <div className="card fade-up visible">
          <img src="/asset/Screenshot 2025-06-12 172238.png" alt="UX/UI Design" />
          <div className="card-content">
            <h3>UX/UI Design</h3>
            <p>Intuitive, beautiful, and purposeful — we design interfaces that your users will love to use, again and again.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
