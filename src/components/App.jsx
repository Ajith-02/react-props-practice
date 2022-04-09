import React from "react";
import Card from "./Cards";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tele={contacts[0].phone}
        mail={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tele={contacts[1].phone}
        mail={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tele={contacts[2].phone}
        mail={contacts[2].email}
      />
    </div>
  );
}

export default App;
