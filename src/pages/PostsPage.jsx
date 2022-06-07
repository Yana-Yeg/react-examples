import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1>Our news</h1>
      <ul className="postsPage_ul">
        {posts &&
          posts.map((post) => (
            <li key={post.id} className="postsPage_li">
              <Link to={`/posts/${post.id}`}>{post.title} </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostsPage;
