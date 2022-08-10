import { Container, Form } from "./styles";

import { PlusCircle } from "phosphor-react";
import { InvalidEvent, useState } from "react";

import { useForm } from "react-hook-form";
import { TaskList } from "../../components/TaskList";

type TaskProps = {
  id: number
  content: string
  checked: boolean

}

type TaskFormProps = {
  task: string
}

export function Home () {
  const [tasks, setTasks] = useState<TaskProps[]>([
      { id: 1, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", checked: false },
      { id: 2, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", checked: false },
      { id: 3, content: "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.", checked: false },
  ]);

  const [task, setTask] = useState<string>("");

  const { register, handleSubmit } = useForm<TaskFormProps>();
  
  const handleSubmitCreateTask = (data: TaskFormProps) => {
      setTasks(state => {
        return [...state,
          {
            id: state.length + 1,
            content: data.task,
            checked: false
          }
        ]
      });

  }

  const checkTask = (taskId: number) => {
    const taskListUpdated = tasks.map(task => {
      if (task.id === taskId)
          task.checked = !task.checked;

      return task;

    });

    setTasks(taskListUpdated);

  }

  const deleteTask = (taskId: number) => {
    setTasks(tasks.filter(task => task.id !== taskId));

  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSubmitCreateTask)}>
        <input 
            {...register("task")}
            type={"text"}
            name="task"
            id="task"
            value={task}
            onChange={(event) => {
              event.target.setCustomValidity("");
              setTask(event.target.value);
            }}
            onInvalid={(event: InvalidEvent<HTMLInputElement>) => {
              event.target.setCustomValidity("Você não digitou nada.");

            }}
            placeholder="Adicione uma nova tarefa"
            required
          />
          <button type="submit">
            Criar
            <PlusCircle size={22} />
          </button>
      </Form>
      <TaskList tasks={tasks} onTaskUpdate={checkTask} onTaskDelete={deleteTask} />
    </Container>
  );
}