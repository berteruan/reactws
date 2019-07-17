import React, { useEffect } from "react";
import adonisWs from "@adonisjs/websocket-client";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    const ws = adonisWs("ws://192.168.1.14:3333");
    ws.connect();

    const chat = ws.subscribe("chat");

    chat.on("ready", () => {
      chat.emit("message", "Hello WebSocket");
    });

    chat.on("message", message => {
      console.log("Nova mensagem recebida do socket: ", message);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
