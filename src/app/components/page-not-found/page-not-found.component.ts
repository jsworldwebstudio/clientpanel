import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit, AfterViewInit {

  constructor(
    private flashMessagesService: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.flashMessagesService.grayOut(true);
    this.flashMessagesService.show("You've accessed a page not found on this site. You will be re-directed to the Login page shortly.", {
      cssClass:'alert-danger', timeout: 4000
    });
    this.flashMessagesService.grayOut(false);
    this.router.navigate(['/login']);
}

}
