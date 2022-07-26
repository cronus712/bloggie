import { Link } from "react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;

  //   const handleDelete = props.handleDelete;

  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <h4>Written by {blog.author}</h4>
          </Link>

          {/* <p>{blog.body}</p> */}
          {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
        </div>
      ))}
    </div>
  );
};

export default BlogList;
