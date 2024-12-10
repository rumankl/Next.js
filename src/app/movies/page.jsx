import Link from "next/link";


const getData = async () => {
  const res = await fetch('https://6756626911ce847c992c9f4c.mockapi.io/movies', {
    next: {
      revalidate: 10
    }
  });
  return res.json();
}


const MovieList = async () => {

  const res = await getData();

  return (
    <div>
      {res && res.map((movie) => {
        return <Link href={`/movies/${movie.id}`} key={movie.id}>
          <img src={movie.Poster} alt="" />
          {/* <Image
            src="https://plus.unsplash.com/premium_photo-1732730224306-3b469ea9e640?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
            width={200}
            height={200}
            placeholder="red"
          /> */}
          <h1>{movie.Title}</h1>
        </Link>
      })}
    </div>
  )
}
export default MovieList