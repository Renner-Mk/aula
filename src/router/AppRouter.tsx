import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./pages/Home";
import { AssessmentList } from "./pages/AssessmentList";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assessment" element={<AssessmentList />} />
      </Routes>
    </BrowserRouter>
  );
}
