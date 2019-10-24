import { Component, Injectable } from "@angular/core";
import { ServerHub } from "../Services/app.serverhub.service";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: "app-new-server",
  templateUrl: "./app.newserver.component.html"
})
export class NewServer {
  serverName: string;
  serverValidity: number;

  constructor(private serverHub: ServerHub) {}

  addServer() {
    this.serverHub.addServer(this.serverName, this.serverValidity);
  }
}
