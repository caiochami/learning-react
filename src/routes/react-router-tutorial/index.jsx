import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Index() {
  const { contacts } = useLoaderData();

  console.log(contacts);
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex flex-col">
        <div className="px-4 py-2 border-b-2">search bar</div>
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
          <span>
            <i>No contacts</i>
          </span>
        )}
      </div>
    </div>
  );
}
