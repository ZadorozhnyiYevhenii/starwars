import { Tag, TagLabel } from "@chakra-ui/react";
import { UILoader } from "../UILoader/UILoader";

export const UILabel = ({
  label,
  color = "red",
  loading,
  size = 'sm'
}: {
  label: string | undefined;
  color?: string;
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl'
}) => {
  return (
    <>
      {loading && <UILoader />}
      <Tag size={size} colorScheme={color} borderRadius="full">
        <TagLabel>{label}</TagLabel>
      </Tag>
    </>
  );
};
