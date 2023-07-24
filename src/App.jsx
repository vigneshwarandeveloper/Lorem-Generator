import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";

const App = () => {
  const [count,setcount]=useState(0);
  const [text,settext]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count)
    settext(data.slice(0,amount));
  }

  return <section className="section-center">
  <h4>Lorem Ipsum Generator</h4>
  <form className="lorem-form" onSubmit={handleSubmit}>
    <label htmlfor="amount" >paragraph:</label>
    <input 
      name="amount"
      type="number"
      id="amount"
      min="0"
      max="8"
      step="1"
      value={count}
      onChange={(e)=>setcount(e.target.value)}
    />
    <button type="submit" className="btn">Generate</button>
  </form>
  <article className="lorem-text">
    {text.map((para)=>{
      return (
        <p key={nanoid()}>{para}</p>
        )
    })}
  </article>
  </section>;
};
export default App;
