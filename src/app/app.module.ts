import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ResultPageComponent } from './vuln1-page/result-page.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Vuln2PageComponent } from './vuln2-page/vuln2-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { Vunl3PageComponent } from './vunl3-page/vunl3-page.component';
import { Vunl4PageComponent } from './vunl4-page/vunl4-page.component';
import {NgbProgressbarModule} from '@ng-bootstrap/ng-bootstrap';
import { ChallengeCompletedDialogComponent } from './challenge-completed-dialog/challenge-completed-dialog.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ResultPageComponent,
    Vuln2PageComponent,
    Vunl3PageComponent,
    Vunl4PageComponent,
    ChallengeCompletedDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, NgxSpinnerModule, BrowserAnimationsModule,
    MatProgressBarModule, NgbProgressbarModule, MatDialogModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  entryComponents:[ChallengeCompletedDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
