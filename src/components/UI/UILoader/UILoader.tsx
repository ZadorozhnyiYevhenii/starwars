import { Spinner } from "@chakra-ui/react";

export const UILoader = ({
  width = 35,
  height = 35
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Spinner width={width} height={height} />
  );
};