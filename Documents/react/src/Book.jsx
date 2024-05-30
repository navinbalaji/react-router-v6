import { useOutletContext, useParams } from "react-router-dom";

export default function Book() {
  const { id } = useParams("id");
  const obj = useOutletContext();
  return (
    <h1>
      Book Page {id} {obj.message}
    </h1>
  );
}
