import { useEffect, useState } from "react";
import Classification from "../components/Classification";

interface RankingProps {
  count: number;
}

const fakeData = [
  {
    name: "1",
    andre: 9,
    cabu: 2,
    dudu: 6,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 4,
    thomaz: 5,
    zamur: 1,
  },
  {
    name: "2",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },
  {
    name: "3",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },
  {
    name: "4",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },
  {
    name: "5",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "6",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "7",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "8",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "9",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "10",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "11",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "12",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "13",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "14",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "15",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "16",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "17",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "18",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "19",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "20",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "21",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "22",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "23",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
  },

  {
    name: "24",
    andre: 9,
    cabu: 1,
    dudu: 5,
    gober: 11,
    luquete: 7,
    pato: 3,
    reinaldo: 10,
    saulo: 8,
    tata: 6,
    thomaz: 4,
    zamur: 2,
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
