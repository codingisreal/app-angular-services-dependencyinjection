import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ServerHub } from "./Services/app.serverhub.service";
import { ServerD } from "./Model/app.server.model";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ServerList } from "./Components/app.serverlist.component";
import { NewServer } from "./Components/app.newserver.component";

@NgModule({
  declarations: [AppComponent, ServerList, NewServer],
  imports: [BrowserModule, FormsModule],
  providers: [ServerHub, ServerList, ServerD],
  bootstrap: [AppComponent]
})
export class AppModule {}
