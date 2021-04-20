/* eslint-disable no-underscore-dangle */
import React from "react";
import blank_profile from "../assets/img/blank_profile.jpg";
import Skill, { SkillProps } from "./Skill";
import { Card, List } from "../styles/elements";

export type WilderProps = {
  _id: number;
  city: string;
  justAdded: boolean;
  name: string;
  skills: SkillProps[];
};

function Wilder({ name, city, skills, justAdded }: WilderProps): JSX.Element {
  return (
    <Card newCard={justAdded}>
      <img src={blank_profile} alt={`${name} Profile`} />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <List>
        {skills.map((skill) => (
          <Skill
            key={skill._id}
            _id={skill._id}
            title={skill.title}
            votes={skill.votes}
          />
        ))}
      </List>
    </Card>
  );
}

export default Wilder;
