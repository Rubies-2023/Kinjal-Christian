import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timegrid from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction"
import { useEffect, useState } from "react";
import DragEvent from "../DragEvent";
import { useNavigate } from "react-router-dom";


function CalendarContents () {

    const [events, setEvents] = useState([]);
    useEffect (() => {
        fetchApiData();
    },[]);

    const navigate = useNavigate();

    const fetchApiData = async (url) => {
        try {
            const res = await fetch(
                "https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/user/63e0e1a194a8e268bd43551e/time-entries",
                {
                    headers: {
                        "X-Api-Key": "ZDg2NTY4ZTctMmM0NC00ZWZiLWI0MTMtNTJlNTg3YWExNDBl",
                    },
                }
            );
            const data = await res.json();
            console.log(data);
            const dataFormat = data.map((entry)=> ({
                id: entry.id,
                title: entry.description,
                start: entry.timeInterval.start,
                end: entry.timeInterval.end,
                projectId: entry.projectId,
                taskId: entry.taskId,

            }));
            console.log(dataFormat);
            setEvents(dataFormat);
        }catch (error){
            console.log(error);
        }

        
    };

    const handleClickEvent = (info) => {

        navigate("./details-redirect", {state: {
                title: info.event.title,
                projectId: info.event.extendedProps.projectId,
                taskId: info.event.extendedProps.taskId,
                start: info.event.start.toLocaleString(),
                end: info.event.end.toLocaleString(),
        }})
   }    


        return (
            <FullCalendar
                plugins={[timegrid, dayGridPlugin, interactionPlugin, listPlugin]}
                initialView='timeGridWeek'
                weekends={true}
                hiddenDays= {[0]}
                slotDuration='0:15:00'
                // slotMinTime={'00:00:00'}
                // slotMaxTime={'22:00:00'}
                events={events}
                headerToolbar={{
                    start: 'prev,next today',
                    center: 'title',
                    end: 'dayGridMonth, timeGridWeek, timeGridDay, listMonth',
                }}
                editable= {true}
                eventChange= {DragEvent}
                dragRevertDuration= {0} 
                eventClick={handleClickEvent} 
             />
                     
        )
};

export default CalendarContents; 