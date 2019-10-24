import { Server } from "../Model/app.server.model";
import { Injectable } from "@angular/core";


export class ServerHub{
  servers: Server[] = [];
  const noServerNotify:string = "No servers to Show";
  constructor(){
    
  }
}
