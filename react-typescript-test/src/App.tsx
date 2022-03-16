import React, { useState } from 'react';
import AddToList from './components/AddToList';
import List from './components/List';
import './App.css';

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: 'Taeeun',
      url: 'https://avatars.githubusercontent.com/u/44340864?v=4',
      age: 25,
      note: 'Gazua',
    },
  ]);

  return (
    <div className='App'>
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
