import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Box } from "@chakra-ui/react";

// ✅ Import and register required Chart.js modules
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ChartComponent = () => {
    const feedbacks = useSelector((state: RootState) => state.feedback.feedbacks);

    const ratingsCount = [1, 2, 3, 4, 5].map(
        (r) => feedbacks.filter((f) => f.rating === r).length
    );

    const data = {
        labels: ["1★", "2★", "3★", "4★", "5★"],
        datasets: [{
            label: "Ratings",
            data: ratingsCount,
            backgroundColor: ["#ff4d4d", "#ffcc00", "#66ff66", "#3399ff", "#9933ff"],
            borderColor: "#000",
            borderWidth: 1,
        }],
    };

    // ✅ FIX: Explicitly cast legend position to avoid TypeScript error
    const options: ChartOptions<"bar"> = {
        responsive: true,
        plugins: {
            legend: { position: "top" as "top" },
            title: { display: true, text: "Feedback Ratings Distribution" },
        },
    };

    return (
        <Box w="400px">
            <Bar data={data} options={options} />
        </Box>
    );
};

export default ChartComponent;
