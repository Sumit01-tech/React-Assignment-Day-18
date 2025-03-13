import { Route, Routes, Link } from "react-router-dom";
import { ChakraProvider, Box, Flex, Button } from "@chakra-ui/react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ChakraProvider>
      <Box p={4}>
        <Flex justify="space-between" mb={4}>
          <Button as={Link} to="/" colorScheme="blue">
            Feedback Form
          </Button>
          <Button as={Link} to="/dashboard" colorScheme="green">
            Dashboard
          </Button>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Box>
    </ChakraProvider>
  );
};

export default App;
