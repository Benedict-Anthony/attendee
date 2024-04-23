import Navbar from "./components/Navbar";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Attendance from "./pages/Attendance";
import Container from "./components/Container";
import AppProvider from "./context/Context";
import AttendanceDetails from "./pages/AttendanceDetails";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <AppProvider>
          <Navbar />
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/login" element={<Login />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route
                path="/attendance/:title"
                element={<AttendanceDetails />}
              />
            </Routes>
          </Container>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
