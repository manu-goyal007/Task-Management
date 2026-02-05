import { useNavigate } from "react-router-dom";
// import "./ManuPage.css"; // optional if you want styles

function ManuPage() {
  const navigate = useNavigate(); // hook to redirect programmatically

  return (
    <div className="manu-page">
      <h1>Manu Goyal</h1>
      <p>
        Welcome! This is the description about Manu Goyal. You can navigate to
        other pages from below.
      </p>

      <div className="buttons">
        <button onClick={() => navigate("/")}>Go to Home</button>
        <button onClick={() => navigate("/dashboard")}>Go to Dashboard</button>
      </div>
    </div>
  );
}

export default ManuPage;
