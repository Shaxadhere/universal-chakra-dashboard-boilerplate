import { useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react"

const ErrorPage = () => {
    const error = useRouteError();
    console.error("Unhandled Error Occurred! ", error);
    return (
        <Box id="error-page">
            <Heading>Oops!</Heading>
            <Text>Sorry, an unexpected error has occurred.</Text>
            <Text>{error.statusText || error.message}</Text>
        </Box>
    );
}

export default ErrorPage