import { ServerD } from "../Model/app.server.model";
import { Injectable, OnInit, OnDestroy } from "@angular/core";

export class ServerHub implements OnInit {
  servers: ServerD[] = [];
  server: ServerD;
  noServerNotify: string = "No servers to Show";
  timer = setInterval(() => {
    this.clearDead();
  }, 1000);
  constructor() {
    //console.log(this.servers.length)
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.timer = null;
  }

  addServer(serverName: string, validity: number) {
    this.server = new ServerD();
    this.server.name = serverName;
    this.server.validity = validity;
    this.servers.push(this.server);
  }

  clearDead() {
    this.servers.forEach(function(value, index) {
      console.log(index);
      if (value.validity > 0) {
        value.validity = value.validity - 1;
      }
      //this.servers = this.servers.splice(index, 1);
    });
  }
}
