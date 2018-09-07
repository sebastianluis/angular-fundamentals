import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router'
@Component({
templateUrl: './login.component.html',
styles: [`
em {float: right; padding-left: 10px; color: #E05C65}
`
]
})
export class LoginComponent implements OnInit{
    userName
    password
    mouseOverLogin
    constructor(private authService: AuthService, private router: Router) {

    }
    login(loginFormValues) {
        //console.log(loginFormValues);
        this.authService.loginUser(loginFormValues.userName, loginFormValues.password);
        this.router.navigate(['/events']);
    }
    cancel(){
        this.router.navigate(['/events']);
    }
    ngOnInit() {
        
    }
}