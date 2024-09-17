import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import pizzaData from "./data.js"; // We are not using this file for this practise project
import reportWebVitals from "./reportWebVitals";

// cd 03-pizza-menu/testproj/pizza-menu

// You can comment stuff out inside React like this: {/* Blah Blah */}

// ? This question mark is the ternary operator: https://www.joshwcomeau.com/operator-lookup?match=ternary
// It pretty much functions as an if / else statement

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// Header prop
function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

// Menu prop
function Menu() {
  const pizzas = pizzaData;
  //const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {/* ternary operator practise (this operator uses the question mark ? icon)*/}

      {/* The empty tags a few lines down is called a React Fragment (<> and </>). It lets you group elements without a wrapper div */}
      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later!</p>
      )}

      {/*<Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, onion"
        photoName="pizzas/funghi.jpg"
        price={12}
      />*/}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  //if (pizzaObj.soldOut) return null; // we don't want this as it will make the pizza disappear instead of greyed out
  // Instead, we are using the ternary operator (the question mark) to conditionally render the css class "pizza.sold-out" to show a greyed out image when the pizza is out of stock

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : "pizza"}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : "£" + pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12; // Opens at midday
  const closeHour = 22; // Closes at 10pm
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  const isClosed = hour <= openHour && hour >= closeHour;
  console.log(isClosed);

  // This returns if the pizza place is not open due to the ! operator
  // ! is the Logical NOT operator, AKA bang, it flips a boolean value
  if (!isOpen)
    return (
      <p className="footer">
        We're happy to welcome you between {openHour}:00 & {closeHour}:00.
      </p>
    );

  //  >= Means "Greater Than or Equal To", aka = > (Webstorm auto types it like this)
  // Here be some JavaScript logic we can use later.
  // if (openHour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("We are currently closed.");

  // The && operator a few lines down checks if something is true or false (boolean)
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 & {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 until {closeHour}:00. Come visit us in
        store or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Pre version 18
// React.render(<App />), document.getElementById("root");
