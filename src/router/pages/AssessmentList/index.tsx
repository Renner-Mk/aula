import { Box, Button, Container, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { toggleModal } from "../../../store/modules/modal/modalSlices";
import { ModalCreateAssessment } from "../../../components/modal";
import { listAssessment } from "../../../store/modules/assessment/assessmentSlices";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { TableAssessments } from "../../../components/TableAssessments";

export function AssessmentList() {
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user);
  const navegate = useNavigate();

  useEffect(() => {
    dispatch(listAssessment());
  }, [dispatch]);

  useEffect(() => {
    if (user === null) {
      alert("faça login para continuar");
      navegate("/");
    }
  }, [user, navegate]);

  if (!user) {
    return null;
  }

  function handleAddAssessment() {
    dispatch(toggleModal());
  }

  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Avaliações</Typography>

        <Button
          variant="contained"
          onClick={handleAddAssessment}
          sx={{ mb: 2 }}
        >
          Criar avaliação
        </Button>

        <TableAssessments />

        <ModalCreateAssessment />
      </Box>
    </Container>
  );
}
