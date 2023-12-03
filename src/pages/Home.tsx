import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <h1>This is Home page</h1>
      <Link to="/auth/register">Register page</Link>
    </>
  );
}
