import React, { useState } from "react";
import Button from "../../../components/Button";

const Subscribe = ({ form, updateForm, onSubscribe, isSubscribed }) => {
  return (
    <div className="w-full bg-cyan-200 rounded-md">
      <div className="flex flex-col gap-4 text-center p-4 font-mono w-2/3 mx-auto">
        <p className="text-3xl uppercase">Subscribe</p>
        <p>Sign up with email address to receive news and updates.</p>
        <div className="grid grid-cols-3 gap-2">
          <input
            type="text"
            placeholder="First Name"
            onChange={({ target }) => updateForm("first_name", target.value)}
            value={form.first_name}
            className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            value={form.last_name}
            onChange={({ target }) => updateForm("last_name", target.value)}
            placeholder="Last name"
            className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          <input
            type="text"
            value={form.email}
            onChange={({ target }) => updateForm("email", target.value)}
            placeholder="Email"
            className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <Button onClick={onSubscribe} color="warning">
            {isSubscribed ? "Subscribe" : "Unsubscribed"}
          </Button>
        </div>
      </div>
    </div>
  );
};
export default function index() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleFormUpdate = (key, value) => {
    const newForm = structuredClone(form);

    newForm[key] = value;

    setForm(newForm);
  };

  const handleSubmit = () => {
    const value = !isSubscribed;

    setIsSubscribed(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <Subscribe
        form={form}
        onSubscribe={handleSubmit}
        updateForm={handleFormUpdate}
        isSubscribed={isSubscribed}
      />

      <ul>
        <li>First Name: {form.first_name}</li>
        <li>Last Name: {form.last_name}</li>
        <li>Email: {form.email}</li>
        <li>{isSubscribed ? "Subscribed" : "Unsubscribed"}</li>
      </ul>
    </div>
  );
}
