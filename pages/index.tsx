import { useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showText, setShowText] = useState(false);
  return (
    <div className={styles.main}>
      <h1>Home Page</h1>
      <button>Click Me</button>
      <div>
        <label htmlFor="randomText">Enter Random Text: </label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Enter Specific Text: </label>
        <input id="specificText" />
      </div>
      <div>
        <input placeholder="Search..." />
      </div>
      <div>
        <input value="AUDI" />
      </div>
      <div>
        <button onClick={() => setShowText(!showText)}>Show Text</button>
        {showText && "This is the text"}
      </div>
    </div>
  );
}
