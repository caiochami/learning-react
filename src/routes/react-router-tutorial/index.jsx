import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CreateContact from "../../components/Contacts/CreateContact";
import SearchInput from "../../components/SearchInput";
import { getContacts } from "../../contacts";

export async function contactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Index() {
  const { contacts } = useLoaderData();

  let filteredContacts = contacts;

  const filter = (event) => {
    if (!event.target.value) return contacts;

    filteredContacts = contacts.filter(
      (contact) =>
        contact.first_name == event.target.value ||
        contact.last_name == event.target.value
    );
  };

  return (
    <div className="flex flex-col bg-gray-300 p-2 gap-2">
      <div className="flex flex-row border-b-2 gap-2 pb-2">
        <SearchInput onChange={filter} />
        <div>
          <CreateContact />
        </div>
      </div>
      {filteredContacts.length ? (
        <ul>
          {filteredContacts.map((contact) => (
            <li key={contact.id} className="hover:bg-gray-100 px-2 rounded-sm">
              <Link to={`/react-router-tutorial/contacts/${contact.id}`}>
                {contact.first_name || contact.last_name ? (
                  <>
                    {contact.first_name} {contact.last_name}
                  </>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite && <span>★</span>}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <span>No contacts</span>
      )}
    </div>
  );
}
