import Skill from './Skill';
import Proptypes from "prop-types";

function SkillList({ skills }) {
  return (
    <ul className="skills">
      {skills.map(skill => (
        <Skill key={skill.name} name={skill.name} votes={skill.votes} />
      ))}
    </ul>
  )
}

SkillList.propTypes = {
  skills: Proptypes.array.isRequired
}

export default SkillList;