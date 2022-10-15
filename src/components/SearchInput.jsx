export default function SearchInput({ onChange }) {
  return (
    <input
      type="text"
      name="search"
      id="search"
      placeholder="Search"
      aria-label="Search"
      onChange={onChange}
      className="p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
    />
  );
}
