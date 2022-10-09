import { Form, useLoaderData } from "react-router-dom";
import Avatar from "../../components/Avatar";
import EditContact from "../../components/Contacts/EditContact";
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
          <Favorite contact={contact} />
        </div>
      </div>

      {contact.notes && <p>{contact.notes}</p>}
      <div>
        <div className="flex flex-row items-center">
          <EditContact contact={contact} />
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (!confirm("Please confirm you want to delete this record.")) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
    </div>
  );
}

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}
