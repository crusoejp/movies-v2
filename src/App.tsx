import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import MovieList from "./components/MovieList";

function App() {
  return (
    <div className="App">
      <ChakraProvider>
        <MovieList />
      </ChakraProvider>
    </div>
  );
}

export default App;
