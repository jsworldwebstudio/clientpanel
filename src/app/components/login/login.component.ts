import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Registrant } from '../../models/Registrant';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  registrant: Registrant = {
    email:'',
    password:''
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {}
  
  onSubmit({value, valid}: {value: Registrant, valid: boolean}){
    this.authService.login(value.email, value.password)
      .then((res) => {
        this.flashMessagesService.show('Login Successful', {
          cssClass:'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {
          cssClass:'alert-danger', timeout: 4000
        });
        this.router.navigate(['/login']);
      })
  }

}
