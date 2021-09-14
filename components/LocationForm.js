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
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { WeatherContext } from "../context/WeatherContext";
import { MdSearch } from "react-icons/md";

export default function LocationForm() {
  const { setLocation, setUnitMode } = useContext(WeatherContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setLocation(data.location);
    setUnitMode(data.units);
  };

  return (
    <Box as="form" color="white" onSubmit={handleSubmit(onSubmit)} pt={6}>
      <FormControl id="location">
        <FormLabel>City</FormLabel>
        <Flex>
          <Input type="text" {...register("location")} borderRightRadius="0" />
          <RadioGroup
            defaultValue="imperial"
            name="units"
            border="1px solid"
            borderColor="gray.200"
            display="flex"
            alignItems="center"
          >
            <Stack spacing={4} direction="row" alignItems="center" px={4}>
              <FormLabel m={0}>Units</FormLabel>
              <Radio
                value="imperial"
                id="imperial"
                name="imperial"
                {...register("units", { required: true })}
              >
                Imperial
              </Radio>
              <Radio
                value="metric"
                id="metric"
                name="metric"
                {...register("units", { required: true })}
              >
                Metric
              </Radio>
            </Stack>
          </RadioGroup>
          <Button
            colorScheme="purple"
            type="submit"
            borderLeftRadius="0"
            rightIcon={<Icon as={MdSearch} fontSize={23} />}
            width="200px"
          >
            Search
          </Button>
        </Flex>

        <FormHelperText>Enter a city name</FormHelperText>
      </FormControl>
    </Box>
  );
}
