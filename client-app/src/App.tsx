import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/activities')
    .then(response=>{
      setActivities(response.data);
    })
  },[]);

  return (
    <>
     <Header icon='users' content='Reactivities'/>
     <List>
      {
        activities.map((act:any)=>{
          return <List.Item key={act.id}>{act.title}</List.Item>
            
        })
      }
      
     </List>
    </>
  )
}

export default App
