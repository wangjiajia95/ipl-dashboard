import { React } from 'react';
import { Link } from 'react-router-dom';
import "./YearSelector.scss";

export const YearSelector = ({teamName}) => {
  let years = [];
  // retrieve data from .env
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  
  for (let i = startYear; i <= endYear; i++) {
    years.push(i);
  }
// reflect on page
  return (
    <ol className='YearSelector'>
      {/* use () to seperate component to different lines */}
      {years.map(year => (
      <li>
        <Link to={`/teams/${teamName}/matches/${year}`} >{year}</Link>
      </li>))}

    </ol>
    

    )
};

