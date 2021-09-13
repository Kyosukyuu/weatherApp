import Link from "next/link";
import { Link as StyledLink } from "@chakra-ui/react";

export default function ChakraLink(props) {
  const { children, key, href, nextLinkProps, ...styles } = props;

  return (
    <Link passHref href={href || "#"} key={key} {...nextLinkProps}>
      <StyledLink lineHeight="normal" {...styles}>
        {children}
      </StyledLink>
    </Link>
  );
}
