import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../images/sprite.svg";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <h1 style={{ position: "relative" }}>
        Our news
        <svg className="postsPage_svg_news">
          <use xlinkHref={`${Icons}#icon-news`} />
        </svg>
      </h1>
      <ul className="postsPage_ul">
        {posts &&
          posts.map((post) => (
            <li key={post.id} className="postsPage_li">
              <svg className="postsPage_svg_post">
                <use xlinkHref={`${Icons}#icon-doc`} />
              </svg>

              <Link to={`/posts/${post.id}`}>{post.title} </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PostsPage;
