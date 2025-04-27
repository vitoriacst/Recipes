import {
  ChefHat,
  Cookie,
  CookingPot,
  Croissant,
  Microwave,
  Utensils,
  UtensilsCrossed,
} from 'lucide-react';

export const Login = () => {
  return (
    <div className="md:p-32">
      <section className="w-full flex md:items-start md:sjustify-start flex-col flex-wrap">
        <div className="flex items-center justify-start gap-2">
          <h1 className="text-6xl text-red-900 mb-2">Saborize</h1>
          <Utensils />
        </div>
        <div className="flex flex-wrap">
          <h4 className="mb-12 text-xl">
            With Saborize, each recipe is a unique experience, transforming
            simple ingredients into unforgettable moments of flavor and
            creativity.
          </h4>
        </div>
        <div className="w-full md:h-[500px] sm:h-full border-2 border-red-900 rounded-lg flex items-center justify-around  gap-8 md:p-8 p-2 shadow-md flex-wrap md:flex-nowrap">
          <section className="flex flex-col w-full gap-4">
            <h1 className="text-red-900 text-3xl">Welcome</h1>
            <form className="flex gap-2 flex-col">
              <label className="text-red-900 font-bold">Email</label>
              <input className="md:w-[400] h-[40px] border-2 border-red-700 rounded-md"></input>
              <label className="text-red-900 font-bold">Password</label>
              <input className="md:w-[400] h-[40px] border-2 border-red-700 rounded-md"></input>
              <button className="md:w-[400] bg-red-900 mt-4 text-white flex items-center justify-center p-2 font-bold gap-2 rounded-md transition-transform duration-300 ease-in-out hover:-translate-y-1 cursor-pointer">
                Let´s cook
                <CookingPot />
              </button>
            </form>
          </section>
          <div className="bg-red-900 w-full h-full flex items-center justify-center gap-2 p-4 text-white rounded-lg shadow-md">
            <section>
              <div className="flex items-center justify-between flex-col gap-2">
                <h1 className="text-7xl">Saborize</h1>
                <h4>A new cuisine Experience</h4>
                <div className="flex gap-2 mt-2">
                  <UtensilsCrossed />
                  <CookingPot />
                  <Croissant />
                  <Cookie />
                  <ChefHat />
                  <Microwave />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};
