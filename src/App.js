import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <ArticleCard
        image="https://coding.images/react.jpg"
        title="What is React all about?"
        description="React is all about one-way data flow, the Virtual DOM, and transpiling JSX."
      />
      <ArticleCard
        image="https://animal.images/kid.jpg"
        title="A lovely kid"
        description="In fact, a kid is also the name of a baby goat!"
      />
      <ArticleCard
        image="https://another.nonexistent/image.jpg"
        title="On placeholder image URLs"
        description="So yeah, you won't be able to look these images up. They're placeholders"
      />
    </div>
  );
}

export default App;
