import { Component } from '@angular/core';
import { SubmissionType } from './model/submission-type.enum'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submissionTypeSelected: SubmissionType;

  onSubmissionSelected($event){
    console.log($event)
  }
}
