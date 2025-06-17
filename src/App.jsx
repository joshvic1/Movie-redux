import "bootstrap/dist/css/bootstrap.min.css";

import Filter from "./components/Filter";
import { Button, Container } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const dispatch = useDispatch();
  const [newMovie, setNewMovie] = usestate({
    title: "",
    description: "",
    rate: 0,
    imageUrl: "",
  });

  const handleAddMovie = () => {
    dispatch(addMovie({ ...newMovie, id: uuidv4() }));
    setNewMovie({ title: "", description: "", imageUrl: "", rate: 0 });
  };
  return (
    <Container>
      <h1 className="text-center mt-4">Movie App With Redux</h1>
      <Filter />
      <div className=" mt-2 mb-2 gap-3 d-flex justify-content-center">
        <input
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) =>
            setNewMovie({ ...newMovie, description: e.target.value })
          }
        />
        <input
          placeholder="Image Url"
          value={newMovie.imageUrl}
          onChange={(e) =>
            setNewMovie({ ...newMovie, imageUrl: e.target.value })
          }
        />
        <input
          placeholder="Rating"
          type="number"
          value={newMovie.rate}
          onChange={(e) =>
            setNewMovie({ ...newMovie, rate: Number(e.target.value) })
          }
        />
        <Button variant="danger">Add Movies</Button>
      </div>
    </Container>
  );
};

export default App;
