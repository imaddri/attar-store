import ProductSearch from "./ProductSearch";
import AddProductButton from "./AddProductButton";

interface Props {
  categories: {
    id: string;
    name: string;
    slug: string;
  }[];
}

export default function ProductsToolbar({
  categories,
}: Props) {
  return (
    <div className="mb-8 flex items-center justify-between">

      <ProductSearch />

      <AddProductButton
        categories={categories}
      />

    </div>
  );
}