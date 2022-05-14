import React, { useEffect, useRef } from "react";
import { useAppVisible } from "./utils";
import { downloadImageToSave } from "../protos/funcs_test";
import  "./app.scss";
console.log("init");
downloadImageToSave();
function App() {
  const innerRef = useRef<HTMLDivElement>(null);
  const visible = useAppVisible();
  useEffect(()=>{
    // console.log("init"); 
    // downloadImageToSave();
    // const client = new FuncsClient("https://127.0.0.1:8000");
    // const req = new Funcs.DownloadImageRequest();
    // req.setSavepath("setSavepath");
    // req.setUrlsList(["url1","url2"]);
    // client.downloadImageToSave(req, (err, rep) => {
    //   console.log(rep);
    // });
  },[]);
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
            <div ref={innerRef} className="button" onClick={()=>{
              console.log("hhh");
            }}>
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