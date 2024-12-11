import Link from "next/link"

const Navigation = () => {
  return (
    <div className="bg-black text-white m-4 p-4 flex gap-5">
      <Link href={'/'} className="hover:bg-red-700 p-4 m-2">Home</Link>
      <Link href={'/movies'} className="hover:bg-red-700 p-4 m-2">MovieList</Link>
      <Link href={'/about'} className="hover:bg-red-700 p-4 m-2">About</Link>
      <Link href={'/create-movie'} className="hover:bg-red-700 p-4 m-2">Add-Movie</Link>

    </div>
  )
}
export default Navigation