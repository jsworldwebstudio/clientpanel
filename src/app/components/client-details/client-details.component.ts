import { Component, OnInit } from '@angular/core';
import { Client } from '../../models/Client';
import { ClientService } from '../../services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {
  id: string;
  client: Client;
  hasBalance: boolean = false;
  showBalanceUpdateInput: boolean = false;

  constructor(
    private clientService: ClientService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    // Get id from url
    this.id = this.route.snapshot.params['id'];
    // Get client
    this.clientService.getClient(this.id).subscribe(client => {
      if(client.balance > 0){
        this.hasBalance = true;
      }
      this.client = client;
      //console.log(this.client);
    });
  }

  updateBalance(id: string){
    this.clientService.updateClient(id, this.client);
    this.flashMessagesService.show('Balance Updated', {
      cssClass:'alert-success', timeout: 4000
    });
    this.router.navigate(['/client/'+id]);
  }

  onDeleteClick(){
    if(confirm("Are you sure you want to delete this record?")){
      this.clientService.deleteClient(this.id);
      this.flashMessagesService.show('Client Deleted', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['/']);
    }
  }

}
