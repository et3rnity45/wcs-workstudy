import { useEffect, useState } from "react";
import axios from "axios";
import Wilder from './components/Wilder';
import AddWilder from "./components/AddWilder";
import { Header, Footer, Container, CardRow } from "./styles/elements";
import './App.css';

function App() {
  const [wilders, setWilders] = useState([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const result = await axios("http://localhost:5000/api/wilders");
        setWilders(result.data.result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchWilders();
  }, []);

  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <AddWilder />
      </Container>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map(wilder => (
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
