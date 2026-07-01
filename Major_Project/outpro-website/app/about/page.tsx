export default function AboutPage() {
  return (
    <main className="about-box">
      
   
      <section className="story-box">
        <h1 className="story-title">Our Story</h1>
        <p className="story-desc">
          Outpro.India was founded to bridge the gap between complex technology and business growth. 
          We specialize in building sales-optimized digital identities for modern corporations.
        </p>
      </section>

    
      <section className="card-group">
        <div className="info-card">
          <h3 className="info-title">Our Mission</h3>
          <p className="info-desc">To deliver premium, high-performance web solutions that drive leads.</p>
        </div>
        
        <div className="info-card">
          <h3 className="info-title">Our Vision</h3>
          <p className="info-desc">To be the global leader in corporate digital presence platforms.</p>
        </div>
        
        <div className="info-card">
          <h3 className="info-title">Our Values</h3>
          <p className="info-desc">Integrity, Scalability, and Pixel-Perfect Implementation.</p>
        </div>
      </section>

   
      <section>
        <h2 className="text-3xl font-bold mb-10">Our Leadership</h2>
        <div className="team-group">
          
          <div className="profile-box">
            <div className="profile-img"></div>
            <div>
              <h4 className="profile-name">Satyaban Panigrahy</h4>
              <p className="profile-role">Project Director</p>
            </div>
          </div>

          <div className="profile-box">
            <div className="profile-img"></div>
            <div>
              <h4 className="profile-name">Team Member</h4>
              <p className="profile-role">Lead Developer</p>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}