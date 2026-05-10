import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import RiskDetail from "./pages/RiskDetail";

import RiskList from "./pages/RiskList";

import Analytics from "./pages/Analytics";

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
            path="/risks"
            element={
              <ProtectedRoute>
                <RiskList />
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
            path="/analytics"
            element={
              <ProtectedRoute>
                <Analytics />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={<Navigate to="/login" />}
          />

        </Routes>

      </BrowserRouter>

    </AuthProvider>
  );
}

export default App;