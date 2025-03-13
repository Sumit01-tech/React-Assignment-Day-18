import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFeedback } from "../redux/feedbackSlice";
import { v4 as uuidv4 } from "uuid";
import {
    Box,
    Input,
    Button,
    Textarea,
    FormControl,
    FormLabel,
    Select,
} from "@chakra-ui/react";

const FeedbackForm = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        rating: "",
        comments: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        dispatch(
            addFeedback({
                ...formData,
                id: uuidv4(),
                date: new Date().toISOString(),
                rating: Number(formData.rating),
            })
        );

        setFormData({ name: "", email: "", rating: "", comments: "" });
    };

    return (
        <Box p={5} boxShadow="lg" borderRadius="md">
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel>Name</FormLabel>
                    <Input name="name" value={formData.name} onChange={handleChange} required />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Rating</FormLabel>
                    <Select name="rating" value={formData.rating} onChange={handleChange} required>
                        <option value="">Select Rating</option>
                        <option value="1">1 - Poor</option>
                        <option value="2">2 - Fair</option>
                        <option value="3">3 - Good</option>
                        <option value="4">4 - Very Good</option>
                        <option value="5">5 - Excellent</option>
                    </Select>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Comments</FormLabel>
                    <Textarea name="comments" value={formData.comments} onChange={handleChange} required />
                </FormControl>

                <Button mt={4} colorScheme="blue" type="submit">Submit</Button>
            </form>
        </Box>
    );
};

export default FeedbackForm;
