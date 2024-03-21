import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { AlertStatus } from "./common";

export const UIAlertMessage = ({
  title,
  description,
  status
}: {
  title: string;
  description?: string;
  status: AlertStatus;
}) => {
  return (
    <Alert status={status}>
      <AlertIcon width={30} height={30} />
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  );
};
