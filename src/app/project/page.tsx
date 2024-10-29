import React from 'react'
import '../../../public/style/project.css'
import Card from '@/components/card'
export default function Project() {
  return (
    <main className='project'>
         <section className='ProjectTextSec'>
            <h1 className='heading'>My Projects</h1>
            <p> Explore my project These projects highlight my skills in front-end and back-end development, combining creativity with technical expertise to solve real-world problems.</p>
            <p> See my work in action below!</p>
         </section>
         <section>
          <Card/>
         </section>
    </main>
  )
}
