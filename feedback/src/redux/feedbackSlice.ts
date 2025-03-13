import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the feedback type
interface Feedback {
    id: string;
    name: string;
    email: string;
    rating: number;
    comments: string;
    date: string;
}

// Define the state type
interface FeedbackState {
    feedbacks: Feedback[];
}

const initialState: FeedbackState = {
    feedbacks: [],
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {
        addFeedback: (state, action: PayloadAction<Feedback>) => {
            state.feedbacks.push(action.payload);
        },
    },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
