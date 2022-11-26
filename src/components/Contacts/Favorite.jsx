import React from "react";
import { useFetcher } from "react-router-dom";
import { updateContact } from "../../contacts";

export async function action({ request, params }) {
  const { favorite } = Object.fromEntries(await request.formData());

  return updateContact(params.contactId, {
    favorite: favorite === "true",
  });
}
export default function Favorite({ contact }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form
      method="post"
      action={`/react-router-tutorial/contacts/${contact.id}/favorite`}
    >
      <button
        name="favorite"
        value={contact.favorite ? "false" : "true"}
        aria-label={
          contact.favorite
            ? "Remove from favorites"
            : "contact.Add to favorites"
        }
      >
        {fetcher.state === "loading" ? "..." : contact.favorite ? "★" : "☆"}
      </button>
    </fetcher.Form>
  );
}
