import { Box, Typography, Link, Paper, Chip, Fade, Slide } from "@mui/material";
import { useEffect, useState, useRef } from "react";

function About() {
  const [visible, setVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    setVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleSections.includes(index)) {
              setVisibleSections(prev => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  const sections = [
    {
      title: "Education & Background",
      content: "I am currently completing a degree in Live Production and Technical Arts at the Academy of Contemporary Music, where I have combined rigorous academic study with extensive practical experience in live events, broadcast, and studio production. My background also includes studies in Business, Music Production, and 3D Design, providing a strong foundation in both operational and creative disciplines."
    },
    {
      title: "Skills & Expertise", 
      content: "I specialise in audio, visual, and full-scale production management. My experience includes rigging staging, patching and mixing live sound, configuring ATEM and OBS systems for livestreaming, and coordinating technical teams to ensure events run efficiently.",
      skills: [
        'Live Sound Mixing', 
        'ATEM Systems', 
        'OBS Studio', 
        'Production Management',
        'iWork', 
        'Google Workspace', 
        'Office 365',
        'Team Coordination'
      ]
    },
    {
      title: "Professional Recognition",
      content: "Colleagues and supervisors have described my approach as reliable and proactive. Paul Stadden, owner of Tall Audio observed, BLANK. Rory, owner of Vivid Broadcast referred to me as BLANK while Matt Russell, Live Production and Technical Arts lecturer at ACM described me simply as BLANK."
    },
    {
      title: "Career Highlights",
      content: "Notable highlights in my career to date include directing the Studio Lounge Livestream Series, managing production for True Feel (an independent festival held in Guildford's Electric Theatre), and serving as a sound assistant and runner for the Isle of Wight Festival 2024 broadcast. Each of these roles has strengthened my ability to work under pressure, communicate effectively, and maintain a high standard of professionalism.",
      hasLink: true
    }
  ];

  return (
    <Box
      sx={{
        paddingTop: 8,
        marginLeft: { xs: 2, md: 10 },
        marginRight: { xs: 2, md: 10 },
        position: 'relative',
      }}
    >
      {/* Header Section */}
      <Fade in={visible} timeout={800}>
        <Typography 
          variant="h2"
          sx={{
            position: 'relative',
            marginBottom: 3,
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -8,
              left: 0,
              width: '80px',
              height: '3px',
              background: 'linear-gradient(90deg, #53716F, #233623)',
              borderRadius: '2px',
            }
          }}
        >
          About
        </Typography>
      </Fade>

      {sections.map((section, index) => {
        const isVisible = visibleSections.includes(index);
        
        return (
          <div
            key={section.title}
            ref={(el) => sectionRefs.current[index] = el}
            style={{ marginBottom: '24px' }}
          >
            <Slide 
              direction={index % 2 === 0 ? "right" : "left"}
              in={isVisible}
              timeout={800}
            >
              <Paper
                elevation={0}
                sx={{
                  padding: 4,
                  backgroundColor: index % 2 === 0 
                    ? 'rgba(83, 113, 111, 0.08)' 
                    : 'rgba(238, 233, 213, 0.6)',
                  borderRadius: '12px',
                  borderLeft: `4px solid ${index % 2 === 0 ? '#53716F' : '#233623'}`,
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  '&:hover': {
                    transform: 'translateX(8px)',
                    backgroundColor: index % 2 === 0 
                      ? 'rgba(83, 113, 111, 0.12)' 
                      : 'rgba(238, 233, 213, 0.8)',
                    boxShadow: '0 4px 20px rgba(83, 113, 111, 0.15)',
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    marginBottom: 2, 
                    color: '#233623',
                    fontWeight: 500 
                  }}
                >
                  {section.title}
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{ 
                    lineHeight: 1.7,
                    fontSize: '1.1rem',
                    marginBottom: section.skills ? 3 : 0
                  }}
                >
                  {section.hasLink ? (
                    <>
                      Notable highlights in my career to date include directing the{' '}
                      <Link 
                        href="https://www.youtube.com/playlist?list=PLIwnNsTtZiwgz2rGloHmp_OBKKpjr7JVP" 
                        variant="body1"
                        sx={{ 
                          textDecoration: 'none',
                          color: '#53716F',
                          '&:hover': {
                            textDecoration: 'underline'
                          }
                        }}
                      >
                        Studio Lounge Livestream Series
                      </Link>
                      , managing production for{' '} 
                      <Link 
                        href="https://truefeellive.wordpress.com/events/" 
                        variant="body1"
                      >
                        True Feel 
                      </Link>

                      (an independent festival held in Guildford's Electric Theatre), 
                      and serving as a sound assistant and runner for the Isle of Wight Festival 2024 broadcast. 
                      Each of these roles has strengthened my ability to work under pressure, communicate effectively, 
                      and maintain a high standard of professionalism.
                    </>
                  ) : (
                    section.content
                  )}
                </Typography>

                {section.skills && (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {section.skills.map((skill) => (
                      <Chip 
                        key={skill}
                        label={skill} 
                        variant="outlined"
                        sx={{ 
                          borderColor: '#53716F',
                          color: '#53716F',
                          '&:hover': {
                            bgcolor: '#53716F',
                            color: 'white'
                          }
                        }}
                      />
                    ))}
                  </Box>
                )}
              </Paper>
            </Slide>
          </div>
        );
      })}

      <div
        ref={(el) => sectionRefs.current[4] = el}
        style={{ marginBottom: '24px' }}
      >
        <Fade in={visibleSections.includes(4)} timeout={1000}>
          <Box 
            sx={{ 
              textAlign: 'center', 
              py: 4,
              px: 3,
              backgroundColor: 'rgba(35, 54, 35, 0.05)',
              borderRadius: '12px',
              border: '2px dashed rgba(83, 113, 111, 0.3)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: 'rgba(35, 54, 35, 0.08)',
                borderColor: 'rgba(83, 113, 111, 0.5)',
              }
            }}
          >
            <Typography 
              variant="body1" 
              sx={{ 
                lineHeight: 1.7,
                fontSize: '1.2rem',
                maxWidth: '800px',
                mx: 'auto',
                fontWeight: 500,
                color: '#233623'
              }}
            >
              At present, I am committed to remaining current with the latest production technologies and 
              workflows, with the aim of contributing to projects that demand precision, creativity, and a 
              consistent focus on delivering exceptional results.
            </Typography>
          </Box>
        </Fade>
      </div>
    </Box>
  );
}

export default About;
