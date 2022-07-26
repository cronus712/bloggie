import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <Link to="/">
        back to <b>homepage</b>
      </Link>
    </div>
  );
};

export default NotFound;