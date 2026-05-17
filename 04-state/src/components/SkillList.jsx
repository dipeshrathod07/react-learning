//How to set array in state.

import { useState } from "react";

export const SkillList = () => {
    const [skill, setSkill] = useState('')
    const [skills, setSkills] = useState([])

    
    const addSkill = () => {
        if (skill.trim() === '') return

        setSkills((prevSkill)=>[...prevSkill,skill])
        setSkill('')

    }
  return (
      <div>
          <h2>Skills</h2>
          <input type="text" value={skill}
              onChange={(event) => setSkill(event.target.value)}
              placeholder="Enter skill"/>
          <button onClick={addSkill}>Add Skill</button>

          <ul>
              {skills.map((item, index) => (
                  <li key={index}>{item}</li>
              ))}
          </ul>
    </div>
  )
}
