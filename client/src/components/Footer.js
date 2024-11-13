import React from 'react';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)', padding: '2rem 0', textAlign: 'center' }}>
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.75rem',
          color: '#94a3b8',
          transition: 'color 0.3s',
          cursor: 'pointer',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = '#a8b8c5')}
        onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
      >
        <img
          src="https://pic.surf/nso"
          alt="Logo"
          style={{ height: '70px', width: '70px', objectFit: 'contain' }}
        />
        <span
          style={{
            fontSize: '0.875rem',
            fontWeight: '500',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            backgroundImage: 'linear-gradient(to right, #60a5fa, #22d3ee)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          powered by BC3
        </span>
      </div>
    </footer>
  );
};

export default Footer;
