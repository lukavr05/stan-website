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
      hasVideo: true
    },
    {
      title: "True Feel Festival",
      role: "Production Manager",
      description: "My role with True Feel required a focus on operational efficiency and stage management. I organised backstage areas, set up and patched equipment between sets, and collaborated closely with other crew members to deliver smooth transitions and uphold health and safety protocols, and keep the bands happy."
    },
    {
      title: "Isle of Wight Festival 2024",
      role: "Sound Assistant & Runner",
      description: "During the Isle of Wight Festival 2024, I worked as an acoustic performance stage sound assistant and runner, where I was responsible for rigging monitors and microphones in coordination with the camera teams. I mixed monitor and PA sound, relayed signals to the outside broadcast unit for transmission checks, assisted with logistical tasks such as loading vehicles, and supported on-site staff with a variety of operational needs."
    },
    {
      title: "Broadcast Experience",
      role: "Sound Shadow & Technical Assistant",
      description: "I have also gained valuable broadcast experience as a sound shadow with Vivid Broadcast, working on high-profile football coverage at QPR and Southampton. In this capacity, I rigged, monitored, and de-rigged pitch microphones, assisted with FACS checking, and contributed to maintaining broadcast continuity. With Tall Audio, I prepared and tested equipment, supported RF camera operations, and assisted with corporate productions requiring precise audio coordination."
    },
    {
      title: "Client Service Experience",
      role: "Customer Relations",
      description: "In addition to my production work, I held a customer-facing role with Lindon Lewis Marine, where I developed skills in client service, stock management, and order processing. This experience reinforced my ability to maintain high standards of organisation and professionalism across any working environment."
    }
  ];

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
                  {index === 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 20,
                        right: 20,
                        fontSize: '28px',
                        opacity: 0.7,
                      }}
                    >
                    </Box>
                  )}
                  
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
                  <Typography variant="body1" sx={{ marginBottom: project.hasVideo ? 3 : 0 }}>
                    {project.description}
                  </Typography>

                  {/* Video for first project only */}
                  {project.hasVideo && (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        paddingTop: 2,
                      }}
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          borderRadius: '12px',
                          overflow: 'hidden',
                          boxShadow: '0 8px 32px rgba(83, 113, 111, 0.3)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.02)',
                            boxShadow: '0 12px 40px rgba(83, 113, 111, 0.4)',
                          }
                        }}
                      >
                        <iframe 
                          width="560" 
                          height="315" 
                          src="https://www.youtube.com/embed/tOdQSxWDTDI?si=tFiIQdJNqghKtwrN" 
                          title="YouTube video player" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerPolicy="strict-origin-when-cross-origin" 
                          allowFullScreen
                          style={{ borderRadius: '12px' }}
                        />
                      </Box>
                    </Box>
                  )}
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
