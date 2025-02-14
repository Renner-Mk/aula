import { Button, Container, Grid2, TextField, Typography } from "@mui/material";
import { useAppDispatch } from "../../../store/hooks";
import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ILogin } from "../../../types";
import { loginRequest } from "../../../store/modules/user/userSlice";

export function Home() {
  const dispath = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data: ILogin = {
      email: formData.email,
      password: formData.password,
    };

    const user = await dispath(loginRequest(data)).unwrap();

    if (user) {
      navigate("/assessment");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <>
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
                value={formData.email}
                onChange={handleInputChange}
              />
            </Grid2>

            <Grid2 size={{ xs: 12, md: 12 }}>
              <TextField
                fullWidth
                name="password"
                variant="outlined"
                label="Senha"
                value={formData.password}
                onChange={handleInputChange}
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
