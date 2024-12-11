import { Suspense } from 'react'
import SearchInput from "@/components/SearchInput";
import Loader from "@/components/Loader/Loader";
import Breaches from "@/modules/Breaches";

const Home = async ({ searchParams }) => {
  const searchparams = await searchParams;

  return (
    <div className="flex h-auto justify-center">
      <div className="pt-40 container flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold text-center font-sunset">
          List of Data Breaches
        </h1>
        <p className="text-xl text-center mt-6"></p>
        <div className="lg:w-[1038px] mt-12 mb-32">
          <SearchInput
            className={"max-w-full rounded-xl py-6 !text-lg"}
            placeholder={"Search"}
            initialValue={searchparams.q}
          />
        </div>
        <Suspense
          key={searchparams.p + searchparams.offset}
          fallback={<Loader />}
        >
          <Breaches searchparams={searchparams} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
