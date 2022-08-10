import { useState } from "react";
import { QuantityIndicator } from "../QuantityIndicator";
import { Task } from "../Task";
import { List, ListContainer } from "./styles";
// import { Task } from "./Task";

interface TaskListProps { 
    tasks: {
        id: any;
        content: string;
        checked: boolean;
    
    }[];
    onTaskUpdate: (id: number) => void
    onTaskDelete: (id: number) => void

}

export function TaskList ({ tasks, onTaskUpdate, onTaskDelete }: TaskListProps) {
    const totalTasks = tasks.length;
    const tasksChecked = tasks.filter(task => task.checked).length;

    return (
        <ListContainer>
            <header>
                <div>
                    <p>Tarifas Criadas</p>
                    <QuantityIndicator total={totalTasks} />
                </div>
                <div>
                    <p>Concluídas</p>
                    <QuantityIndicator total={totalTasks} finished totalFinished={tasksChecked} />
                </div>
            </header>
            {
                    tasks.length > 0 ?
                    (    
                        <div>
                            { 
                                tasks.map(task => {
                                    return (
                                        <Task 
                                            key={task.id}
                                            id={task.id}
                                            content={task.content}
                                            checked={task.checked}
                                            onUpdate={onTaskUpdate}
                                            onDelete={onTaskDelete}
                                        />
                                    );
                                })
                            }
                        </div>
                    ) : (
                        <List>
                            <img 
                                src="/src/assets/clipboard.png"
                                alt="icon empty"
                            />
                            <p><strong>Você ainda não tem tarefas cadastradas</strong>
                            Crie tarefas e organizeseus itens a fazer</p>
                            
                        </List>
                    )
                }
        </ListContainer>
    )
}