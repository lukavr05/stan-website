import { Typography, Box, Paper, Fade, Slide, Chip } from "@mui/material";
import { useEffect, useState, useRef } from "react";

function Projects() {
  const [visible, setVisible] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  useEffect(() => {
    setVisible(true);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects(prev => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleProjects]);

  const projects = [
    {
      title: "Studio Lounge Livestream Series",
      role: "Director & Technical Lead",
      description: "Throughout my career so far, I have worked across a diverse range of professional environments. At Studio Lounge, I was responsible for overseeing the entire weekly livestream process. This included liaising with senior faculty to secure facilities, recruiting and coordinating crew members, managing technical equipment orders, and supervising the rigging of staging and audio systems. I also directed the live broadcast itself, operating ATEM and OBS software, and maintained communication with performers to ensure they were prepared and comfortable, along with directing the camera operators and the audio engineer",
      hasVideo: true,
      images: [
        "/images/live-lounge-1.jpeg",
      ]
    },
    {
      title: "True Feel Festival",
      role: "Production Manager",
      description: "My role with True Feel required a focus on operational efficiency and stage management. I organised backstage areas, set up and patched equipment between sets, and collaborated closely with other crew members to deliver smooth transitions and uphold health and safety protocols, and keep the bands happy.",
      images: [
        "/images/Untitled.jpeg",
      ]
    },
    {
      title: "Isle of Wight Festival 2024",
      role: "Sound Assistant & Runner",
      description: "During the Isle of Wight Festival 2024, I worked as an acoustic performance stage sound assistant and runner, where I was responsible for rigging monitors and microphones in coordination with the camera teams. I mixed monitor and PA sound, relayed signals to the outside broadcast unit for transmission checks, assisted with logistical tasks such as loading vehicles, and supported on-site staff with a variety of operational needs.",
      images: [
        "/images/iow-festival-1.jpeg",
      ]
    },
    {
      title: "Broadcast Experience",
      role: "Sound Shadow & Technical Assistant",
      description: "I have also gained valuable broadcast experience as a sound shadow with Vivid Broadcast, working on football coverage at QPR’s and Southampton’s Stadiums and on Cage Warriors UFC. In this capacity, I rigged, monitored, and de-rigged pitch microphones, assisted with FACS checking, and contributed to maintaining broadcast continuity. With Tall Audio, I prepared and tested equipment, supported RF camera operations, and assisted with corporate productions requiring precise audio coordination.",
      images: [
        "images/cage-warriors.jpeg",
      ]
    },
    {
      title: "Education",
      role: "ACM",
      description: "During my studies at ACM, I got hands on experience running productions at a verity of sizes. The smaller Electrical Nights were challenging, running multi-cam recording and also mixing audio for the front of house and recording at the same time. Recording the Masterclasses of Guitarists Ariel Posen and Greg Kotch were more experience working with OBS and the NDI PTZ birddog cameras, and the larger scale productions in the 180 person capacity theatre would use up to six cameras at once. We had a verity of artists performing, some other studentsand some stars, such as Chase & Status’ drummer, Andy Gangadeen, and Muse’s bassist Chris Wolstenholme.",
      images: [
        "images/broadcast-exp-1.jpeg",
        "images/chris.jpeg"
      ]
    },
    {
      title: "Client Service Experience",
      role: "Customer Relations",
      description: "In addition to my production work, I held a customer-facing role with Lindon Lewis Marine, where I developed skills in client service, stock management, and order processing. This experience reinforced my ability to maintain high standards of organisation and professionalism across any working environment.",
      images: [
      ]
    }
  ];

  const renderMedia = (project, index) => {
    if (!project.images && !project.hasVideo) return null;

    return (
      <Box>
        {/* Video section (for Studio Lounge) */}
        {project.hasVideo && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              marginBottom: project.images ? 2 : 0,
            }}
          >
            <Box
              sx={{
                position: 'relative',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(83, 113, 111, 0.3)',
                transition: 'all 0.3s ease',
                width: '100%',
                aspectRatio: '16/9',
                '&:hover': {
                  transform: 'scale(1.02)',
                  boxShadow: '0 12px 40px rgba(83, 113, 111, 0.4)',
                },
                '& iframe': {
                  width: '100%',
                  height: '100%',
                  borderRadius: '12px'
                }
              }}
            >
              <iframe 
                src="https://www.youtube.com/embed/tOdQSxWDTDI?si=tFiIQdJNqghKtwrN" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
              />
            </Box>
          </Box>
        )}

        {/* Images section */}
        {project.images && project.images.length > 0 && (
          <Box>
            {project.images.length === 1 ? (
              // Single image layout
              <Box
                component="img"
                src={project.images[0]}
                alt={`${project.title} - Image`}
                sx={{
                  width: '100%',
                  maxHeight: '300px',
                  borderRadius: '12px',
                  boxShadow: '0 8px 32px rgba(83, 113, 111, 0.3)',
                  transition: 'all 0.3s ease',
                  objectFit: 'cover',
                  '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0 12px 40px rgba(83, 113, 111, 0.4)',
                  }
                }}
              />
            ) : (
              // Multiple images layout - stacked vertically in sidebar
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  width: '100%',
                }}
              >
                {project.images.map((image, imgIndex) => (
                  <Box
                    key={imgIndex}
                    component="img"
                    src={image}
                    alt={`${project.title} - Image ${imgIndex + 1}`}
                    sx={{
                      width: '100%',
                      height: '140px',
                      borderRadius: '8px',
                      boxShadow: '0 4px 16px rgba(83, 113, 111, 0.2)',
                      transition: 'all 0.3s ease',
                      objectFit: 'cover',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 8px 24px rgba(83, 113, 111, 0.3)',
                      }
                    }}
                  />
                ))}
              </Box>
            )}
          </Box>
        )}
      </Box>
    );
  };

  return (
    <>
      <Box
        sx={{
          paddingTop: 8,
          marginLeft: { xs: 2, md: 10 },
          marginRight: { xs: 2, md: 10 },
          position: 'relative',
        }}
      >

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
            Projects
          </Typography>
        </Fade>

        {projects.map((project, index) => {
          const isVisible = visibleProjects.includes(index);
          
          return (
            <div
              key={project.title}
              ref={(el) => projectRefs.current[index] = el}
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
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: { xs: 'column', md: 'row' },
                      gap: 3,
                      alignItems: 'flex-start'
                    }}
                  >
                    {/* Text Content */}
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          marginBottom: 1, 
                          color: '#233623',
                          fontWeight: 500 
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography 
                        variant="subtitle2" 
                        sx={{ 
                          marginBottom: 2, 
                          color: '#53716F',
                          fontStyle: 'italic',
                          opacity: 0.8
                        }}
                      >
                        {project.role}
                      </Typography>
                      <Typography variant="body1">
                        {project.description}
                      </Typography>
                    </Box>

                    {/* Media Content */}
                    {(project.images || project.hasVideo) && (
                      <Box 
                        sx={{ 
                          flex: { xs: 1, md: '0 0 40%' },
                          maxWidth: { xs: '100%', md: '40%' }
                        }}
                      >
                        {renderMedia(project, index)}
                      </Box>
                    )}
                  </Box>
                </Paper>
              </Slide>
            </div>
          );
        })}

      </Box>  
    </>
  )
}

export default Projects
