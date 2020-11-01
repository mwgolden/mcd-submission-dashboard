import { Component, OnInit, Output } from '@angular/core';
import { SubmissionType } from '../model/submission-type.enum'

@Component({
  selector: 'app-ohi-submission',
  templateUrl: './ohi-submission.component.html',
  styleUrls: ['./ohi-submission.component.css']
})
export class OhiSubmissionComponent implements OnInit {
  @Output() submissionType: SubmissionType
  constructor() {
    this.submissionType = SubmissionType.OHI
  }

  ngOnInit(): void {
  }

}
