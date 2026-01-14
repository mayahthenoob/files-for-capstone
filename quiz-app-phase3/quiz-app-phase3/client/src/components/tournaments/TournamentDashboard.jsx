
import { useState } from 'react';
export default function TournamentDashboard(){
 const [t,setT]=useState([]);
 return (
  <div className='card'>
   <h2>Tournaments</h2>
   <button onClick={()=>setT([...t,{name:'School Cup'}])}>Create Tournament</button>
   <ul>{t.map((x,i)=><li key={i}>{x.name}</li>)}</ul>
  </div>
 );
}
