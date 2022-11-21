import { useEffect, useState } from "react";
import Classification from "../components/Classification";

interface RankingProps {
  count: number;
}

const fakeData = [
  {
    name: "1",
    andre: 0,
    cabu: 7,
    dudu: 5,
    gober: 0,
    luquete: 5,
    pato: 5,
    reinaldo: 0,
    saulo: 4,
    tata: 5,
    thomaz: 5,
    zamur: 7,
  },
  {
    name: "2",
    andre: 0,
    cabu: 14,
    dudu: 10,
    gober: 5,
    luquete: 9,
    pato: 9,
    reinaldo: 5,
    saulo: 9,
    tata: 10,
    thomaz: 10,
    zamur: 11,
  },
];

export default function Ranking({ count }): RankingProps {
  const [data, setdata] = useState([]);

  useEffect(() => {
    setdata(fakeData);
  }, []);

  return (
    <div className="ranking">
      {/* <span>{count}</span> */}
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
