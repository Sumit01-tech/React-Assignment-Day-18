import React, { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

const FeedbackSummary: React.FC = () => {
    const context = useContext(FeedbackContext);

    if (!context) {
        return <p>Error: FeedbackContext is not available</p>;
    }

    const { feedback } = context;

    return (
        <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
            <h2>Feedback Summary</h2>
            <p><strong>Name:</strong> {feedback.name}</p>
            <p><strong>Email:</strong> {feedback.email}</p>
            <p><strong>Rating:</strong> {feedback.rating}</p>
            <p><strong>Comments:</strong> {feedback.comments}</p>
        </div>
    );
};

export default FeedbackSummary;
