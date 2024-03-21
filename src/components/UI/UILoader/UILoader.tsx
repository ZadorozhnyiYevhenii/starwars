import { Spinner } from "@chakra-ui/react";

export const UILoader = ({
  width = 40,
  height = 40
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Spinner width={width} height={height} />
  );
};