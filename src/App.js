import './App.css';

function App() {
  // let curDate = new Date(2023, 3 , 13 , 20); 
  // 2023 -> year 
  // 3    -> month 
  // 13   -> date 
  // 20   -> hrs 

  let curDate = new Date();
  curDate = curDate.getHours();

  let greeting = "";
  const cssStyle= {}

  if(curDate >= 1 && curDate < 12)
  {
    greeting = "Good Morning"
    cssStyle.color = "Green"
  }
  else if( curDate >= 12 && curDate < 19)
  {
    greeting = "Good Afternoon"
    cssStyle.color = "Orange"
  }
  else
  {
    greeting = "Good Night"
    cssStyle.color = "Black"
  }


  return (
    <div>
 
 <div className='rounded'>
 <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
 </div>
 

    </div>
  );
}

export default App;
