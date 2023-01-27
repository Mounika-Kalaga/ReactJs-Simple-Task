import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { dresses} from "./dresses";
import Dress from "./dress";

function DressList() {
  return (
    <>
      <h1>Myntra Dress Festival</h1>
      <section className="dresslist">
        {dresses.map((dress) => {
          return <Dress{...dress} key={dress.id} />;
        })}
      </section>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DressList />);
