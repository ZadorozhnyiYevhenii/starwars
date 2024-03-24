import { Heading } from "@chakra-ui/react";

export const UIHeading = ({
  children,
  type,
  size,
  classname
}: {
  children: React.ReactNode;
  type: "h1" | "h2" | "h3" | "h4";
  size: "xs" | "sm" | "md" | "lg";
  classname: string
}) => {
  return (
    <Heading as={type} size={size} className={classname}>
      {children}
    </Heading>
  );
};
