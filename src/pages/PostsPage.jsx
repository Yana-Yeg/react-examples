import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PostFilter from "../components/PostFilter/PostFilter";
import Icons from "../images/sprite.svg";

const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [serchParams, setSerchParams] = useSearchParams();

  const postQuery = serchParams.get("post") || "";
  const latest = serchParams.has("latest");
  const startsFrom = latest ? 80 : 1;

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
      <PostFilter
        postQuery={postQuery}
        latest={latest}
        setSerchParams={setSerchParams}
      />
      <ul className="postsPage_ul">
        {posts &&
          posts
            .filter(
              (post) => post.title.includes(postQuery) && post.id >= startsFrom
            )
            .map((post) => (
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
