import { useRef, useState } from "react";
import "./App.css";
import { spring, useVariants } from "./config";
import { motion } from "framer-motion";

function App() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const ref = useRef(null);

  const variants = useVariants(ref);

  function buyEnter() {
    setCursorText("✅");
    setCursorVariant("buy");
  }

  function buyLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function sellEnter() {
    setCursorText("❌");
    setCursorVariant("sell");
  }

  function sellLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  return (
    <div className="App">
      <div>
        <div className="container" ref={ref}>
          <motion.div
            variants={variants}
            className="circle"
            animate={cursorVariant}
            transition={spring}
          >
            <span className="cursorText">{cursorText}</span>
          </motion.div>
          <div>
            <span
              onMouseEnter={buyEnter}
              onMouseLeave={buyLeave}
              className="heading buy"
            >
              Want to Buy ?
            </span>
          </div>
          <div>
            <span
              className="heading sell"
              onMouseEnter={sellEnter}
              onMouseLeave={sellLeave}
            >
              Want to Sell?
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
