import React from "react";
import { Person } from "./Person";

export const PeopleList = ({persons}) => {

  return <div>
    {
        persons.map((person)=>{
            return <Person key={person.id} person={person}/>
        })
    }
  </div>;
};
