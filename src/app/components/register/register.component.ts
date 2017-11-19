import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Registrant } from '../../models/Registrant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  
  onSubmitX({value, valid}: {value: Registrant, valid: boolean}){
    console.log(value, valid);
  }

  onSubmit({value, valid}: {value: Registrant, valid: boolean}){
    this.authService.register(value.email, value.password)
      .then((res) => {
        this.flashMessagesService.show('New User Registration Successful', {
          cssClass:'alert-success', timeout: 4000
        });
        this.router.navigate(['/']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {
          cssClass:'alert-danger', timeout: 4000
        });
        this.router.navigate(['/register']);
      })
  }

}
