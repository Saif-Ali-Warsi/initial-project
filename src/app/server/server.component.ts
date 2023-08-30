import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  createNewServer = 'No server created!';
  serverName = '';
  sampleText = '';
  serverStatus: string = 'offline';
  detailStatus: boolean = false;
  log: number[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  createServer() {
    this.createNewServer =
      'Server Created Successfully! with Server Name: ' + this.serverName;
  }

  ngOnInit(): void {}

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStaus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  checkDetails() {
    this.detailStatus = !this.detailStatus;
    this.log.push(this.log.length + 1);
  }
}
