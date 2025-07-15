import { Box, Typography } from "@mui/material";


function About() {
  return (
    <>
      <Box
        sx={{
          paddingTop: 8,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Typography variant="h2">
          About
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingTop: 4,
            paddingBottom: 4
          }}
        >
          I am currently completing a degree in Live Production and Technical Arts at the Academy
  of Contemporary Music, where I have combined rigorous academic study with extensive
  practical experience in live events, broadcast, and studio production. My background also
  includes studies in Business, Music Production, and 3D Design, providing a strong foundation in
  both operational and creative disciplines.
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingBottom: 4
          }}
        >
          I specialise in audio, visual, and full-scale production management. My experience includes
rigging staging, patching and mixing live sound, configuring ATEM and OBS systems for
livestreaming, and coordinating technical teams to ensure events run efficiently. I am proficient
with a wide range of software platforms, including iWork, Google Workspace, and Office 365,
and I am confident in my ability to adapt to any digital environment or equipment provided.
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingBottom: 4
          }}
        >
          Colleagues and supervisors have described my approach as reliable and proactive. Paul
Stadden, owner of Tall Audio observed, BLANK Rory, owner of Vivid Broadcast referred to me
as BLANK while Matt Russell, Live Production and Technical Arts lecturer at ACM described me
simply as BLANK
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingBottom: 4
          }}
        >
          At present, I am committed to remaining current with the latest production technologies and
workflows, with the aim of contributing to projects that demand precision, creativity, and a
consistent focus on delivering exceptional results.
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingBottom: 4
          }}
        >
          Notable highlights in my career to date include directing the Studio Lounge livestream series
(viewable on youtube here), managing production for True Feel, an independent festival held in
Guildford’s Electric Theatre, and serving as a sound assistant and runner for the Isle of Wight
Festival 2024 broadcast. Each of these roles has strengthened my ability to work under
pressure, communicate effectively, and maintain a high standard of professionalism.
        </Typography>
      </Box>
    </>
  )
}

export default About;
