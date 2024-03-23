import { Tag, TagLabel } from "@chakra-ui/react";
import { UILoader } from "../UILoader/UILoader";

export const UILabel = ({
  label,
  color = "red",
  loading,
}: {
  label: string | undefined;
  color?: string;
  loading?: boolean;
}) => {
  return (
    <>
      {loading && <UILoader />}
      <Tag size="sm" colorScheme={color} borderRadius="full">
        <TagLabel>{label}</TagLabel>
      </Tag>
    </>
  );
};
