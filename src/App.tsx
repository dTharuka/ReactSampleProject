// import React, { Component } from 'react';
// import './App.css';
// import Header from './components/Header/Header';
// import Content from './components/Content/Content';

// export default class App extends Component {

//   componentDidMount(): void {
//     console.log("Hello World");
//   }

//   render(): React.ReactNode {
//     return (
//       <div className="min-h-screen">
//         <Content/>
//       </div>
//     );
//   }
 
// }
import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import SideContent from './components/SideContent/SideContent';
import SideHeader from './components/SideHeader/SideHeader';

const App = () => {
  useEffect(() => {
    console.log("Hello World");
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <SideContent/>
      <SideHeader/>
      <Content />
    </div>
  );
};

export default App;
