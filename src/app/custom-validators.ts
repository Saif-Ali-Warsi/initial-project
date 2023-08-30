import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


FormControl;

export class CustomValidators {
  static invalidProjectName(control: FormControl): { [s: string]: boolean } {
    if ((control.value === 'Test', 'test')) {
      return { invalidProjectName: true };
    }
    return null as any;
  }
  


}
