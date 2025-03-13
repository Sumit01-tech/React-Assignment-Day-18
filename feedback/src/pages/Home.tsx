import { Box } from "@chakra-ui/react";
import FeedbackForm from "../components/FeedbackForm";
import FeedbackList from "../components/FeedbackList";

const Home = () => (
    <Box p={5}>
        <FeedbackForm />
        <FeedbackList />
    </Box>
);

export default Home;
