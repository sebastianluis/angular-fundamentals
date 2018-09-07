import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
template :`<div>
<h1>New Event</h1>
<hr>
<div class="col-md-6">
<h3>Create Event will go from here</h3>
<br>
<br>
<button type="submit" class="btn btn-primary">Submit</button>
<button type="button" class="btn btn-default" (click)="Cancel()">Cancel</button>
</div>
</div>
`
})
export class CreateEventComponent {
isDirty: boolean = false;
constructor(private router: Router){

}
Cancel(){
    this.router.navigate(['/events']);
}
}