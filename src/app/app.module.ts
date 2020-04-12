import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { WorkplacesComponent } from './workplaces/workplaces.component';

import {TabViewModule} from 'primeng/tabview';
import {AccordionModule} from 'primeng/accordion';
import {ToolbarModule} from 'primeng/toolbar';
import {PanelModule} from 'primeng/panel';
import {SplitButtonModule} from 'primeng/splitbutton';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    WorkplacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule,
    AccordionModule,
    BrowserAnimationsModule,
    ToolbarModule,
    PanelModule,
    SplitButtonModule,
    CodeHighlighterModule,
    MenuModule
  ],
  providers: [],
  bootstrap: [WorkplacesComponent]
})
export class AppModule { }
