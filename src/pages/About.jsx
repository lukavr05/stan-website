import { Box, Typography, Link, Paper, Chip, Fade } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        paddingTop: 6,
        paddingBottom: 8,
        marginLeft: { xs: 2, sm: 4, md: 8, lg: 10 },
        marginRight: { xs: 2, sm: 4, md: 8, lg: 10 },
        maxWidth: '1200px',
        mx: 'auto'
      }}
    >
      {/* Header Section */}
      
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
      {/* Main Content */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        
        <Paper 
          elevation={2}
          sx={{ 
            p: 4, 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            background: 'rgba(83, 113, 111, 0.08)',
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: 'primary.main' 
            }}
          >
            Education & Background
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontSize: '1.1rem',
              color: 'text.secondary'
            }}
          >
            I am currently completing a degree in <strong>Live Production and Technical Arts</strong> at the 
            Academy of Contemporary Music, where I have combined rigorous academic study with extensive 
            practical experience in live events, broadcast, and studio production. My background also 
            includes studies in Business, Music Production, and 3D Design, providing a strong foundation 
            in both operational and creative disciplines.
          </Typography>
        </Paper>

        {/* Skills & Expertise */}
        <Paper 
          elevation={2}
          sx={{ 
            p: 4, 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 3, 
              color: 'primary.main' 
            }}
          >
            Skills & Expertise
          </Typography>
          
          <Box sx={{ mb: 3 }}>
            <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.1rem', mb: 2 }}>
              I specialise in audio, visual, and full-scale production management. My experience includes 
              rigging staging, patching and mixing live sound, configuring ATEM and OBS systems for 
              livestreaming, and coordinating technical teams to ensure events run efficiently.
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {[
              'Live Sound Mixing', 
              'ATEM Systems', 
              'OBS Studio', 
              'Production Management',
              'iWork', 
              'Google Workspace', 
              'Office 365',
              'Team Coordination'
            ].map((skill) => (
              <Chip 
                key={skill}
                label={skill} 
                variant="outlined"
                sx={{ 
                  borderColor: 'primary.main',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white'
                  }
                }}
              />
            ))}
          </Box>
        </Paper>

        {/* Testimonials */}
        <Paper 
          elevation={2}
          sx={{ 
            p: 4, 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider',
            bgcolor: 'grey.50'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: 'primary.main' 
            }}
          >
            Professional Recognition
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontSize: '1.1rem',
              fontStyle: 'italic'
            }}
          >
            Colleagues and supervisors have described my approach as reliable and proactive. 
            <strong> Paul Stadden</strong>, owner of Tall Audio observed, <em>BLANK</em>. <strong>Rory</strong>, 
            owner of Vivid Broadcast referred to me as <em>BLANK</em> while <strong>Matt Russell</strong>, 
            Live Production and Technical Arts lecturer at ACM described me simply as <em>BLANK</em>.
          </Typography>
        </Paper>

        <Box sx={{ textAlign: 'center', py: 3 }}>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontSize: '1.2rem',
              maxWidth: '800px',
              mx: 'auto',
              fontWeight: 500
            }}
          >
            At present, I am committed to remaining current with the latest production technologies and 
            workflows, with the aim of contributing to projects that demand precision, creativity, and a 
            consistent focus on delivering exceptional results.
          </Typography>
        </Box>

        {/* Career Highlights */}
        <Paper 
          elevation={2}
          sx={{ 
            p: 4, 
            borderRadius: 3,
            border: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 2, 
              color: 'primary.main' 
            }}
          >
            Career Highlights
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              lineHeight: 1.7,
              fontSize: '1.1rem'
            }}
          >
            Notable highlights in my career to date include directing the{' '}
            <Link 
              href="https://www.youtube.com/playlist?list=PLIwnNsTtZiwgz2rGloHmp_OBKKpjr7JVP" 
              variant="body1"
              sx={{ 
                fontWeight: 600,
                textDecoration: 'none',
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Studio Lounge Livestream Series
            </Link>
            , managing production for True Feel (an independent festival held in Guildford's Electric Theatre), 
            and serving as a sound assistant and runner for the Isle of Wight Festival 2024 broadcast. 
            Each of these roles has strengthened my ability to work under pressure, communicate effectively, 
            and maintain a high standard of professionalism.
          </Typography>
        </Paper>

      </Box>
    </Box>
  );
}

export default About;
