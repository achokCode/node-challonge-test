import React, { useState, component } from 'react';
import axios from 'axios';
import './App.css';
import { TournamentAdapter } from 'challonge-ts';

function App() {
  const test = async () => {
    const data = await TournamentAdapter.index('ooJ5o12aTrs5SdDdqo1YBYo0ZevUcVC1fWL0pZy2');
    console.log(data);
  }

  test(); // Direct response from the API, array of tournament JSON objects
  return (
    <div>
      Hello world!!
    </div>
  );
}

export default App;

