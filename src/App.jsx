import './App.css'
import Counter from './counter';
import Friend from './friend';
import Friends from './friends';
import Team from './Team';
import Users from './Users';


function App() {
    function handleClick(){
      alert('button clicked');
    }
    const handleClick2 = () => {
      alert('Button 2 clicked');
    }
    const addToFIve = (num) =>{
      alert(num+5);
    }

  return (
    <>
   
      <h2>Core Concepts 2</h2>
      <Friends></Friends>
      <Friend></Friend>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
     <button onClick={handleClick2}>Click2</button>
     <button onClick={() =>{ alert('Third clicked')}}>Third</button>
     <button onClick={() => addToFIve(3)}>Fourth</button>
    </>
  )
}

export default App
