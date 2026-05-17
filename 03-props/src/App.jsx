import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import UserCard from './components/UserCard'
import CourseCard from './components/CourseCard'

function App() {

  return (
    <>
      <h1>Props Practise</h1>
      <UserCard name="Dipesh" role="React Learner" city="Surat"></UserCard>
      <UserCard name="Rahul" role="Frontend Developer" city="Ahemdabad"></UserCard>
      <UserCard name="Priya" role="UI Developer" city="Indore"></UserCard>
      
      <CourseCard title="React Basics" duration="7 Days" level="Beginner" />
      <CourseCard title="JavaScript" duration="15 Days" level="Intermediate" />
      
    </>
  )
}

export default App
