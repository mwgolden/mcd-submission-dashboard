import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { McdSubmissionComponent } from './mcd-submission/mcd-submission.component'
import { RxSubmissionComponent } from './rx-submission/rx-submission.component'
import { OhiSubmissionComponent } from './ohi-submission/ohi-submission.component'
import { PrvSubmissionComponent } from './prv-submission/prv-submission.component'
const routes: Routes = [
  {path: '', component: McdSubmissionComponent },
  {path: 'MCD', component: McdSubmissionComponent },
  {path: 'RX', component: RxSubmissionComponent },
  {path: 'PRV', component: PrvSubmissionComponent },
  {path: 'OHI', component: OhiSubmissionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
