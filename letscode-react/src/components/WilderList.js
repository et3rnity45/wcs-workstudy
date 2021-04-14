import Wilder from './Wilder';
import './WilderList.css';

const wilders = [
  {
    name: 'Pierre',
    skills: [
      { name: 'HTML', votes: 3 },
      { name: 'CSS', votes: 4 },
      { name: 'TypeScript', votes: 1 },
      { name: 'Node', votes: 7 }
    ]
  },
  {
    name: 'Paul',
    skills: [
      { name: 'HTML', votes: 4 },
      { name: 'CSS', votes: 6 },
      { name: 'TypeScript', votes: 12 },
      { name: 'Node', votes: 2 }
    ]
  },
  {
    name: 'Jacques',
    skills: [
      { name: 'HTML', votes: 2 },
      { name: 'CSS', votes: 3 },
      { name: 'TypeScript', votes: 7 },
      { name: 'Node', votes: 4 }
    ]
  }
];

function WilderList() {
  return (
    <section className="card-row">
      {wilders.map(wilder => (
        <Wilder key={wilder.name} name={wilder.name} skills={wilder.skills} />
      ))}
    </section>
  )
}

export default WilderList;