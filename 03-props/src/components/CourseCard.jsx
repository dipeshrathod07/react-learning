import React from 'react'

const CourseCard = ({ title, duration, level }) => {
  return (
      <div>CourseCard
          <h2>{title}</h2>
          <p>Duration: {duration}</p>
          <p>Level: {level}</p>
    </div>
  )
}

export default CourseCard