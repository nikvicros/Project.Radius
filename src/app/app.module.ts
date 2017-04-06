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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
