import React,{useState} from 'react';
import './App.scss';
import Recipe from "./components/Recipe";
import Alert from "./components/Alert";

function App() {
  const [query,setQuery] = useState("");
  const [recipes,setRecipes] = useState([]);
  const [alert,setAlert] = useState("");

  const APP_ID = "fda6e8bc";
  const APP_KEY = "c49a0cc0a42462fc5b073d7c95111fe4";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  const getData = async () => {
    if(query !== ""){
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      if(result.more === false){
        return setAlert("There is no food such that");
      }
      setRecipes(result.hits);
      setAlert("");
      setQuery("");
    }
    else{
      setAlert("Please fill the form");
    }
  }
  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  }
  
  const onChange = (event) => {
    setQuery(event.target.value);
  }

  return (
    <div className="App">
      <h1>Food App</h1>
      <form className="search-form" onSubmit = {onSubmit}>
        {alert !== "" && <Alert alert={alert} />}
        <input type="text" placeholder="Search Food" autoComplete="off" value={query} onChange={onChange}/>
        <input type="submit" value="Search"/>
      </form>
      <div className="recipes">
        {recipes !== [] && recipes.map( (recipe,index) => 
          <Recipe key={index} recipe={recipe} />
          )}
      </div>
    </div>
  );
}

export default App;
