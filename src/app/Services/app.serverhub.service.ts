import { ServerD } from "../Model/app.server.model";
import { Injectable } from "@angular/core";

export class ServerHub {
  servers: ServerD[] = [];
  server: ServerD;
  noServerNotify: string = "No servers to Show";
  constructor() {
    //console.log(this.servers.length)
  }

  addServer(serverName: string, validity: number) {
    this.server = new ServerD();
    this.server.name = serverName;
    this.server.validity = validity;
    this.servers.push(this.server);
  }
}
