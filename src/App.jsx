// src/App.jsx

import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [isThereMoney, setIsThereMoney] = useState('');
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "fighter-images/survivor.jpg",
    },
    {
      id: 2,
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "fighter-images/scavenger.jpg"
    },
    {
      id: 3,
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "fighter-images/shadow.jpg"
    },
    {
      id: 4,
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "fighter-images/tracker.jpg"
    },
    {
      id: 5,
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "fighter-images/sharpshooter.jpg"
    },
    {
      id: 6,
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "fighter-images/medic.jpg",
    },
    {
      id: 7,
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "fighter-images/engineer.jpg"
    },
    {
      id: 8,
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "fighter-images/brawler.jpg"
    },
    {
      id: 9,
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "fighter-images/infiltrator.jpg"
    },
    {
      id: 10,
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "fighter-images/leader.jpg"
    },
  ]);

  let totalStrength =
    team.length === 0
      ? 0
      : team.reduce((acc, teamMember) => acc + teamMember.strength, 0);

  let totalAgility =
    team.length === 0
      ? 0
      : team.reduce((acc, teamMember) => acc + teamMember.agility, 0);

  const zombieFighterList = zombieFighters.map((zombieFighter) => (
    <ul key={zombieFighter.id}>
      <img src={ zombieFighter.img } width='200' height='150' />
      <p>Name: {zombieFighter.name}</p>
      <p>Price: {zombieFighter.price}</p>
      <p>Strength: {zombieFighter.strength}</p>
      <p>Agility: {zombieFighter.agility}</p>
      <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
    </ul>
  ));

  const handleAddFighter = (newZombieFighter) => {
    if (newZombieFighter.price > money) {
      setIsThereMoney('Not Enough Money To Add Fighter!');
      console.log("Not Enough Money");
      return;
    } else {
      setIsThereMoney('');
      const newMoneyBalance = money - newZombieFighter.price;

      setMoney(newMoneyBalance);

      setTeam([...team, newZombieFighter]);

      // removes newZombieFighter from current zombieFighter list
      const updatedZombieFighterList = zombieFighters.filter(
        (zombieFighter) => zombieFighter.id !== newZombieFighter.id
      );

      // update zombieFighters
      setZombieFighters(updatedZombieFighterList);
    }
  };
  
  const handleRemoveFighter = (fighterToBeRemoved) => {
    const newMoneyBalance = money + fighterToBeRemoved.price;
    setMoney(newMoneyBalance);

    totalAgility -= fighterToBeRemoved.agility;
    totalStrength -= fighterToBeRemoved.price;

    const updatedTeamList = team.filter(
      (teamMember) => teamMember.id !== fighterToBeRemoved.id 
    );
    setTeam(updatedTeamList);

    setZombieFighters([...zombieFighters, fighterToBeRemoved]);
  };

  const displayTeam =
    team.length === 0
      ? "Pick some team members!"
      : team.map((teamMember) => (
          <ul key={teamMember.id}>
          <img src={ teamMember.img } width='200' height='200' />
            <p>Name: {teamMember.name}</p>
            <p>Price: {teamMember.price}</p>
            <p>Strength: {teamMember.strength}</p>
            <p>Agility: {teamMember.agility}</p>
            <button onClick={() => handleRemoveFighter(teamMember)}>Remove</button>
          </ul>
        ));


  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money}</h2>
      <p>{isThereMoney}</p>
      <h2>Total Team Strength: {totalStrength}</h2>
      <h2>Total Team Agility: {totalAgility}</h2>
      <h2>Team:</h2>
      <ul>{displayTeam}</ul>
      <h2>Fighters:</h2>
      <ul>{zombieFighterList}</ul>
    </>
  );
};

export default App;
