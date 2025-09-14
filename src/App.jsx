import Tasks from "./components/tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudando programação",
      description: "Estudar programação para ser um dev FullStack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudando inglês",
      description: "Estudar para melhorar meu inglês",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudando marketing",
      description: "Estudar para melhorar meu marketing",
      isCompleted: false,
    },
  ]);

  function onTaskClick(TaskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === TaskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />{" "}
      </div>
    </div>
  );
}

export default App;
