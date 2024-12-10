import { Suspense } from "react"
import Loading from "./loaging"
import MovieList from "./movies/page"



const Home = () => {
  return (
    <div className="p-5">
      <h1 className="text-2xl text-red-700">hello jee</h1>

      <div className="p-4">
        <h1>Welcome to Movie Datasets</h1>
        <Suspense fallback={<Loading />} >
          <MovieList />
        </Suspense>
      </div>
    </div>
  )
}
export default Home