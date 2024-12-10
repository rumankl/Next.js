import Link from "next/link"

const Navigation = () => {
  return (
    <div className="bg-black text-white m-4 p-4 ">

      <Link href={'/about'} className="hover:bg-red-700 p-4 m-2">About</Link>
    </div>
  )
}
export default Navigation