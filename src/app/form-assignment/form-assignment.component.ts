import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { CustomValidators } from '../custom-validators';

@Component({
  selector: 'form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.scss'],
})
export class FormAssignmentComponent implements OnInit {
  projectForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        CustomValidators.invalidProjectName,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      projectStatus: new FormControl('critical'),
    });
  }

  asyncValidProjectName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'ProjectTest') {
          resolve({ forbidden: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

  onSaveProject() {
    console.log(this.projectForm.value);
  }
}
