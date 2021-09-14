import {
  Box,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { WeatherContext } from "../context/WeatherContext";
import { MdSearch } from "react-icons/md";

export default function LocationForm() {
  const { setLocation } = useContext(WeatherContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => setLocation(data.location);

  return (
    <Box as="form" color="white" onSubmit={handleSubmit(onSubmit)} pt={6}>
      <FormControl id="location">
        <FormLabel>City</FormLabel>
        <Flex>
          <Input type="text" {...register("location")} borderRightRadius="0" />
          <Button
            colorScheme="purple"
            type="submit"
            borderLeftRadius="0"
            rightIcon={<Icon as={MdSearch} fontSize={23} />}
          >
            Search
          </Button>
        </Flex>

        <FormHelperText>Enter a city name</FormHelperText>
      </FormControl>
    </Box>
  );
}
