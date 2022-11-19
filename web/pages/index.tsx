interface HomeProps {
  count: number;
}

export default function Home({count}:HomeProps) {
  return (
    <h1>hello world {count}</h1>
  )
}

export const getServerSideProps = async() => {
  const response = await fetch('http://localhost:3333/polls/count')
  const data = await response.json()
  console.log(data)

  return {
    props: {
      count: data.count,
    }
  }
}