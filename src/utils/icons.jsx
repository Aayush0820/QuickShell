import { backlog, cancelled, done, highpriority, inprogress, lowpriority, medpriority, nopriority, todo, urgentgrey, urgentred } from '../assets';


export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src={nopriority} alt="No priority" width={14} height={14} />
        case "Low": return <img src={lowpriority} alt="Low priority" width={14} height={14} />
        case "Medium": return <img src={medpriority} alt="Medium priority" width={14} height={14} />
        case "High": return <img src={highpriority} alt="High priority" width={14} height={14} />
        case "Urgent": return <img src={urgentred} alt="Urgent" width={14} height={14} />
        default: return <img src={urgentgrey} alt="NA" width={14} height={14} />
    }
}

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src={backlog} alt="Backlog" width={14} height={14} />
        case "Todo": return <img src={todo} alt="Todo" width={14} height={14} />
        case "In progress": return <img src={inprogress} alt="In Progress" width={14} height={14} />
        case "Done": return <img src={done} alt="Done" width={14} height={14} />
        case "Canceled": return <img src={cancelled} alt="Cancelled" width={14} height={14} />
        default: return <img src={cancelled} alt="NA" width={14} height={14} />
    }
}