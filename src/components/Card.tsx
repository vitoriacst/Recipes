interface CardProps {
  title: string;
  image: string;
}
export const Card = ({ title, image }: CardProps) => {
  return (
    <section className="flex items-start flex-col justify-start w-full">
      <h4 className="text-red-900 text-sm w-full">{title}</h4>
      <div className="flex items-start flex-col border-2 p-4 rounded-md border-red-900 w-[250px]">
        <img src={image} alt={title} className="w-full h-full" />
        <button className="bg-red-900 p-2 text-white rounded-md mt-2 w-[140px] transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
          Read about
        </button>
      </div>
    </section>
  );
};
