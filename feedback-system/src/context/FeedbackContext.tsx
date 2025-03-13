import React, { createContext, useState, ReactNode } from "react";

// Define Type for Feedback
interface Feedback {
    name: string;
    email: string;
    rating: number | "";
    comments: string;
}

// Define Context Type
interface FeedbackContextType {
    feedback: Feedback;
    setFeedback: React.Dispatch<React.SetStateAction<Feedback>>;
}

// Create Context with Default Values
export const FeedbackContext = createContext<FeedbackContextType | undefined>(undefined);

export const FeedbackProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [feedback, setFeedback] = useState<Feedback>({
        name: "",
        email: "",
        rating: "",
        comments: "",
    });

    return (
        <FeedbackContext.Provider value={{ feedback, setFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};
