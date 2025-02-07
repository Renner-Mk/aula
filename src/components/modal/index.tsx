import { FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleModal } from "../../store/modules/modal/modalSlices";
import { addAssessment } from "../../store/modules/assessment/assessmentSlices";

export function ModalCreateAssessment() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((state) => state.modal);

  const [discipline, setDiscipline] = useState("");
  const [grade, setGrade] = useState("");

  function handleToggleModal() {
    dispatch(toggleModal());
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(
      addAssessment({
        id: uuidv4(),
        discipline,
        grade: parseFloat(grade),
        idStudent: "123",
      })
    );

    setDiscipline("");
    setGrade("");

    dispatch(toggleModal());
  }

  return (
    <Dialog open={isOpen} onClose={handleToggleModal}>
      <DialogTitle>Criar uma nova avaliação</DialogTitle>

      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            sx={{ mb: 2 }}
            fullWidth
            name="discipline"
            variant="outlined"
            label="Disciplina"
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
          />

          <TextField
            sx={{ mb: 2 }}
            fullWidth
            name="grade"
            variant="outlined"
            label="Nota"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleToggleModal}>Cancelar</Button>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
