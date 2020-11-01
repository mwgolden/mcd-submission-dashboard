import { Component, OnInit, Output } from '@angular/core';
import { SubmissionType } from '../model/submission-type.enum'

@Component({
  selector: 'app-prv-submission',
  templateUrl: './prv-submission.component.html',
  styleUrls: ['./prv-submission.component.css']
})
export class PrvSubmissionComponent implements OnInit {

  @Output() submissionType: SubmissionType
  constructor() {
    this.submissionType = SubmissionType.PRV
   }

  ngOnInit(): void {
  }

}
