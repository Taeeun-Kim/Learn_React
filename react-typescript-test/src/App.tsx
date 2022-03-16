import React, { useState } from 'react';

function App() {
  const [people, setPeople] = useState([
    {
      name: 'Taeeun',
      url: '',
      age: 25,
      note: 'All right',
    },
    {
      name: 'Eric',
      url: '',
      age: 25,
    },
  ]);

  people.map((person) => {
    person.age = 5;
  });

  return (
    <div>
      <h1>People invited to my party</h1>
    </div>
  );
}

export default App;
