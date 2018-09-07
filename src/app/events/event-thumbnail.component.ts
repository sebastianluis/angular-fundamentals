import {Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './index'
@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink] = "['/events', event.id]" class="well hoverwell thumbnail">
    <h2>{{event?.name}}</h2>
    <div>Date: {{event?.date}}</div>
    <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
    <!-- [ngClass]="getStartTimeClass()" use to return css class --> 
    <span *ngSwitchCase = "'8:00 am'">(Early Start)</span>
    <span *ngSwitchCase = "'10:00 am'">(Late Start)</span>
    <span *ngSwitchDefault>(Normal Start)</span>
    </div> 
    <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
        <span>Location: {{event?.location?.address}}</span>       
        <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
    <div *ngIf="event?.onlineUrl">OnlineURL: {{event?.onlineUrl}}</div>
        <!--  <button class="btn btn-primary" (click)="handleClickMe()">Click Me!</button> -->
    </div>
    <!-- The ngIf will remove the element from DOM. If you want to hide it user [hidden= ="!event?.location"-->
    `,
    styles: [
        `.pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
        .thumbnail { min-height: 210px; }      
        `
    ]
})
export class EventThumbnailComponent {
    @Input() event:IEvent;
    @Output() eventClick = new EventEmitter();
    getStartTimeClass() {
        //method 1
        //const earlyStart = this.event && this.event.time == '8:00 am';
        //return {green: earlyStart, bold: earlyStart}

        //method 2
        // if(this.event && this.event.time == '8:00 am')
        //     return 'green bold';
        // else
        //     return "";

        //method 3
        if(this.event && this.event.time == '8:00 am')
        return ['green', 'bold'];
        else
        return [];
      
    }
    getStartTimeStyle(): any {
        if(this.event && this.event.time == '8:00 am')
        return {color: '#003300', 'font-weight': 'bold'};
        else
        return {};
    }
    // someProperty:any = "Some property";
    // handleClickMe() {
    //     //console.log("Clicked!")
    //     this.eventClick.emit(this.event.name);
    // }
    // logFoo(){
    //     console.log('Foo');
    // }
}