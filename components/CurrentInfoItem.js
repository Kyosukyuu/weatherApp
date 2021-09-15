import { Flex, Icon, Text } from "@chakra-ui/react";

export default function CurrentInfoItem(props) {
  return (
    <Flex justifyContent="space-between" w="100%">
      <Flex>
        <Icon as={props.icon} fontSize={30} mr={1} />
        <Text fontSize="xl">{props.title}</Text>
      </Flex>

      <Text fontSize="xl">{props.text}</Text>
    </Flex>
  );
}
