interface HomeProps {
  count: number;
}

export default function Home({ count }: HomeProps) {
  return <h1 className="text-red-400">hello world {count}</h1>;
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
