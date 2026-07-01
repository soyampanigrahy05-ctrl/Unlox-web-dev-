import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [statusMessage, setStatusMessage] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [submissions, setSubmissions] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatusMessage('Error sending message.');
      }
    } catch (error) {
      setStatusMessage('Server connection failed.');
    }
  };

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contacts');
      if (response.ok) {
        const data = await response.json();
        setSubmissions(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetchSubmissions();
    }
  }, [isAdmin]);

  return (
    <div className="app-container">
      <header className="navbar">
        <div className="nav-logo">Outpro<span className="dot-india">.India</span></div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <button className="admin-toggle-btn" onClick={() => setIsAdmin(!isAdmin)}>
            {isAdmin ? "View Site" : "Admin Panel"}
          </button>
        </nav>
      </header>

      {!isAdmin ? (
        <main>
          <section id="home" className="hero-section">
            <div className="hero-content">
              <h1 className="hero-title">Scale your business with custom corporate web solutions.</h1>
              <p className="hero-subtitle">A responsive corporate website for showcasing services.</p>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
          </section>

          <section id="about" className="about-section">
            <h1>About Us</h1>
            <h2>We create premium corporate websites.</h2>
            <p>Our mission is to help companies build strong online presence with modern technology.</p>
          </section>

          <section id="services" className="services-section">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="card"><h1>Web Design</h1>
              <p style={{color:'lighskytblue'}}>E-commerce website with analytics dashboard.</p>
            </div>
              <div className="card"><h1>Development</h1>
              <p style={{color:'lighskytblue'}}>Developing a scalable, premium digital foundation for your enterprise</p></div>
              <div className="card"><h1>Corporate Website</h1>
              <p style={{color:'lighskytblue'}}>Responsive company portfolio website.</p></div>
              <div className="card"><h1>Business Dashboard</h1>
              <p style={{color:'lighskytblue'}}>Professional admin analytics system.</p>
              </div>
            </div>
          </section>
            <p style={{fontSize:'4rem',color:'lighskytblue'}}>contact</p>
          <section id="contact" className="contact-section">
            <h2>Let's Build Together</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleInputChange} required></textarea>
              <button type="submit" className="btn-submit">Send Message</button>
            </form>
            {statusMessage && <p className="status">{statusMessage}</p>}
          </section>
        </main>
      ) : (
        <main className="admin-container">
          <h2>Admin Dashboard</h2>
          <div className="submissions-list">
            {submissions.length === 0 ? <p>No messages yet.</p> : submissions.map((item, index) => (
              <div key={index} className="submission-card">
                <p><strong>Name:</strong> {item.name}</p>
                <p><strong>Email:</strong> {item.email}</p>
                <p><strong>Message:</strong> {item.message}</p>
              </div>
            ))}
          </div>
        </main>
      )}
    </div>
  );
}

export default App;