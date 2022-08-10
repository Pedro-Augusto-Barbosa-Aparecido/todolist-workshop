import { Indicator } from "./styles";

type QuantityIndicator = {
    total: any;
    finished?: boolean;
    totalFinished?: number;
}

export function QuantityIndicator ({ total, finished = false, totalFinished }: QuantityIndicator) {
    return (
        <Indicator>
            { 
            
                finished ? (!(totalFinished === 0) ? `${totalFinished} de ${total}` : totalFinished) : total

            }
        </Indicator>

    );

}