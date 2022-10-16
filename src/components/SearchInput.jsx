import { Form, useSubmit } from "react-router-dom";

export default function SearchInput({ defaultValue }) {
  const submit = useSubmit();

  return (
    <Form id="search-form" role="search">
      <input
        type="search"
        name="q"
        id="q"
        placeholder="Search"
        aria-label="Search"
        defaultValue={defaultValue}
        onChange={(event) => {
          const isFirstSearch = q == null;

          submit(event.currentTarget.form, {
            replace: !isFirstSearch,
          });
        }}
        className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      />
    </Form>
  );
}
