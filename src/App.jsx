// src/App.jsx

import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png",
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png",
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png",
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png",
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png",
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png",
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png",
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png",
    },
  ]);

  const zombieFighterList = zombieFighters.map((zombieFighter) => (
    <li key={zombieFighter.id}>
      <p>{zombieFighter.img}</p>
      <p>Name: {zombieFighter.name}</p>
      <p>Price: {zombieFighter.price}</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
      <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
    </li>
  ));

  const handleAddFighter = (newZombieFighter) => {
    if (newZombieFighter.price > money) {
      console.log('Not Enough Money');      
    } else {
      const newMoneyBalance = money - newZombieFighter.price;
      
      setMoney(newMoneyBalance);
      console.log(newMoneyBalance);
      
      setTeam([...team, newZombieFighter]);

      // removes newZombieFighter from current zombieFighter list
      const updatedZombieFighterList = zombieFighters.filter(
        (zombieFighter) => zombieFighter.id !== newZombieFighter.id
      );

      // update zombieFighters
      setZombieFighters(updatedZombieFighterList);
    }
  };

  const displayTeam = team.length === 0 ? ('Pick some team members!') : ( 
       team.map( teamMember => 
        <li key={teamMember.id}>
        <h2>Team Member:</h2>
        <p>{teamMember.img}</p>
        <p>Name: {teamMember.name}</p>
        <p>Price: {teamMember.price}</p>
        <p>Strength: {teamMember.strength}</p>
        <p>Agility: {teamMember.agility}</p>
        </li>
       ));
  
  
  let totalStrength = team.length === 0 ? (0) : (
    team.reduce ( (acc, teamMember) => acc + teamMember.strength, 0)
  );

  let totalAgility = team.length === 0 ? (0) : (
    team.reduce ( (acc, teamMember) => acc + teamMember.agility, 0)
  );

  return (
    <>
      <h2>Money: {money}</h2>
      <ul>{ zombieFighterList }</ul>
      <ul>{ displayTeam } </ul>
      <h2>Total Team Strength: { totalStrength }</h2>
      <h2>Total Team Agility: { totalAgility }</h2>
    </>
  );
};

export default App;
