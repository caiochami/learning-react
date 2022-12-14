import { useLoaderData } from "react-router-dom";
import Avatar from "../../components/Avatar";
import DeleteContact from "../../components/Contacts/DeleteContact";
import EditContact from "../../components/Contacts/EditContact";
import Favorite from "../../components/Contacts/Favorite";
import { getContact } from "../../contacts";
import { getInitials } from "../../utils/helpers";

export async function contactLoader({ params }) {
  return getContact(params.contactId);
}

export default function Contact() {
  const contact = useLoaderData();

  const name =
    contact.first_name || contact.last_name
      ? `${contact.first_name} ${contact.last_name}`
      : "No Name";

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row relative gap-2 items-center">
        <Avatar>{getInitials(name)}</Avatar>
        <h1>
          <i>{name}</i>
          {contact.twitter && (
            <p>
              <a
                className="text-blue-500"
                target="_blank"
                href={`https://twitter.com/${contact.twitter}`}
              >
                {contact.twitter}
              </a>
            </p>
          )}
        </h1>
        <div className="absolute top-0 right-0">
          <Favorite favorite={contact.favorite} />
        </div>
      </div>

      {contact.notes && <p>{contact.notes}</p>}
      <div>
        <div className="flex flex-row items-center gap-2">
          <EditContact contact={contact} />

          <DeleteContact id={contact.id} />
        </div>
      </div>
    </div>
  );
}
