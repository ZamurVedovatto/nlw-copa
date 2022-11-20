import { useEffect, useState } from "react";
import Classification from "../components/Classification";

interface RankingProps {
  count: number;
}

const fakeData = [
  {
    name: "1",
    zamur: 7,
    cabu: 7,
    pato: 5,
    tata: 5,
    thomaz: 5,
    dudu: 5,
    luquete: 5,
    saulim: 4,
    andré: 0,
    reinaldo: 0,
    gober: 0,
  },
];

export default function Ranking({ count }): RankingProps {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(fakeData);
  }, []);

  return (
    <div className="ranking">
      <Classification data={data} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3333/poll/count");
  const data = await response.json();

  return {
    props: {
      count: data.count,
    },
  };
};
