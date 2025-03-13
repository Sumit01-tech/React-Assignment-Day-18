import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackForm: React.FC = () => {
    const context = useContext(FeedbackContext);
    const navigate = useNavigate();
    const [error, setError] = useState<string>("");

    if (!context) {
        return <p>Error: FeedbackContext is not available</p>;
    }

    const { feedback, setFeedback } = context;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!feedback.name || !feedback.email || !feedback.rating || !feedback.comments) {
            setError("All fields are required!");
            return;
        }

        setError("");
        navigate("/summary");
    };

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Feedback Form</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={feedback.name} onChange={handleChange} placeholder="Name" required />
                <input type="email" name="email" value={feedback.email} onChange={handleChange} placeholder="Email" required />
                <input type="number" name="rating" value={feedback.rating} onChange={handleChange} placeholder="Rating (1-5)" min="1" max="5" required />
                <textarea name="comments" value={feedback.comments} onChange={handleChange} placeholder="Feedback" required />
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
