import React from "react";
import './App.css';

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];

// comment this out after completion and uncomment code below it to proceed
// function Child() {
//   return <div>This is children content</div>;
// }

//  Challenge: Uncomment this code to complete quiz

function Child({changeParent}) {
  return (
    <>
      <div>Child</div>
      <button onClick={changeParent}>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );
  function valueChanged(){
    setValue("Updated from child")
  }

  return (
    <div className="value">
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child changeParent={valueChanged}/>
      </div>
    </div>
  );
}
// Uncomment this to tackle quiz


// Comment out after completion
// function Parent() {
//   return (
//     <div>
//       <h3>Parent Component</h3>
//     </div>
//   );
// }
// Comment above code after completion

function App() {

  const [] = React.useState(true);

  const allUsers = users.map((allUsers) => <li key={allUsers.id}>{allUsers.name}</li>);

  return (
    
    <div className="names">
    
    <img src="https://data.whicdn.com/images/190954249/original.gif" 
    className="App-logo" 
    alt="logo" />
     <p>JSX is cool</p>
      <h3>User names</h3>
      <ul>
        {allUsers}
      </ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
    </Parent>
    </div>
  );
}

export default App;
