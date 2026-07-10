import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SortProducts from "./SortProducts";

interface Props {
  search: string;
  category: string;
  sort: string;
  setSearch: (v: string) => void;
  setCategory: (v: string) => void;
  setSort: (v: string) => void;
}

export default function ProductFilter({
  search,
  category,
  sort,
  setSearch,
  setCategory,
  setSort,
}: Props) {
  return (
    <div className="mb-12 grid gap-4 lg:grid-cols-3">
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <CategoryFilter
        value={category}
        onChange={setCategory}
      />

      <SortProducts
        value={sort}
        onChange={setSort}
      />
    </div>
  );
}