import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Task = {
  id: string;
  title: string;
  startTimestamp: number;
  endTimestamp: number;
};

type Store = {
  tasks: Task[];
  addTask: (task: Task) => void;
};

export const useTaskStore = create<Store>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task) =>
        set((state) => ({ ...state, tasks: [...state.tasks, task] })),
    }),
    {
      name: "task-storage",
    }
  )
);
