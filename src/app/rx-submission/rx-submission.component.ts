import { Component, OnInit, Output } from '@angular/core';
import { SubmissionType } from '../model/submission-type.enum'

@Component({
  selector: 'app-rx-submission',
  templateUrl: './rx-submission.component.html',
  styleUrls: ['./rx-submission.component.css']
})
export class RxSubmissionComponent implements OnInit {
  @Output() submissionType: SubmissionType
  constructor() {
    this.submissionType = SubmissionType.RX
  }

  ngOnInit(): void {
  }

}
