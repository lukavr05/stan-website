import { Typography, Box } from "@mui/material";


function Projects() {
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
          Projects
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingTop: 4,
            paddingBottom: 4
          }}
        >
          Throughout my career so far, I have worked across a diverse range of professional
environments. At Studio Lounge, I was responsible for overseeing the entire weekly livestream
process. This included liaising with senior faculty to secure facilities, recruiting and coordinating
crew members, managing technical equipment orders, and supervising the rigging of staging
and audio systems. I also directed the live broadcast itself, operating ATEM and OBS software,
and maintained communication with performers to ensure they were prepared and comfortable,
along with directing the camera operators and the audio engineer
        </Typography>

        <Box
          sx={{
            width: "100%",
            position: "flex",
            justifyContent: "center"
          }}
        >  
          <iframe width="560" height="315" src="https://www.youtube.com/embed/tOdQSxWDTDI?si=tFiIQdJNqghKtwrN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
          </iframe>
        </Box>
        
        <Typography variant="body1"
          sx={{
            paddingTop: 4,
            paddingBottom: 4
          }}
        >
        My role with True Feel required a focus on operational efficiency and stage management. I
  organised backstage areas, set up and patched equipment between sets, and collaborated
  closely with other crew members to deliver smooth transitions and uphold health and safety
  protocols, and keep the bands happy.
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingTop: 4,
            paddingBottom: 4
          }}
        >
        During the Isle of Wight Festival 2024, I worked as an acoustic performance stage sound
assistant and runner, where I was responsible for rigging monitors and microphones in
coordination with the camera teams. I mixed monitor and PA sound, relayed signals to the
outside broadcast unit for transmission checks, assisted with logistical tasks such as loading
vehicles, and supported on-site staff with a variety of operational needs.
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingTop: 4,
            paddingBottom: 4
          }}
        >
        I have also gained valuable broadcast experience as a sound shadow with Vivid Broadcast,
working on high-profile football coverage at QPR and Southampton. In this capacity, I rigged,
monitored, and de-rigged pitch microphones, assisted with FACS checking, and contributed to
maintaining broadcast continuity. With Tall Audio, I prepared and tested equipment, supported
RF camera operations, and assisted with corporate productions requiring precise audio
coordination.
        </Typography>

        <Typography variant="body1"
          sx={{
            paddingTop: 4,
            paddingBottom: 4
          }}
        >
        In addition to my production work, I held a customer-facing role with Lindon Lewis Marine,
where I developed skills in client service, stock management, and order processing. This
experience reinforced my ability to maintain high standards of organisation and professionalism
across any working environment.
        </Typography>
      </Box>  
    </>
  )
}

export default Projects
