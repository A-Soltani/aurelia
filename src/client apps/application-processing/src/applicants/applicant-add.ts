import { inject, bindable } from 'aurelia-framework';
import { EventAggregator } from "aurelia-event-aggregator";
import { Router } from 'aurelia-router';
import { ValidationRules, ValidationControllerFactory, validationMessages } from 'aurelia-validation'

import { Applicant } from './shared/applicant-model';
import { ApplicantService } from './shared/applicant-service';


@inject(Router, EventAggregator, ApplicantService, ValidationControllerFactory)
export class ApplicantAdd {
  title: string
  controller: any
  @bindable applicant: Applicant

  constructor(private router: Router, private ea: EventAggregator, private applicantService: ApplicantService, ValidationControllerFactory) {
    this.controller = ValidationControllerFactory.createForCurrentScope();
  }

  attached() {
    this.title = "Add Applicant"
    this.applicant = new Applicant();
  }

  sendApplicant(): void {

    this.applicantService.addApplicant(this.applicant)
      .then(applicant => {
        this.router.navigateToRoute('applicants')
        // this._ea.publish(new ContactCreated(applicant));
      }).catch(err => console.log(err));
  }

  applicantChanged(newValue, oldValue): void {
    console.log(this.applicant);
    if (this.applicant) {
      console.log(this.applicant);
    }

  }


}
