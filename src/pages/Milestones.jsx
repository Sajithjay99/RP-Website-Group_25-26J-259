import React, { useState } from 'react';

function Milestones() {
  const [activeItem, setActiveItem] = useState(null);

  const milestones = [
    {
      date: "June - July 2025",
      title: "Topic Assessment Form (TAF)",
      desc: "Initial submission to finalize the research topic and scope.",
      marks: 0,
    },
    {
      date: "July 2025",
      title: "Project Charter",
      desc: "Formal document outlining project objectives and stakeholders.",
      marks: 0,
    },
    {
      date: "September 2025",
      title: "Proposal Presentation",
      desc: "Defending the research proposal to a panel of experts.",
      marks: 12,
    },
    {
      date: "December 2025",
      title: "Progress Presentation - I",
      desc: "Evaluation of the first 50% of project completion and methodology.",
      marks: 15,
    },
    {
      date: "March 2026",
      title: "Research Paper",
      desc: "Academic documentation of research contributions and findings.",
      marks: 10,
    },
    {
      date: "March 2026",
      title: "Progress Presentation - II",
      desc: "Demonstration of 90% completion including system implementation.",
      marks: 18,
    },
    {
      date: "April 2026",
      title: "Final Reports",
      desc: "Comprehensive documentation of the full research project.",
      marks: 19,
    },
    {
      date: "May 2026",
      title: "Final Presentation & VIVA",
      desc: "Final defense and oral examination of the entire project.",
      marks: 20,
    },
    {
      date: "June 2026",
      title: "Project Website",
      desc: "The public-facing research website showcasing all project assets.",
      marks: 2,
    },
    {
      date: "June 2026",
      title: "Research Logbook",
      desc: "Maintained record of daily research activities and project milestones.",
      marks: 2,
    },
  ];

  return (
    <section className="page-section" style={{ padding: '70px 0' }}>
      <div className="container">
        <p style={{ 
          color: 'var(--color-primary-green)', 
          fontWeight: '600', 
          fontSize: '0.9rem', 
          textTransform: 'uppercase', 
          letterSpacing: '1.5px',
          marginBottom: '8px'
        }}>
          Project Milestones
        </p>

        <h1 style={{ marginBottom: '60px', fontSize: '2.5rem' }}>
          Timeline in Brief
        </h1>

        <div style={{ position: 'relative' }}>
          
          {/* Center Line */}
          <div style={{ 
            position: 'absolute', 
            left: '50%', 
            top: '0', 
            height: '100%', 
            width: '2px', 
            background: 'var(--color-border-light)', 
            transform: 'translateX(-50%)' 
          }}></div>

          {milestones.map((item, index) => {
            const isEven = index % 2 === 0;
            const isActive = activeItem === index;

            return (
              <div 
                key={index} 
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                style={{ 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  marginBottom: '70px', 
                  position: 'relative',
                  width: '100%',
                  cursor: 'pointer'
                }}
              >
                
                {/* Content Side */}
                <div style={{ 
                  width: '45%', 
                  textAlign: isEven ? 'right' : 'left',
                  order: isEven ? 1 : 3,
                  padding: isEven ? '0 35px 0 0' : '0 0 0 35px',
                  transition: 'all 0.3s ease',
                  opacity: activeItem !== null && !isActive ? 0.6 : 1
                }}>
                  
                  <span style={{ 
                    background: isActive ? 'var(--color-primary-green)' : 'var(--color-sidebar-bg)', 
                    color: 'white', 
                    fontSize: '0.8rem', 
                    padding: '4px 12px', 
                    borderRadius: '20px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}>
                    {item.date}
                  </span>
                  
                  <h3 style={{ 
                    marginTop: '12px', 
                    fontSize: '1.4rem',
                    color: isActive ? 'var(--color-primary-green)' : 'var(--color-text-primary)'
                  }}>
                    {item.title}
                  </h3>
                  
                  <p style={{ 
                    color: 'var(--color-text-secondary)', 
                    fontSize: '0.95rem', 
                    marginTop: '8px',
                    lineHeight: '1.5'
                  }}>
                    {item.desc}
                  </p>
                  
                  <div style={{ marginTop: '18px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>
                      Weightage: {item.marks}%
                    </span>

                    <div style={{ 
                      width: '100%', 
                      background: 'var(--color-border-light)', 
                      height: '7px', 
                      borderRadius: '10px',
                      marginTop: '6px',
                      overflow: 'hidden'
                    }}>
                      <div style={{ 
                        width: isActive ? `${item.marks * 4}%` : '10%', 
                        background: 'var(--color-primary-green)', 
                        height: '100%', 
                        transition: 'width 0.7s ease-in-out',
                        marginLeft: isEven ? 'auto' : '0'
                      }}></div>
                    </div>
                  </div>

                </div>

                {/* Center Dot */}
                <div style={{ 
                  width: '10%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  order: 2,
                  zIndex: 2 
                }}>
                  <div style={{ 
                    width: '16px', 
                    height: '16px', 
                    background: isActive ? 'var(--color-primary-green)' : 'var(--color-bg-primary)', 
                    border: `2px solid var(--color-primary-green)`, 
                    transform: isActive ? 'rotate(225deg) scale(1.2)' : 'rotate(45deg)',
                    transition: 'all 0.4s ease'
                  }}></div>
                </div>

                <div style={{ width: '45%', order: isEven ? 3 : 1 }}></div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Milestones;