import { Box, Typography, ImageList, ImageListItem, Fade, useMediaQuery, useTheme } from "@mui/material";
import { useState, useEffect } from "react";

function Home() {
  const [visible, setVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  useEffect(() => {
    setVisible(true);
  }, []);

  // Sample images - replace these paths with your actual images
  const galleryImages = [
    {
      img: '/images/live-lounge-1.jpeg',
      rows: 2,
    },
    {
      img: '/images/live-lounge-2.jpeg',
      rows: 1,
    },
    {
      img: '/images/gallery-1.jpeg',
      rows: 3,
    },
    {
      img: '/images/gallery-2.jpeg',
      rows: 1,
    },
    {
      img: '/images/iow-festival-1.jpeg',
      rows: 2,
    },
    {
      img: '/images/Untitled.jpeg',
      rows: 2,
    },
    {
      img: '/images/gallery-3.jpeg',
      rows: 2,
    },
    {
      img: '/images/broadcast-exp-1.jpeg',
      rows: 2,
    },
    {
      img: '/images/broadcast-exp-2.jpeg',
      rows: 2,
    },
  ];

  const getColumns = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4;
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
        {/* Header Section */}
        <Fade in={visible} timeout={800}>
          <Box sx={{ marginBottom: 6, textAlign: 'center' }}>
            <Typography 
              variant="h1"
              sx={{
              }}
            >
              Stanley Whiterod
            </Typography>

          </Box>
        </Fade>

        {/* Masonry Gallery */}
        <Fade in={visible} timeout={1200}>
          <Box sx={{ width: '100%', marginBottom: 4 }}>
            <ImageList 
              variant="masonry" 
              cols={getColumns()} 
              gap={16}
              sx={{
                // Override default margins
                margin: 0,
                // Custom scrollbar for overflow
                '&::-webkit-scrollbar': {
                  width: '8px',
                },
                '&::-webkit-scrollbar-track': {
                  background: 'rgba(238, 233, 213, 0.3)',
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb': {
                  background: 'rgba(83, 113, 111, 0.6)',
                  borderRadius: '4px',
                  '&:hover': {
                    background: 'rgba(83, 113, 111, 0.8)',
                  },
                },
              }}
            >
              {galleryImages.map((item, index) => (
                <ImageListItem 
                  key={index}
                  rows={item.rows || 1}
                  sx={{
                    borderRadius: '12px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    style={{
                      borderRadius: '12px',
                      transition: 'transform 0.3s ease',
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      boxShadow: '0 4px 20px rgba(83, 113, 111, 0.2)',
                    }}
                  />
                  
                  {/* Overlay with title */}
                  <Box
                    className="image-overlay"
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(transparent, rgba(35, 54, 35, 0.8))',
                      color: 'white',
                      padding: 2,
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      borderRadius: '0 0 12px 12px',
                    }}
                  >
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        fontWeight: 500,
                        fontSize: '0.9rem',
                        textShadow: '0 1px 3px rgba(0,0,0,0.5)',
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Fade>
      </Box>
    </>
  )
}

export default Home
