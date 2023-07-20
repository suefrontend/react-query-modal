import { useState } from "react";
import styles from "../styles/Home.module.css";
import { UserProfile } from "@/components/UserProfile";
import UserList from "@/components/UserList";
import LoginForm from "@/components/LoginForm";

export default function Home() {
  const [showText, setShowText] = useState(false);
  const handleOnChange = () => {};
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
        <input value="AUDI" onChange={handleOnChange} />
      </div>
      <div>
        <button
          onClick={() => {
            setTimeout(() => {
              setShowText(!showText);
            }, 1100);
          }}
        >
          Show Text
        </button>
        {showText && "This is the text"}
      </div>
      <UserProfile
        displayName="Kayak Kayak Kayak Kayak Kayak Kayak"
        userName="kayano"
        email="kayano@test.com"
        isEmailVerified={false}
      />
      <UserList />
      <LoginForm />
    </div>
  );
}
