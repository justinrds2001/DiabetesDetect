import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/models/form.model';
import { PredictionModel } from 'src/app/models/prediction.model';
import { FormService } from 'src/app/services/form.service.ts.service';

@Component({
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  formModel: FormModel = new FormModel();
  prediction: PredictionModel = new PredictionModel();

  constructor(private router: Router, private formService: FormService) {}

  ngOnInit() {
    this.formModel = this.formService.getFormModel();

    this.formService.getPrediction(this.formModel).subscribe((prediction) => {
      this.prediction = prediction;
    });
  }
}
