import { TrashIcon } from "@heroicons/react/24/outline";
import { Form, redirect } from "react-router-dom";
import { deleteContact } from "../../contacts";
import Button from "../Button";

export async function action({ params }) {
  await deleteContact(params.contactId);

  return redirect("/react-router-tutorial");
}

export default function DeleteContact({ id }) {
  return (
    <Form
      method="post"
      action={`/react-router-tutorial/contacts/${id}/destroy`}
    >
      <Button color="danger" type="submit">
        <TrashIcon className="w-5 h-6" />
      </Button>
    </Form>
  );
}
