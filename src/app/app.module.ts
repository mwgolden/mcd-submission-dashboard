import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabulatorTableComponent } from './tabulator-table/tabulator-table.component';
import { SubmissionDetailViewComponent } from './submission-detail-view/submission-detail-view.component';
import { McdSubmissionComponent } from './mcd-submission/mcd-submission.component';
import { RxSubmissionComponent } from './rx-submission/rx-submission.component';
import { OhiSubmissionComponent } from './ohi-submission/ohi-submission.component';
import { PrvSubmissionComponent } from './prv-submission/prv-submission.component';

@NgModule({
  declarations: [
    AppComponent,
    TabulatorTableComponent,
    SubmissionDetailViewComponent,
    McdSubmissionComponent,
    RxSubmissionComponent,
    OhiSubmissionComponent,
    PrvSubmissionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
