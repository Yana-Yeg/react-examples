import { useParams } from "react-router";

const EditPost = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Edit post {id}</h1>
    </>
  );
};

export default EditPost;
