import { useReducer } from "react";
import Wilder from './components/Wilder';
import AddWilder from "./components/AddWilder";
import useWilderFetch from './hooks/useWilderFetch';
import appReducer from './reducers/appReducer';
import { Header, Footer, Container, CardRow, ShowButton } from "./styles/elements";
import { Success } from './styles/form-elements';
import './App.css';

const initialState = {
  showAddForm: false,
  successMessage: "",
  wilders: []
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);
  useWilderFetch(dispatch);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <ShowButton
          onClick={() => dispatch({ type: "TOGGLE_SHOW_ADD_FORM" })}
        >
          {state.showAddForm ? "Close" : "Open"}
        </ShowButton>
        {state.showAddForm ? (
          <AddWilder
            onSuccess={(newWilder) =>
              dispatch({ type: "WILDER_ADDED", newWilder })
            }
          />
        ) : (
          state.successMessage !== "" && (
            <Success>{state.successMessage}</Success>
          )
        )}
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {state.wilders.map(wilder => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
        </CardRow>
      </Container>
      <Footer>
        <Container>
          <p>&copy; 2021 Wild Code School</p>
        </Container>
      </Footer>
    </div>
  );
}

export default App;
