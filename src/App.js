
import './App.css';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">

      <Countries></Countries>
  
    </div>
  );
}

export default App;









































































/*
function Countires(){

  const [countries , setCountries] = useState([]);
  useEffect(() => {

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json () )
    .then(data => setCountries(data));

  } , []);
  return(
    <div>
      <h2>Travelling Around The World</h2>
      <h2>Countries Available : {countries.length}</h2>
      {
        countries.map(country => <Country name ={country.name} capital ={country.capital}> </Country>)
      
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h2>Name : {props.name}</h2>
      <h4>Capital : {props.capital}</h4>
    </div>
  )
}




  // const [countries , setCountries] = useState([]);
  // useEffect(() =>
  //   fetch('https://restcountries.com/v3.1/all')
  //   .then(res => res.json())
  //   .then(data => setCountries(data))
  //  , [])
*/
