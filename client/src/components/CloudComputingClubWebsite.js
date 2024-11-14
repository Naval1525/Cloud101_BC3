import React, { useState } from 'react';
import { Cloud, Check, Star, Calendar, Clock, MapPin, ChevronRight, Users, Trophy, Gift, Coffee, Book } from 'lucide-react';
import Footer from './Footer';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import GoogleFormEmbed from './GoogleFormEmbed';

const CloudTechSession = () => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start loading state

        try {
          const response = await axios.post('/api/register', formData);

          if (response.status === 200) {
            setSubmitted(true); // Data successfully submitted
          } else {
            alert('Something went wrong. Please try again.');
          }
        } catch (error) {
          console.error('Error submitting form:', error);
          alert('An error occurred. Please try again.');
        } finally {
          setLoading(false); // End loading state
        }
      };


    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };


  return (
    <div style={{
      minHeight: '100vh',
      background: '#040617',
      color: '#fff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, rgba(4, 6, 23, 0.9), rgba(30, 60, 114, 0.9)), url("/api/placeholder/1920/1080")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'inline-flex',
            padding: '1rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            marginBottom: '0.3rem'
          }}>
            <Cloud size={48} style={{ color: '#60A5FA' }} />
          </div>

          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #60A5FA, #3B82F6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Cloud 101
          </h1>

          <p style={{
            fontSize: '1.5rem',
            color: '#94A3B8',
            marginBottom: '3rem',
            maxWidth: '800px',
            margin: '0 auto 3rem'
          }}>
            Organised by Bennett Cloud Computing Club (BC3)
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px'
            }}>
              <Calendar size={20} style={{ color: '#60A5FA' }} />
              <span>November 18th, 2024</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px'
            }}>
              <Clock size={20} style={{ color: '#60A5FA' }} />
              <span>5:30 PM - 7:00 PM</span>
            </div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px'
            }}>
              <MapPin size={20} style={{ color: '#60A5FA' }} />
              <span>002 A LH</span>
            </div>
          </div>
        </div>
      </div>
      {/* Registration Form */}
      {/* <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.05)',
        borderRadius: '20px',
        marginTop: '4rem',
        padding: '3rem'
      }}>
        {!submitted ? (
          <>
            <h2 style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>Reserve Your Spot</h2>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#94A3B8'
                }}>Full Name</label>
                <input
                  name='name'
                  onChange={handleChange}
                  value={formData.name}
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  color: '#94A3B8'
                }}>Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={formData.email}
                  style={{
                    width: '100%',
                    padding: '1rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '10px',
                    color: 'white',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  border: 'none',
                  borderRadius: '10px',
                  color: 'white',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                }}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Register Now'}
              </button>
            </form>
          </>
        ) : (
          <div style={{
            textAlign: 'center',
            padding: '2rem'
          }}>
            <div style={{
              width: '64px',
              height: '64px',
              background: 'rgba(59, 130, 246, 0.1)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.5rem'
            }}>
              <Check size={32} style={{ color: '#60A5FA' }} />
            </div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '1rem'
            }}>Registration Successful!</h3>
            <p style={{ color: '#94A3B8' }}>
              Check your email for confirmation and event details.
            </p>
          </div>
        )}
      </div> */}
      {/* <GoogleFormEmbed></GoogleFormEmbed> */}
      <RegistrationForm></RegistrationForm>


      {/* Features Grid */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 2rem'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          What You'll Experience
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {[
            {
              icon: <Users size={32} style={{ color: '#60A5FA' }} />,
              title: 'Expert-Led Sessions',
              description: 'Learn from your own leaders with hands on cloud experience'
            },
            {
              icon: <Trophy size={32} style={{ color: '#60A5FA' }} />,
              title: 'Interactive Quizes',
              description: 'Practice general cloud problems and win exciting prizes'
            },
            {
              icon: <Star size={32} style={{ color: '#60A5FA' }} />,
              title: 'Networking',
              description: 'Connect with fellow tech enthusiasts and experienced leaders'
            },
            {
                icon: <Book size={32} style={{ color: '#60A5FA' }} />,
                title: 'Secure your end-sems',
                description: 'Get the notes and videos lectures we used for your better grades.'
              }
          ].map((feature, index) => (
            <div key={index} style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '20px',
              padding: '2rem',
              transition: 'transform 0.3s',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <div style={{ marginBottom: '1rem' }}>{feature.icon}</div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem'
              }}>{feature.title}</h3>
              <p style={{ color: '#94A3B8' }}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Prizes Section */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 236, 0.1), rgba(37, 99, 235, 0.1))',
          borderRadius: '20px',
          padding: '3rem',
          marginBottom: '4rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '2rem'
          }}>Amazing Prizes</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: <Gift size={32} style={{ color: '#60A5FA' }} />,
                title: 'Linkdin Premium Subscriptions',
                value: 'To quiz winners'
              },
              {
                icon: <Trophy size={32} style={{ color: '#60A5FA' }} />,
                title: 'Exclusive Stickers',
                value: 'To the participants'
              },
            //   {
            //     icon: <Coffee size={32} style={{ color: '#60A5FA' }} />,
            //     title: 'Swag Pack',
            //     value: 'For All Attendees'
            //   }
            ].map((prize, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '2rem',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '15px'
              }}>
                <div style={{
                  marginBottom: '1rem',
                  display: 'flex',
                  justifyContent: 'center'
                }}>{prize.icon}</div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>{prize.title}</h3>
                <p style={{ color: '#60A5FA' }}>{prize.value}</p>
              </div>
            ))}
          </div>
        </div>



        {/* Timeline */}
        <div style={{
          maxWidth: '800px',
          margin: '4rem auto',
          padding: '2rem'
        }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '3rem'
          }}>Event Schedule</h2>

          {[
            { time: '5:30 PM', title: 'Welcome & Introduction', description: '' },
            { time: '6:00 PM', title: 'Quiz-1', description: '' },
            { time: '6:05 PM', title: 'Scope of Cloud Compuing', description: '' },
            { time: '6:30 PM', title: 'Quiz-2', description: '' },
            { time: '6:35 PM', title: 'End-Sem material', description: '' },
            { time: '6:45 PM', title: 'Q@A', description: '' },
            { time: '7:00 PM', title: 'End-of-Event', description: '' }
          ].map((item, index) => (
            <div key={index} style={{
              display: 'flex',
              gap: '2rem',
              marginBottom: '2rem',
              position: 'relative'
            }}>
                <div>
              <div style={{
                minWidth: '100px',
                color: '#60A5FA',
                fontWeight: 'bold'
              }}>{item.time}</div>
              <div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem'
                }}>{item.title}</h3>
                <p style={{ color: '#94A3B8' }}>{item.description}</p>
              </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      {/* <footer style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '2rem',
        textAlign: 'center',
        color: '#94A3B8'
      }}>
        <p>© 2024 Cloud Computing Club. All rights reserved.</p>
      </footer> */}
      <Footer></Footer>
    </div>
  );
};

export default CloudTechSession;