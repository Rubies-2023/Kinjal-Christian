import { Component,OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'calendar';

  Events: any = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    editable: true,
    droppable:true,
    headerToolbar: { 
      left: 'prev,next today',
      center: 'title',
      right:'dayGridMonth, timeGridWeek, timeGridDay, listMonth',
    },
    events:this.Events,

    eventChange: this.handleEventChange.bind(this),
  }
  constructor (private http:HttpClient) {}

  ngOnInit(){
    this.fetch();
  }

  private fetch() {
    this.http
      .get('https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/user/63e0e1a194a8e268bd43551e/time-entries?page-size=5000',
      {
        headers: {
          "X-Api-Key": "ZDg2NTY4ZTctMmM0NC00ZWZiLWI0MTMtNTJlNTg3YWExNDBl",
        }
      }).subscribe((data) => {
        console.log(data)
        let dummy: any=[];
        this.Events=data;
        console.log(dummy)
        for(let i=0; i<this.Events.length;i++){
          dummy.push({
            id:this.Events[i].id,
            title: this.Events[i].description,
            start: this.Events[i].timeInterval.start,
            end: this.Events[i].timeInterval.end,
            projectId: this.Events[i].projectId,
            taskId: this.Events[i].taskId,

          });
        }
        this.Events=dummy;
   
      });
    }

    async handleEventChange(info: any) {
      const { event } = info;
      console.log(info);
      const response = await fetch(`https://api.clockify.me/api/v1/workspaces/5e0ddcf5579d860ff456dc3b/time-entries/${event.id}`,
      {
        method:'PUT',
        headers: {
          'X-Api-Key': 'ZDg2NTY4ZTctMmM0NC00ZWZiLWI0MTMtNTJlNTg3YWExNDBl',
          'Content-Type': 'application/json'
        },

        body: JSON.stringify({
          id:event.id,
          start: event.start.toISOString(),
          end: event.end.toISOString(),
          description: event.title,
          projectId:event.extendedProps.projectId,
          taskId:event.extendedProps.taskId,
          
      }),
          
      });
      const data =  await response.json();
    }

}
