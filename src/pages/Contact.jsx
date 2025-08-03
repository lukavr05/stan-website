import { 
  Box, 
  Typography, 
  Paper, 
  Link, 
  Fade, 
  Slide,
  Divider,
  useTheme
} from "@mui/material";
import { 
  Email as EmailIcon,
  Phone as PhoneIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon
} from "@mui/icons-material";
import { useState, useEffect, useRef } from "react";

function Contact() {
  const [visible, setVisible] = useState(false);
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);
  const theme = useTheme();

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
        threshold: 0.3,
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

  const contactMethods = [
    {
      icon: <EmailIcon />,
      title: "Email",
      value: "stanley@whiterod.co.uk",
      link: "mailto:stanley@whiterod.co.uk",
      description: ""
    },
    {
      icon: <PhoneIcon />,
      title: "Phone",
      value: "+44 7342 924404",
      link: "tel:+447342924404",
      description: ""
    },
    {
      icon: <LinkedInIcon />,
      title: "LinkedIn",
      value: "",
      link: "https://www.linkedin.com/in/stanley-whiterod-a17b70363/?trk=opento_sprofile_pfeditor",
      description: ""
    },
    {
      icon: <InstagramIcon />,
      title: "Instagram",
      value: "", // Replace with your actual Instagram handle
      link: "https://www.instagram.com/garlicbread1869", // Replace with your actual Instagram URL
      description: ""
    }
  ];

  return (
    <Box
      sx={{
        paddingTop: 8,
        marginLeft: { xs: 2, md: 10 },
        marginRight: { xs: 2, md: 10 },
        position: 'relative',
        minHeight: 'calc(100vh - 200px)',
      }}
    >
      {/* Header Section */}
      <Fade in={visible} timeout={800}>
        <Box sx={{ marginBottom: 6, textAlign: 'center' }}>
          <Typography 
            variant="h2"
            sx={{
              position: 'relative',
              marginBottom: 3,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -12,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '3px',
                background: 'linear-gradient(90deg, #53716F, #233623)',
                borderRadius: '2px',
              }
            }}
          >
            Get In Touch
          </Typography>
        </Box>
      </Fade>

      {/* Contact Methods */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
          gap: 4,
          marginBottom: 8,
        }}
      >
        {contactMethods.map((method, index) => {
          const isVisible = visibleSections.includes(index);
          
          return (
            <div
              key={method.title}
              ref={(el) => sectionRefs.current[index] = el}
            >
              <Slide 
                direction="up"
                in={isVisible}
                timeout={800 + (index * 200)}
              >
                <Paper
                  elevation={0}
                  sx={{
                    padding: 4,
                    textAlign: 'center',
                    backgroundColor: 'rgba(83, 113, 111, 0.05)',
                    borderRadius: '16px',
                    border: '2px solid transparent',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(83, 113, 111, 0.08)',
                      borderColor: 'rgba(83, 113, 111, 0.2)',
                      boxShadow: '0 12px 40px rgba(83, 113, 111, 0.15)',
                      '& .contact-icon': {
                        transform: 'scale(1.2)',
                      },
                    }
                  }}
                  component={Link}
                  href={method.link}
                  underline="none"
                  color="inherit"
                >
                  <Box>
                    <Box
                      className="contact-icon"
                      sx={{
                        fontSize: '3rem',
                        marginBottom: 2,
                        display: 'flex',
                        justifyContent: 'center',
                        transition: 'transform 0.3s ease',
                        color: '#53716F',
                        '& > svg': {
                          fontSize: '3rem',
                        }
                      }}
                    >
                      {method.icon}
                    </Box>
                    
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        marginBottom: 1,
                        color: '#233623',
                        fontWeight: 500,
                      }}
                    >
                      {method.title}
                    </Typography>
                    
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        marginBottom: 2,
                        color: '#53716F',
                        fontWeight: 400,
                        wordBreak: 'break-all',
                      }}
                    >
                      {method.value}
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: 'text.secondary',
                      fontSize: '0.95rem',
                      lineHeight: 1.5,
                      marginTop: 'auto',
                    }}
                  >
                    {method.description}
                  </Typography>
                </Paper>
              </Slide>
            </div>
          );
        })}
      </Box>

      <Divider 
        sx={{ 
          marginY: 6,
          background: 'linear-gradient(90deg, transparent, #53716F, transparent)',
          height: '2px',
          border: 'none',
        }} 
      />

    </Box>
  );
}

export default Contact;
