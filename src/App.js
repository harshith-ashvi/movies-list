import { Button, Typography } from "@mui/material";
import React from "react";
import MoviesConatiner from "./components/MoviesContainer";


const style = {
  ml: (theme) => {
    return theme.spacing(22)
  },
  fontWeight: "bold"
}

const App = (props) => {
  const handleLogoClick = () => {
    window.location.reload()
  }

  return (
    <div>
      <Button sx={{ "&:hover": {bgcolor: "transparent"} }}>
        <Typography sx={style} variant="h2" gutterBottom color="primary" onClick={handleLogoClick}>My Movies List</Typography>
      </Button>
      <MoviesConatiner/>
    </div>
  );
}

export default App;
