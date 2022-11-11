import React, { useEffect, useRef } from "react";
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom";
import Button from "../../components/Button";
import CreateContact from "../../components/Contacts/CreateContact";
import DeleteContact from "../../components/Contacts/DeleteContact";
import EditContact from "../../components/Contacts/EditContact";
import Layout from "../../components/Layouts/Layout";
import SearchInput from "../../components/SearchInput";
import Row from "../../components/Table/Row";
import Table from "../../components/Table/Table";
import { getContacts } from "../../contacts";

export async function contactsLoader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts };
}

export default function Index() {
  const { contacts, q } = useLoaderData();

  const navigation = useNavigation();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  return (
    <Layout title="React Router Tutorial">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center mb-4">
          <div>
            <div>
              <SearchInput defaultValue={q} />
            </div>
            {searching && <div>Searching...</div>}
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
            <CreateContact />
          </div>
        </div>

        <Table columns={["Id", "Name", "Action"]} isEmpty={!contacts.length}>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <Row>{contact.id}</Row>
              <Row>
                {contact.first_name || contact.last_name ? (
                  <>
                    {contact.first_name} {contact.last_name}
                  </>
                ) : (
                  <i>No Name</i>
                )}{" "}
                {contact.favorite && <span>★</span>}
              </Row>
              <Row>
                <EditContact contact={contact} />

                <DeleteContact id={contact.id} />
              </Row>
            </tr>
          ))}
        </Table>
      </div>
    </Layout>
  );
}
