type Props = {
  category: string;
  setCategory: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

export default function Filter({
  category,
  setCategory,
  sort,
  setSort,
}: Props) {
  return (
    <>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="low">Low → High</option>
        <option value="high">High → Low</option>
      </select>
    </>
  );
}