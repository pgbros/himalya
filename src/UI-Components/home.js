// // Home.js
// import React, { useContext } from 'react';
// import { MyContext } from '../MyContext';
// const Home = () => {
//   const { greeting, setGreeting } = useContext(MyContext);
//   const [key,setKey] = React.useState("")
//   const [value,setValue] = React.useState("")
//   const updateGreeting = () => {
//     setGreeting({...greeting, [key]:value});
//   };

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <div>
//       <input onChange={(e)=>{setKey(e.target.value)}}/>
//       </div>
//       <div>
//       <input onChange={(e)=>{setValue(e.target.value)}}/>
//       </div>

//       {Object.keys(greeting).map((key,i)=>{
//         return (
//             <div>
//                 <span>{key+"  "}</span>
//                 <span>{greeting[key]}</span>
//             </div>
//         )
//       })}
//       <button onClick={updateGreeting}>Update Greeting</button>
//     </div>
//   );
// };

// export default Home;
