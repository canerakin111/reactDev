
import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s kitchen</h1>
    </header>
  )
  
}
function Main(props) {
  return (
    <section>
      <p>We server the most {props.adjective} food</p>
      <ul style={{textAlign: "left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
      ))}
      </ul>
    </section>
    

  )  
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

const dishes = [
  "Macaroni and Cheese",
  "Salmon",
  "Tofu with Vegetables"
];

const dishObject = dishes.map((dish, i) => ({id: i, title: dish}));
function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adjective="amazing" dishes={dishObject}/>
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
