import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import {ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './index'
@Component({ 
    template: `<div>
    <h1>Upcoming Angular Events</h1>
    <hr/> 
    <div class="row">
    <div class="col-md-5" *ngFor="let event of events">
    <event-thumbnail #thumbnail  [event]="event"></event-thumbnail> 
    <!--(eventClick) = "hanldeEventClick($event)" This is to handle events from child.
    (click) = "handleThumbnailClick(event.name)"
    -->
    </div>
    </div>
   <!-- <h3> {{thumbnail.someProperty}}</h3> -->
   <!-- <button class="btn btn-primary" (click)="thumbnail.logFoo()">Click me to log Foo</button> -->
    </div>`
})
export class EventsListComponent implements OnInit {
    events:IEvent[];
    constructor(private eventService: EventService,
               private toastrService: ToastrService,
               private router: ActivatedRoute) {
      
    }
    ngOnInit() {
       // this.eventService.getEvents().subscribe( (events) =>  { this.events = events });
       this.events = this.router.snapshot.data['events'];
    }
    // hanldeEventClick(data) {
    //     console.log("Received:", data);
    // }
    handleThumbnailClick(eventName) {
        this.toastrService.success(eventName);
    }
   
}