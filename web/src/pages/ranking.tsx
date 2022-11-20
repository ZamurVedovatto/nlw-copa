import { useEffect, useState } from "react";
import Classification from "../components/Classification";

interface RankingProps {
  count: number;
}

const fakeData = [
  {
    name: "1",
    zamur: 1,
    cabu: 2,
    pato: 3,
    tata: 4,
    thomaz: 5,
    dudu: 6,
    luquete: 7,
    saulo: 8,
    andre: 9,
    reinaldo: 10,
    gober: 11,
  },
  {
    name: "2",
    cabu: 5,
    zamur: 6,
    pato: 4,
    tata: 3,
    thomaz: 7,
    dudu: 2,
    luquete: 11,
    saulo: 1,
    andre: 8,
    reinaldo: 9,
    gober: 10,
  },
  {
    name: "3",
    cabu: 3,
    zamur: 4,
    pato: 2,
    tata: 1,
    thomaz: 5,
    dudu: 6,
    luquete: 9,
    saulo: 7,
    andre: 8,
    reinaldo: 11,
    gober: 10,
  },
  {
    name: "4",
    cabu: 2,
    zamur: 1,
    pato: 5,
    tata: 3,
    thomaz: 4,
    dudu: 6,
    luquete: 9,
    saulo: 7,
    andre: 8,
    reinaldo: 10,
    gober: 11,
  },
  {
    name: "5",
    cabu: 2,
    zamur: 1,
    pato: 4,
    tata: 5,
    thomaz: 3,
    dudu: 8,
    luquete: 7,
    saulo: 9,
    andre: 6,
    reinaldo: 11,
    gober: 10,
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
