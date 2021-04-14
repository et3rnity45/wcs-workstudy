import blank_profile from '../assets/img/blank_profile.jpg';
import Proptypes from "prop-types";
import SkillList from './SkillList';
import './Wilder.css';

function Wilder({ name, skills }) {
  return (
    <article className="card">
      <img src={blank_profile} alt={name + " Profile"} />
      <h3>{name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <SkillList skills={skills} />
    </article>
  )
}

Wilder.propTypes = {
  name: Proptypes.string.isRequired,
  skills: Proptypes.array.isRequired
}

export default Wilder;