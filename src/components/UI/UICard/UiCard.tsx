import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { UILoader } from "../UILoader/UILoader";

export const UICard = ({ card, loading }: { card: string | undefined, loading?: boolean }) => {
  return (
    <List>
      {loading && <UILoader />}
      <ListItem>
        <ListIcon as={StarIcon} color="blue" />
        {card}
      </ListItem>
    </List>
  );
};
