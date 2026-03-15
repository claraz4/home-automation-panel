import { Navigate } from "react-router-dom";
import { useAuth } from "../../auth/useAuth";
import { MdEnergySavingsLeaf } from "react-icons/md";
import "./login.css";

export default function Login() {
  const { state, signIn } = useAuth();
  const { isSignedIn, isLoading } = state;

  if (isLoading) return null;

  if (isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className="intro-container">
        <div className="icon-container">
          <MdEnergySavingsLeaf size={70} color="white" />
        </div>
        <div className="text-container">
          <h2 className="heading">Smart Home</h2>
          <p className="subtext">
            Power control that works even when electricity doesn't.
          </p>
        </div>
      </div>
      <button className="button-signin" onClick={signIn}>
        Sign In
      </button>
    </div>
  );
}
