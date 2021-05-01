import {useState,useCallback} from 'react';
// useCallback to optimize performance
const d3 =require('d3');

function App() {

  const width=960;
  const height=500;
  const circleRadius=30;
  const initialMousePosition={x:width/2,y:height/2};
  // useState() hook to handle change in state
  // setMousePosition is used to change the state of mousePosition where mousePosition represents the state of the variable
  // when at the first time render mousePosition=initialMousePosition
  const [mousePosition,setMousePosition]=useState(initialMousePosition);

  // useCallback is used to optimize the performance it has second parameter as array of dependancy i.e things this function needs to run in this case the setMousePosition
  // after using callback this handleMouseMove dont keeps on resetting the render to new function it only changes IF ANY dependency IN THE dependancy ARRAY CHANGES.
  const handleMouseMove=useCallback(event=>{
    const {clientX,clientY}=event;
    //console.log({clientX,clientY})// to determine the mouse pointer location

    setMousePosition({x:clientX,y:clientY})
    //console.log('Mouse moved!');
  },[setMousePosition])






  return (
    <div>
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
         cx={mousePosition.x}
         cy={mousePosition.y}
         r={circleRadius}
         />
      </svg>
    </div>
  );
}

export default App;
