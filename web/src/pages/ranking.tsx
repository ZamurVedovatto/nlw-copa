import { useEffect, useState } from "react";
import Classification from "../components/Classification";

export default function App() {
  const [data, setdata] = useState();

  useEffect(() => {
    const fetchDatas = async () => {
      const res = await fetch("https://api.coincap.io/v2/assets/?limit=20");
      const data = await res.json();
      console.log(data);

      const fakeData = [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
      // setdata(data?.data);
      setdata(fakeData);
    };
    fetchDatas();
  }, []);

  return (
    <div className="App">
      How to use Recharts with React
      <Classification data={data} />
    </div>
  );
}
