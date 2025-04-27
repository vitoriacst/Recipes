import { BookHeart, SquareUser } from 'lucide-react';

interface HeaderProps {
  isLoginPage: boolean;
}

export const Header = ({ isLoginPage }: HeaderProps) => {
  return (
    <header className="p-4 bg-red-900 text-white flex items-center md:justify-between justify-around">
      <h1 className="text-2xl">Saborize</h1>
      {!isLoginPage && (
        <div className="flex gap-2">
          <button className=" transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
            <BookHeart />
          </button>
          <button className="transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
            <SquareUser />
          </button>
        </div>
      )}
    </header>
  );
};
