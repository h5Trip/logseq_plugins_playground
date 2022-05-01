import React, { useRef } from "react";
import { useAppVisible } from "./utils";
import "./app.scss";

function App() {
  const innerRef = useRef<HTMLDivElement>(null);
  const visible = useAppVisible();
  if (visible) {
    return (
      <main
        className="app"
        onClick={(e) => {
          if (!innerRef.current?.contains(e.target as any)) {
            window.logseq.hideMainUI();
          }
        }}
      ><div className="app-wrapper">
          <div className="app-list">
            <div ref={innerRef} className="button">
              test1
            </div>
          </div>
        </div>
      </main>
    );
  }
  return null;
}

export default App;