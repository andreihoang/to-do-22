export const API_URL = 'https://polar-falls-56503.herokuapp.com';

export const httpFillHeart = async (id, taskid, isheartfill) => {

    const task = await fetch(`${API_URL}/myday/${id}/${taskid}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                isHeartFill: isheartfill,
            })
            })
                .then(response => response.json())
                .catch(console.log)
            return task
} 

export const httpDueDate = async(id, taskid, dueDate) => {
    const task = await fetch(`${API_URL}/myday/${id}`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskId: taskid,
                dueDate: dueDate.toDateString(),
            })
        })
            .then(response => response.json())
            .catch(console.log)
        return task;
    }

export const httpMarkComplete = async (id, taskid, iscomplete) => {
    const task = await fetch(`${API_URL}/myday/${id}`, {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                taskId: taskid,
                isComplete: iscomplete,
            })
        })
            .then(response => response.json())
            .catch(console.log)
         return task;
}

export const httpDeleteTask = async (id, taskid) => {
    const task = await fetch(`${API_URL}/myday/${id}/${taskid}`, {
            method: 'delete',
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => response.json())
            .catch(console.log)
                   
}