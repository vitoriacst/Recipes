interface CategoriesProps {
  categories: string;
}

export const CategoriesList = ({ categories }: CategoriesProps) => {
  return (
    <div
      className="font-semibold text-red-900 hover:text-gray-700 cursor-pointer"
      key={categories}
    >
      {categories}
    </div>
  );
};
