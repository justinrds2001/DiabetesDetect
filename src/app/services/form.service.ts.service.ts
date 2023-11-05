import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormModel } from '../models/form.model';
import { PredictionModel } from '../models/prediction.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  private baseUrl: String = 'https://hcaidapi-production.up.railway.app/';
  private formModel: FormModel = new FormModel();

  constructor(private httpClient: HttpClient) {}

  getPrediction(input: FormModel): Observable<PredictionModel> {
    console.log('get prediction called');
    console.log('input:', input);
    return this.httpClient.post<PredictionModel>(
      `${this.baseUrl}predictgood`,
      input
    );
  }

  setFormModel(input: FormModel) {
    this.formModel = input;
  }

  getFormModel(): FormModel {
    return this.formModel;
  }
}
