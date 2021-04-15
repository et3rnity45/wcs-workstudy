import blank_profile from '../assets/img/blank_profile.jpg';
import Proptypes from "prop-types";
import Skill from './Skill';
import { Card, List } from '../styles/elements';

function Wilder({ name, city, skills }) {
  return (
    <Card>
      <img src={blank_profile} alt={name + " Profile"} />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map(skill => (
          <Skill key={skill._id} {...skill} />
        ))}
      </List>
    </Card>
  )
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  skills: Proptypes.array.isRequired
}

export default Wilder;
