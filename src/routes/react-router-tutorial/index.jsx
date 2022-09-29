import React from "react";
import { useLoaderData } from "react-router-dom";
import Button from "../../components/Button";
import CreateContact from "../../components/Contacts/CreateContact";
import SearchInput from "../../components/SearchInput";

export default function Index() {
  const { contacts } = useLoaderData();

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col w-full sm:w-1/3 md:w-2/5 bg-gray-300 p-2 gap-2">
        <div className="flex flex-row border-b-2 gap-2 pb-2">
          <SearchInput />
          <div>
            <CreateContact />
          </div>
        </div>
        {contacts.length ? (
          <span>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link to={`contacts/${contact.id}`}>
                  {contact.first || contact.last ? (
                    <>
                      {contact.first} {contact.last}
                    </>
                  ) : (
                    <i>No Name</i>
                  )}{" "}
                  {contact.favorite && <span>★</span>}
                </Link>
              </li>
            ))}
          </span>
        ) : (
          <span>No contacts</span>
        )}
      </div>
      <div className="flex flex-col w-full sm:w-2/3 md:w-3/5">display</div>
    </div>
  );
}
