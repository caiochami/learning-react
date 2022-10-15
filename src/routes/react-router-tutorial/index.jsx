import React, { useRef } from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import Button from "../../components/Button";
import CreateContact from "../../components/Contacts/CreateContact";
import DeleteContact from "../../components/Contacts/DeleteContact";
import SearchInput from "../../components/SearchInput";
import Row from "../../components/Table/Row";
import Table from "../../components/Table/Table";
import { getContacts } from "../../contacts";

export async function contactsLoader() {
  const contacts = await getContacts();
  return { contacts };
}

export default function Index() {
  const { contacts } = useLoaderData();

  const filter = () => null;

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center mb-4">
        <SearchInput onChange={filter} />
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <CreateContact />
        </div>
      </div>

      <Table columns={["Id", "Name", "Action"]} isEmpty={!contacts.length}>
        {contacts.map(({ id, first_name, last_name, favorite }) => (
          <tr key={id}>
            <Row>{id}</Row>
            <Row>
              {first_name || last_name ? (
                <>
                  {first_name} {last_name}
                </>
              ) : (
                <i>No Name</i>
              )}{" "}
              {favorite && <span>★</span>}
            </Row>
            <Row>
              <Button className="mr-2" color="success">
                <Link to={`/react-router-tutorial/contacts/${id}`}>Edit</Link>
              </Button>

              <DeleteContact id={id} />
            </Row>
          </tr>
        ))}
      </Table>
    </div>
  );
}
