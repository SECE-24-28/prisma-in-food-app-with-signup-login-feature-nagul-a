type Props = {
  search: string;
  setSearch: (value: string) => void;
};

export default function Search({
  search,
  setSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Search Food"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}