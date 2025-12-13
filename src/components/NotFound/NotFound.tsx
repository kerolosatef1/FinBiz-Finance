import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <section className="not-found-container">
            <div className="not-found-content">
                <h1 aria-hidden="true">404</h1>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for doesn’t exist.</p>
                <button
                    className="home-button"
                    onClick={() => navigate("/")}
                    type="button"
                >
                    Back to Home
                </button>
            </div>
        </section>
    );
}