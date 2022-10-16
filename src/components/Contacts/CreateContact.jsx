import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createContact } from "../../contacts";
import Button from "../Button";
import { faker } from "@faker-js/faker";

export async function action({ request }) {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  const contact = await createContact(data);

  console.log(data, contact);

  return redirect(`/react-router-tutorial/contacts/${contact.id}`);
}

export default function CreateContact() {
  let [isOpen, setIsOpen] = useState(false);

  const firstNameEl = useRef();

  const lastNameEl = useRef();

  const twitterEl = useRef();

  const notesEl = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const generateFakeData = () => {
    firstNameEl.current.defaultValue = faker.name.firstName();

    lastNameEl.current.defaultValue = faker.name.lastName();

    twitterEl.current.defaultValue = faker.name.firstName().toLowerCase();

    notesEl.current.value = faker.random.words(15);
  };

  return (
    <>
      <Button onClick={openModal}>New</Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create Contact
                  </Dialog.Title>

                  <Dialog.Description>
                    This will permanently deactivate your account
                  </Dialog.Description>

                  <Form method="post" action="/react-router-tutorial">
                    <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="first_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            ref={firstNameEl}
                            name="first_name"
                            id="first_name"
                            autoComplete="given-name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <label
                          htmlFor="last_name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last name
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            ref={lastNameEl}
                            name="last_name"
                            id="last_name"
                            autoComplete="last_name"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Twitter
                        </label>
                        <div className="mt-1">
                          <input
                            id="twitter"
                            name="twitter"
                            ref={twitterEl}
                            type="text"
                            autoComplete="twitter"
                            placeholder="@jack"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-6">
                        <label
                          htmlFor="notes"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Notes
                        </label>
                        <div className="mt-1">
                          <textarea
                            id="notes"
                            ref={notesEl}
                            name="notes"
                            rows={3}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            defaultValue={""}
                          />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Write a few sentences about yourself.
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-between gap-2">
                      <Button onClick={generateFakeData}>Generate</Button>
                      <div className="flex gap-2">
                        <Button onClick={closeModal} color="secondary">
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          color="success"
                          onClick={closeModal}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  </Form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
