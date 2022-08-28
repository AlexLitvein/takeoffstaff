import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { IContact } from "api/fetchDataTypes";
import { red } from "@mui/material/colors";
import Delete from "@mui/icons-material/Delete";

interface IContactsCardProps {
  contact: IContact;
  onClick: (contact: IContact) => void;
  onDelete: (id: number) => void;
}

export const ContactCard = ({
  contact,
  onClick,
  onDelete,
}: IContactsCardProps) => {
  return (
    <Card
      sx={{ maxWidth: 345, cursor: "pointer" }}
      onClick={() => onClick(contact)}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>
            {contact.name[0].toUpperCase()}
          </Avatar>
        }
        action={
          <IconButton
            onClick={(e: React.SyntheticEvent) => {
              e.stopPropagation();
              onDelete(contact.id);
            }}
          >
            <Delete />
          </IconButton>
        }
        title={contact.name}
        subheader={contact.username}
      />
      <CardContent>
        <Typography variant="body2">{contact.email}</Typography>
      </CardContent>
    </Card>
  );
};
