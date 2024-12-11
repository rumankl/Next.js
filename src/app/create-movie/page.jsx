"use client"

import axios from "axios";
import { useFormik } from "formik"
import { useRouter } from "next/navigation";


const AddMovie = () => {

  const router = useRouter();

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues: {

    },
    onSubmit: async (values) => {
      try {

        await axios.post('https://6756626911ce847c992c9f4c.mockapi.io/movies', {
          "Title": "something new",
          "Year": "2025",
          "Runtime": "118 min",
          "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"

        })

        // await fetch('https://6756626911ce847c992c9f4c.mockapi.io/movies', {
        //   method: 'POST',
        //   mode: 'no-cors',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     "Title": "something new",
        //     "Year": "2025",
        //     "Runtime": "118 min",
        //     "Poster": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_SX300.jpg"

        //   })
        // });
        router.refresh(); // refresh the page
        router.push('/');  // same as nav(-1) jastai ho

      } catch (err) {

        console.log(err);

      }


    }
  });

  return (
    <div className="p-5">

      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <input className="border border-black" type="text" />
        </div>

        <button className="bg-black text-white px-3 py-2 rounded-lg" type="submit">Submit</button>

      </form>



    </div>
  )
}
export default AddMovie