import { styled, useTheme } from "@mui/material/styles";

const Widget = styled("div")(({ theme }) => ({
    padding: 16,
    borderRadius: 16,
    width: 343,
    maxWidth: "100%",
    margin: "auto",
    position: "relative",
    zIndex: 1,
    backgroundColor:
      theme.palette.mode === "dark" ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.4)",
    backdropFilter: "blur(40px)"
  }));

  function Wid() {
    return (
      <Widget/>
    );
  }

  export default Wid;