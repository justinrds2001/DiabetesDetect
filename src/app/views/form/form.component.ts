import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FormModel } from 'src/app/models/form.model';
import { FormService } from 'src/app/services/form.service.ts.service';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  formModel: FormModel = new FormModel();

  constructor(private router: Router, private formService: FormService) {}

  async onSubmit(form: NgForm) {
    const formModel: FormModel = {
      gender_encoded: form.value.gender_encoded,
      age: form.value.age,
      hypertension: form.value.hypertension,
      heart_disease: form.value.heart_disease,
      smoking_history_encoded: form.value.smoking_history_encoded,
      bmi: form.value.bmi,
      HbA1c_level: form.value.HbA1c_level,
      blood_glucose_level: form.value.blood_glucose_level,
    };

    // set form model
    this.formService.setFormModel(formModel);
    // navigate to results page
    await this.router.navigate(['/result']);
  }
}
