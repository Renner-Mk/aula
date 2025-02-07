import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import ToggleThemeIcon from "@mui/icons-material/Brightness4";
import { useAppDispatch } from "../../store/hooks";
import { toggleTheme } from "../../store/modules/theme/themeSlice";

export function Header() {
  const dispath = useAppDispatch();

  const handleToggleTheme = () => {
    dispath(toggleTheme());
  };
  return (
    <AppBar sx={{ marginBottom: "1rem" }} position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          GrowAvalia
        </Typography>

        <IconButton color="inherit" onClick={handleToggleTheme}>
          <ToggleThemeIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
