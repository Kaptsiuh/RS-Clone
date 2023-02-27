// import { Task } from './../types/index';
import create from "zustand";
import { generateId } from "./generateID";

interface Task {
  id: string;
  title: string;
  createAt: number;
}

interface ToDoTimer {
  tasks: Task[];
  createTimer: (title: string) => void;
  updateTimer: (id: string, title: string) => void;
  removeTimer: (id: string) => void;
}

export const useToDoTimer = create<ToDoTimer>((set, get) => ({
  tasks: [{id: '1111', title: 'dwdwd', createAt: 22333},],
  createTimer: (title) => {
    const { tasks } = get();
    const newTask = {
      id: generateId(),
      title,
      createAt: Date.now(), 
    }
    set({
      tasks: [newTask].concat(tasks)
    })
  },
  updateTimer: (id: string, title: string) => {
    const {tasks} = get();
    set({
      tasks: tasks.map((task) => ({
        ...task,
        title: task.id === id ? title : task.title,
      }))
    })
  },
  removeTimer: (id: string) => {
    const {tasks} = get();
    set({
      tasks: tasks.filter((task) => task.id !== id 
      )
    })
  },
}));