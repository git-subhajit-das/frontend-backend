import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InputSection from "../components/InputSection";

const Home = () => {
  const [val, setVal] = useState("");
  const [todo, setTodo] = useState([]);

  const data = {
    title: val,
  };

  async function addTodo() {
    await axios.post("http://localhost:8001/todo/create/", data);
    getTodo();
    setVal("");
  }

  async function getTodo() {
    const todo = await axios.get("http://localhost:8001/todo/getAll");
    setTodo(todo.data.data);
  }

  useEffect(() => {
    getTodo();
  }, [todo]);

  return (
    <>
      <Header />
      <InputSection val={val} setVal={setVal} addTodo={addTodo}/>
      <Form todo={todo}/>
      <Footer />
    </>
  );
};

export default Home;
