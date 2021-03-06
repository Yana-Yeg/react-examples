import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SinglePostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const goBack = () => navigate(-1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <button onClick={goBack} className="singlePostPage_btn">
        Go back
      </button>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link
            to={`/posts/${id}/edit`}
            className="singlePostPage_btn link_btn"
          >
            Edit this post
          </Link>
        </>
      )}
    </div>
  );
};

export default SinglePostPage;
