import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { SubmissionType } from '../model/submission-type.enum'
import { McdSubmissionService } from '../services/mcd-submission.service'
import {Observable} from 'rxjs';

@Component({
  selector: 'app-submission-detail-view',
  templateUrl: './submission-detail-view.component.html',
  styleUrls: ['./submission-detail-view.component.css']
})
export class SubmissionDetailViewComponent implements OnInit {

  @Input() submissionType: SubmissionType

  fileType: string
  details$: Observable<any>

  submissionDetails = {
    'headers':[],
    'data':[]
  }
  constructor(private mcdSubmissionService: McdSubmissionService) {

  }

  ngOnInit(): void {
    this.fileType = SubmissionType[this.submissionType]
    this.details$ = this.mcdSubmissionService.loadFileDetails(this.fileType)
    this.loadDetails()
  }

  loadDetails(){
    this.details$.subscribe(
      details => {
        this.submissionDetails.headers = Object.keys(details[0])
        .map(key => {
          return {'title':key, 'field':key}
        }),
        this.submissionDetails.data = details
      }
    )
  }
}
