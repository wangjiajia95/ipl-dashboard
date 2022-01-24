import { React, useEffect, useState } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';

export const TeamPage = () => {
  // not return undefine matches: []
  const [team, setTeam] = useState({matches: []});
  


// useEffect to pass live data, call API
  useEffect(
    () => {
      const  fetchMatches = async() => {
          const response = await fetch('http://localhost:8080/team/Deccan Chargers');
          const data = await response.json();
          setTeam(data);
      };
      fetchMatches();

    }, []
  );
      console.log(team);
      console.log(team.matches);



  return (
    <div className="TeamPage">
      <h1>{team.teamName}</h1>
      {/* first page showing */}
      <MatchDetailCard  match={team.matches[0]}/> 
    {/* remove first use slice */}
      {team.matches.slice(1).map(match => <MatchSmallCard match={match}/>)}
      
    </div>
  );   



}


