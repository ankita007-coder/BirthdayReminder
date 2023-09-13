import { useEffect } from "react";
import { PeopleList } from "./PeopleList";
import data from "./data";
import { useState } from "react";


const App = () => {
  const [persons,setPersons] = useState(data);

  useEffect(() => {
    const currentDate = new Date();
    const currentMonthDay = currentDate.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
    });
    //console.log(currentMonthDay);
    // Filter persons whose 'dob' matches the current date and month
    const filteredPersons = persons.filter((p) => {
      const dobMonthDay = p.dob.slice(5); // Extract 'mm-dd' from 'yyyy-mm-dd'
      return dobMonthDay === currentMonthDay;
    });
    //console.log(filteredPersons);
    setPersons(filteredPersons);
  }, []);
  
 
  return <main> 
     <div className="container">
     <h3>{persons.length} Birthdays Today</h3>
    <PeopleList persons={persons}/>
    
     <button className="btn btn-block"
             onClick={()=>setPersons([])}>clear all</button>
              </div>
  </main>
 ;

};
export default App;
