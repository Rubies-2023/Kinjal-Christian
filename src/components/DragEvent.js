const DragEvent = async(arg) => {
    const{event} = arg;
    const response = await fetch (`https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/time-entries/${event.id}`,
    {
        method: 'PUT',
        headers: {
            'X-Api-Key' : 'ZDg2NTY4ZTctMmM0NC00ZWZiLWI0MTMtNTJlNTg3YWExNDBl',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            id: event.id,
            start: event.start.toISOString(),
            end: event.end.toISOString(),
            description: event.title,
            projectId: event.extendedProps.projectId,
            taskId: event.extendedProps.taskId,
        }),

    });
    const data = await response.json();
 
//console.log(event);
};

export default DragEvent;