import { Component, Injectable } from "@angular/core";
import { ServerHub } from "../Services/app.serverhub.service";

@Injectable({
  providedIn: "root"
})
@Component({
  selector: "app-server-list",
  templateUrl: "./app.serverlist.component.html"
})
export class ServerList {
  constructor(private serverHub: ServerHub) {}
}
