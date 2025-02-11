// // import './App.css';

// // function App() {
// //   let username = "vinay";
// //   return (
// //     <div>
// //       <h1>{username}</h1>
// //       <p>vinay</p>
// //     </div>
// //   );
// // }

// // export default App;
// // import React from 'react'
// // import Navbar from './components/Navbar'
// //  import Main from './components/Main'
// //  import Sidebar1 from './components/Sidebar2'
// //  import Sidebar2 from './components/Footer'
// //  import Footer from './components/Footer' 
// //  const App = () => {
// //   return (
// //     <div className='app'>
// //       <Navbar/>
// //       <Main/>
// //       <div className='sidebar'>
// //       <Sidebar1/>
// //       <Sidebar2/>
// //     </div>
// //     <Footer/>
// //     </div>
// //   )
// //  }
// import React, {Component} from 'react'
// import FBCPropEx from './propsex/FBCPropEx'

// // export default class App extends Component {
// //   render(){
// //     return(
     
        

      
// //       <div>
// //         <FBCPropEx
// //         username="msd"
// //         isMarried={true}
// //         hobbies={["playing", "Farming" , "Eating"]}
// //         />
// //       </div>
        
// //     )
// //   }
// // }

// // import React, { Component } from 'react'



// // import FunctionalComponent from './components/Functionalcomponent'


// // export default class App extends Component {
// //   render() {
// //     return (
// //       <div>
        
// //         <FunctionalComponent clgName='Mru' city='Hyd'/>
// //       </div>
// //     )
// //   }
// // }

// import logo from './logo.svg'
// import './App.css';
// import MyForm from './components/Myform';



// function App() {
//   return (
//     <div className="App">
//      <MyForm></MyForm>
//      </div>
//   );
// }

// export default App;

// import React from 'react'
// import UseEffectEx from './hookexamples/UseEffectEx'

// export const App = () => {
//   return (
//     <div>App
//       <UseEffectEx/>
//     </div>
//   )
// }

import React from 'react';
import UseEffectEx from './hookexamples/UseEffectEx';
import ReactEffect from './hookexamples/ReactEffect';


function App() {
  return (
    <div className="App">
      <UseEffectEx/>
      <ReactEffect/>
      
    </div>
  );
}

export default App;