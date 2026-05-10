import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import RiskDetail from "./pages/RiskDetail";

import ProtectedRoute from "./routes/ProtectedRoute";

import {
  AuthProvider,
} from "./context/AuthContext";

function App() {

  return (

    <AuthProvider>

      <BrowserRouter>

        <Routes>

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/risk/:id"
            element={
              <ProtectedRoute>
                <RiskDetail />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<Login />}
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;