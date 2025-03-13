import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box, Text, Divider } from "@chakra-ui/react";

const FeedbackList = () => {
    const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);

    return (
        <Box mt={5}>
            {feedbacks.map((feedback) => (
                <Box key={feedback.id} p={4} boxShadow="md" borderRadius="md">
                    <Text fontWeight="bold">{feedback.name} ({feedback.rating} ★)</Text>
                    <Text fontSize="sm" color="gray.500">{feedback.email}</Text>
                    <Text mt={2}>{feedback.comments}</Text>
                    <Divider mt={3} />
                </Box>
            ))}
        </Box>
    );
};

export default FeedbackList;
