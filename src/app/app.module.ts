import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { LoginComponent } from './components/login.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainUserComponent } from './components/main-user/main-user.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { MessageListComponent } from './components/messages/message-list.component';
import { ProfileComponent } from './components/account/profile/profile.component';
import { PeopleProfileComponent } from './components/people/profile/people-profile.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';

import {PopupModule} from 'ng2-opd-popup';

// Dev Imports !!! REMOVE AFTER TESTING!!!!
import { ContactDetailComponent } from './components/sandbox/contact-detail.component'; 
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';



const appRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'paths', component: PathsComponent },
  { path: 'pipeline', component: PipelineComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: 'login', component: LoginComponent },
  { path: 'people/profile', component: PeopleProfileComponent }
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
    MainUserComponent,
    SideNavComponent,
    MessageListComponent,
    ProfileComponent,
    PeopleProfileComponent,
    SandboxComponent,
    ContactDetailComponent // DEV IMPORT
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    PopupModule.forRoot(), // DEV IMPORT 
    RouterModule.forRoot(appRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
