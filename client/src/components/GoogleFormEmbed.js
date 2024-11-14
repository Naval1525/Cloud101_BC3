import React from 'react';

function GoogleFormEmbed() {
  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        marginTop: '4rem',
        padding: '3rem',
      }}
    >
      <h2
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '2rem',
        }}
      >
        Reserve Your Spot
      </h2>

      {/* Google Form Embed */}
      <iframe
        src="https://forms.gle/sSPSMDz9otDMRkY87" // Replace with your actual Google Form URL
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Google Form"
        style={{
          borderRadius: '10px',
        }}
      >
        Loading…
      </iframe>
    </div>
  );
}

export default GoogleFormEmbed;
