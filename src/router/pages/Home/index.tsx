import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { FormEvent } from "react";
import { login } from "../../../store/modules/user/userSlice";
import { useNavigate } from "react-router";
import { Header } from "../../../components/Header";

export function Home() {
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const response = {
      id: "1",
      name: "Patrick",
      token: "9a929533-abb7-4592-838e-849f10b68f59",
    };

    dispath(login(response));
    navigate("/assessment");
  };
  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Fazer Login
          </Typography>

          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                name="email"
                variant="outlined"
                label="E-mail"
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                name="password"
                variant="outlined"
                label="Senha"
              />
            </Grid2>

            <Grid2>
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Container>
    </>
  );
}
