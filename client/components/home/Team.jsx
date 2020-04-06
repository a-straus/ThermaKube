import React from 'react';
import { Github, Linkedin, ReactJs } from '@icons-pack/react-simple-icons';

const Team = () => {
  const members = [
    {
      name: 'Evan Amoranto',
      github: 'https://github.com/eamoranto',
      linkedin: 'https://www.linkedin.com/in/'
    },
    {
      name: 'Elie Baik',
      github: 'https://github.com/semtemp',
      linkedin: 'https://www.linkedin.com/in/sae-min-baik/'
    },
    {
      name: 'Clara Kim',
      github: 'https://github.com/clarakm',
      linkedin: 'https://www.linkedin.com/in/'
    },
    {
      name: 'Nick Primuth',
      github: 'https://github.com/NickPrimuth',
      linkedin: 'https://www.linkedin.com/in/'
    },
    {
      name: 'Kritika Sah',
      github: 'https://github.com/hellokritty',
      linkedin: 'https://www.linkedin.com/in/'
    },
  ]

  const teamArr = members.map((mem, index) => {
    return (
      <div className='member' key={`member${index}`}>
        <img 
          className='teamImg' 
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Nota_disambigua.svg/200px-Nota_disambigua.svg.png' 
        >
        </img>
        <h5>{mem.name}</h5>
        <span>
          <a href={mem.github}>
            <Github color="white" size={28}/>
          </a>
          <a href={mem.linkedin}>
            <Linkedin color="white" size={28} />
          </a>
        </span>
      </div>
    )
  })

  return (
    <section className='teamContainer'>
      <h2>ThermaKube Team</h2>
      <div className='profileGrp'>
        {teamArr}
      </div>
    </section> 
  )
}

export default Team;