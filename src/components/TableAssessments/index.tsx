import { Delete, Edit } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { useAppSelector } from "../../store/hooks";
import { ChangeEvent, MouseEvent } from "react";
import { useDispatch } from "react-redux";
import {
  changePage,
  changeRowsPerPage,
} from "../../store/modules/Pagination/paginationSlice";
import { deleteAssessmentsThunk } from "../../store/modules/assessment/assessmentSlices";

export function TableAssessments() {
  const dispatch = useDispatch();
  const assessments = useAppSelector((state) => state.assessment);
  const paginantion = useAppSelector((state) => state.pagination);

  const initialPositionPage =
    paginantion.rowsPerPage * (paginantion.currentPage - 1);

  const handleRowsChangePage = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeRowsPerPage(parseInt(e.target.value)));
  };

  const handleChangePage = (
    _: MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    dispatch(changePage(page + 1));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteAssessmentsThunk(id));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Disciplina</TableCell>
            <TableCell>Nota</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {assessments
            .slice(
              initialPositionPage,
              initialPositionPage + paginantion.rowsPerPage
            )
            .map((assessment) => (
              <TableRow key={assessment.id}>
                <TableCell>{assessment.id}</TableCell>
                <TableCell>{assessment.discipline}</TableCell>
                <TableCell>{assessment.grade}</TableCell>
                <TableCell>
                  <IconButton>
                    <Edit color="primary" />
                  </IconButton>

                  <IconButton
                    onClick={() => {
                      handleDelete(assessment.id);
                    }}
                  >
                    <Delete color="error" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>
              <TablePagination
                component="div"
                count={assessments.length}
                page={paginantion.currentPage - 1}
                rowsPerPage={paginantion.rowsPerPage}
                labelRowsPerPage="Avaliações por página"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from} - ${to} de ${count}`
                }
                rowsPerPageOptions={[2, 3, 5, 10]}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleRowsChangePage}
              />
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
