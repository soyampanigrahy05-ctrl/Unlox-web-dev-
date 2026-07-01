export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION (PDF Requirement #1) */}
      <section className="section-box">
        <h1 className="main-title">Corporate Digital Presence Platform</h1>
        <p className="sub-desc">
          Establishing modern, high-performance, and scalable websites for Outpro.India 
          designed to clearly communicate services and business capabilities.
        </p>
        <button className="cta-button" style={{padding:'15px 40px', fontSize:'16px'}}>Explore Solutions</button>
      </section>

      {/* 2. CORE MODULES (PDF Requirement #3) */}
      <section className="modules-container">
        <div className="label-side">Core Modules</div>
        
        <div className="cards-stack">
          <div className="card-item">
            <div style={{fontSize:'30px', marginBottom:'15px'}}>🚀</div>
            <h3 style={{fontWeight:'800', marginBottom:'10px'}}>Performance</h3>
            <p style={{color:'#888', fontSize:'14px'}}>Websites optimized to load in under 2.5 seconds as per project metrics.</p>
          </div>

          <div className="card-item">
            <div style={{fontSize:'30px', marginBottom:'15px'}}>🎨</div>
            <h3 style={{fontWeight:'800', marginBottom:'10px'}}>Custom Design</h3>
            <p style={{color:'#888', fontSize:'14px'}}>Strict adherence to brand color palette and typography system.</p>
          </div>

          <div style={{opacity: 0.6}} className="card-item">
            <div style={{fontSize:'30px', marginBottom:'15px'}}>🏗️</div>
            <h3 style={{fontWeight:'800', marginBottom:'10px'}}>Scalability</h3>
            <p style={{color:'#888', fontSize:'14px'}}>Architecture designed to support future additions like Blogs and Career Pages.</p>
          </div>
        </div>
      </section>
    </main>
  );
}