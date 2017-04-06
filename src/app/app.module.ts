import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivityComponent } from './components/activity/activity.component';
import { MessagesComponent } from './components/messages/messages.component';
import { PeopleComponent } from './components/people/people.component';
import { PathsComponent } from './components/paths/paths.component';
import { PipelineComponent } from './components/pipeline/pipeline.component';
import { AccountComponent } from './components/account/account.component';
import { SettingsComponent } from './components/account/settings.component';
import { TagsComponent } from './components/tags/tags.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityComponent,
    MessagesComponent,
    PeopleComponent,
    PathsComponent,
    PipelineComponent,
    AccountComponent,
    SettingsComponent,
    TagsComponent,
    HeaderComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFxtFYTlNWwFPvBd5E3PpaD0EmOT4lE4M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
