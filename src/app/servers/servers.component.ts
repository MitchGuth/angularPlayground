import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
})

export class ServersComponent implements OnInit{
  allowNewServer = false;
  createServerStatus = "No server was created";
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    } , 2000)
  }

  ngOnInit() { }

  onCreateServer() {
    this.createServerStatus = "Server was created!";
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
