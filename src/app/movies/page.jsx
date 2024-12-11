import { Suspense } from "react"
import MovieList from "./MovieList"
import Loading from "../loaging";

export const metadata = {
  title: "Movies",
  description: "Movies List Show",
};

const MoviePage = () => {
  return (
    <div>

      <Suspense fallback={<Loading />} >
        <MovieList />
      </Suspense>





    </div>
  )
}
export default MoviePage