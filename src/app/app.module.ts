import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

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
import { LoginComponent } from './services/login/login.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapsComponent } from './components/maps/maps.component';
import { ActivityFeedComponent } from './components/activity-feed/activity-feed.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MessageListComponent } from './components/messages/message-list.component';
import { ChartsComponent } from './components/charts/charts.component';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'paths', component: PathsComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'login', component: LoginComponent }
];

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
    DashboardComponent,
    MapsComponent,
    ActivityFeedComponent,
    MainUserComponent,
    SideNavComponent,
    MessageListComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFxtFYTlNWwFPvBd5E3PpaD0EmOT4lE4M'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
