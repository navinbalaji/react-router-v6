import {
  Link,
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";

export default function BooksLayout() {
  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });

  const number = searchParams.get("n");

  const location = useLocation();

  return (
    <>
      <h1>State {location.state}</h1>
      <ul>
        <li>
          <NavLink to="/book/1" state="hi">
            Book 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/book/2">Book 2</NavLink>
        </li>
        <li>
          <NavLink to={`/book/${number}`}>Book {number}</NavLink>
        </li>
        <li>
          <NavLink to="/book/new">Book new</NavLink>
        </li>
      </ul>
      <Outlet context={{ message: "hello world" }} />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
    </>
  );
}
