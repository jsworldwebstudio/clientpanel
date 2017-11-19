import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { FlashMessagesService } from 'angular2-flash-messages';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private flashMessagesService: FlashMessagesService
  ){}

  canActivate(): Observable<boolean>{
    return this.afAuth.authState.map(auth => {
      if(!auth){
        this.flashMessagesService.show('User must be logged in to view intended content', {
          cssClass:'alert-danger', timeout: 4000
        });
        this.router.navigate(['/login']);
        return false;
      } else {
        return true;
      }
    });
  }

}
