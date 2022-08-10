import { CheckCircle, Circle, Trash } from "phosphor-react";
import { TaskContainer } from "./styles";

interface TaskProps {
    id: any;
    content: string;
    checked: boolean;
    onUpdate: (id: number) => void
    onDelete: (id: number) => void

}

export function Task ({ content, checked, id, onUpdate, onDelete }: TaskProps) {
    return (
        <TaskContainer>
            <div>
                {
                    checked ?
                    (
                        <CheckCircle size={25} weight="fill" className="checkInp" onClick={() => onUpdate(id)} />
                    ) : 
                    (
                        <Circle size={25} onClick={() => onUpdate(id)} />
                    )
                }
                <p className={checked ? "checked" : ""}>{ content }</p>
            </div>
            <button onClick={() => onDelete(id)}>
                {""}
                <Trash size={20} />
            </button>
        </TaskContainer>
    );

}