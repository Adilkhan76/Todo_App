import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './service/user.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
