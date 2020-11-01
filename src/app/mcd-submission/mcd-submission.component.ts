import { Component, OnInit, Output } from '@angular/core';
import { SubmissionType } from '../model/submission-type.enum'

@Component({
  selector: 'app-mcd-submission',
  templateUrl: './mcd-submission.component.html',
  styleUrls: ['./mcd-submission.component.css']
})
export class McdSubmissionComponent implements OnInit {


  @Output() submissionType: SubmissionType

  constructor() {
    this.submissionType = SubmissionType.MCD

  }

  ngOnInit(): void {
  }

}
