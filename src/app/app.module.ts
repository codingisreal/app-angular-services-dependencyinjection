import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ServerList } from "./Components/app.serverlist.component";
import { NewServer } from "./Components/app.newserver.component";
@NgModule({
  declarations: [AppComponent, ServerList, NewServer],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
