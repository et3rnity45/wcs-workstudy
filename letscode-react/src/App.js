import Wilder from './components/Wilder';
import { Header, Footer, Container, CardRow } from "./styles/elements";
import './App.css';

const wilders = [
  {
    name: 'Pierre',
    skills: [
      { title: 'HTML', votes: 3 },
      { title: 'CSS', votes: 4 },
      { title: 'TypeScript', votes: 1 },
      { title: 'Node', votes: 7 }
    ]
  },
  {
    name: 'Paul',
    skills: [
      { title: 'HTML', votes: 4 },
      { title: 'CSS', votes: 6 },
      { title: 'TypeScript', votes: 12 },
      { title: 'Node', votes: 2 }
    ]
  },
  {
    name: 'Jacques',
    skills: [
      { title: 'HTML', votes: 2 },
      { title: 'CSS', votes: 3 },
      { title: 'TypeScript', votes: 7 },
      { title: 'Node', votes: 4 }
    ]
  }
];

function App() {
  return (
    <div>
      <Header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </Header>
      <Container>
        <h2>Wilders</h2>
        <CardRow>
          {wilders.map(wilder => (
            <Wilder key={wilder.name} {...wilder} />
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
