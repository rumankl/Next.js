
const getDetail = async (id) => {
  const res = await fetch(`https://6756626911ce847c992c9f4c.mockapi.io/movies/${id}`);
  return res.json();
}
const MovieDetail = async ({ params }) => {
  const { id } = await params;
  const res = await getDetail(id);

  console.log(res);

  return (
    <div>MovieDetail</div>
  )
}
export default MovieDetail