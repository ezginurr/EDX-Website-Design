import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderEditComponent } from './components/header/header-edit/header-edit.component';
import { ContentEditComponent } from './components/content/content-edit/content-edit.component';

import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SecondlayerEditComponent } from './components/content/secondlayer/secondlayer-edit/secondlayer-edit.component';
import {MatIconModule} from '@angular/material/icon';
import { ThirdlayerEditComponent } from './components/content/thirdlayer/thirdlayer-edit/thirdlayer-edit.component';
import { FourthlayerEditComponent } from './components/content/fourthlayer/fourthlayer-edit/fourthlayer-edit.component';
import { SubjectslayerEditComponent } from './components/content/subjectslayer/subjectslayer-edit/subjectslayer-edit.component';
import { FooterEditComponent } from './components/footer/footer-edit/footer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderEditComponent,
    ContentEditComponent,
    SecondlayerEditComponent,
    ThirdlayerEditComponent,
    FourthlayerEditComponent,
    SubjectslayerEditComponent,
    FooterEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
