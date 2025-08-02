import { Box, Typography } from "@mui/material";

function Home() {
  return (
    <>
      <Box
        sx={{
          paddingTop: 8,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Typography variant="h1">
          Stanley Whiterod
        </Typography>

        <Typography variant="body1">
          This is some body text to show off the font that will be used for random text
        </Typography>
      </Box>
    </>
  )
}

export default Home
