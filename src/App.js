import React, { useState } from 'react'
import { data } from './constants'

const Y_O_B = 0;
const GENDER = 1;
const ETHNICITY = 2;
const NAME = 3;
const NUM_OF_DUPLICATES = 4;
const RANK = 5;

const maleNames = data.filter(row => row[GENDER] === "MALE");
const femaleNames = data.filter(row => row[GENDER] === "FEMALE");

const getRandomInt = max => {
  return Math.floor(Math.random() * max); //The maximum is inclusive and the minimum is inclusive 
}

const capitalize = str => typeof str !== 'string' ? '' : `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`

const Home = () => {
  const [maleName, setMaleName] = useState('');
  const [femaleName, setFemaleName] = useState('');

  const generateMaleName = () => {
    const randNum = getRandomInt(maleNames.length);
    const randName = maleNames[randNum][NAME];

    // IF NAME SHOULD APPEAR ONLY ONCE
    // maleNames.splice(randNum, 1);

    setMaleName(randName); 
  }

  const generateFemaleName = () => {
    const randNum = getRandomInt(femaleNames.length);
    const randName = femaleNames[randNum][NAME];

    // IF NAME SHOULD APPEAR ONLY ONCE
    // femaleNames.splice(randNum, 1);

    setFemaleName(randName); 
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <button className="btn btn-outline-primary btn-lg" onClick={generateMaleName}>Male</button>
        </div>
        <div className="col">
          <button className="btn btn-outline-pink btn-lg" onClick={generateFemaleName}>Female</button>
        </div>
      </div>
      
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body male">
              {capitalize(maleName)}
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-body female">
              {capitalize(femaleName)}
            </div>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Home
