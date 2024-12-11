import { getBreachesData } from "@/actions";
import BreachCard from "@/modules/BreachCard";
import Pagination from "@/modules/Pagination";

const Breaches = async ({ searchparams }) => {
  const { data } = await getBreachesData(searchparams);

  if (!data) {
    return null;
  }

  return (
    <>
      <div className="mb-32 grid justify-items-center xl:grid-cols-2 grid-cols-1 gap-5 w-full">
        {data.databreaches.map((breach) => (
          <BreachCard
            icon={
              breach.logo !== ""
                ? breach.logo
                : "/img/icons/default-breach-icon.svg"
            }
            description={breach.description}
            key={breach.name}
            title={breach.name}
            date={breach.date_breached}
            leaked={breach.compromised_fields}
          />
        ))}
      </div>
      <Pagination lengthData={data?.matches} />
    </>
  );
};

export default Breaches;
