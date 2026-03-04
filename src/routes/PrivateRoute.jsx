import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  // 🔄 Firebase auth এখনও check করছে
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  // ❌ User না থাকলে Login page এ পাঠাবে
  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location }}
        replace
      />
    );
  }

  // ✅ User থাকলে protected page দেখাবে
  return children;
}

export default PrivateRoute;