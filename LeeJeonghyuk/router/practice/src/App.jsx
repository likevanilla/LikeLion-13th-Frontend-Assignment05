import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList"
import TodoDetail from "./components/TodoDetail"
import TimerPage from "./components/TimerPage";

export default function App() {
  return (
    <Router>
      <h1>Todo List</h1>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
        <Route path="/timer" element={<TimerPage />} />
      </Routes>
    </Router>
  );
}