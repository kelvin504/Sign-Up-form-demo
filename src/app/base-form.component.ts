import { FormGroup, FormControl, FormArray, AbstractControl } from '@angular/forms';


export class BaseFormComponent {

    form!: FormGroup;

    isControlValid(control: { errors: any; touched: any; } | undefined) {
        if (control === undefined) {
            return true;
        }
        if (control.errors && control.touched) {
            return true;
        }

        return false;
    }

    isFieldValid(fieldName: string, validation = '') {
        return this.isGroupedFieldValid(fieldName, '', validation);
    }

    isGroupedFieldValid(fieldName: string, formGroupName = '', validation = '') {
        let control = null as unknown as AbstractControl;

        if (formGroupName === '') {
            control = this.form.controls[fieldName];
        }
        else {
            const group = this.form.controls[formGroupName] as FormGroup;
            control = group.controls[fieldName];
        }

        if (control === undefined) {
            return true;
        }

        if (validation === '') {
            if (!control.valid) { // (control.errors && control.touched) {
                return true;
            }

            return false;
        }
        else {
            if (control.errors === null || control.errors === undefined) {
                return true;
            }

            switch (validation) {
                case 'required':
                    return (control.errors.required) ? true : false;

                case 'requiredIf':
                    return (control.errors.requiredIf) ? true : false;

                case 'requiredIfEnabled':
                    return (control.errors.requiredIfEnabled) ? true : false;

                case 'email':
                    return (control.errors.email) ? true : false;

                case 'match':
                    return (control.errors.match) ? true : false;

                case 'matchEmail':
                    return (control.errors.matchEmail) ? true : false;

                case 'strong':
                    return (control.errors.strong) ? true : false;

                case 'matchPassword':
                    return (control.errors.matchPassword) ? true : false;

                case 'number':
                    return (control.errors.number) ? true : false;

                case 'phoneNumber':
                    return (control.errors.phoneNumber) ? true : false;

                case 'pc4':
                    return (control.errors.pc4) ? true : false;

                case 'pc6':
                    return (control.errors.pc6) ? true : false;

                case 'iban':
                    return (control.errors.iban) ? true : false;

                case 'ean':
                    return (control.errors.ean) ? true : false;

                case 'btwNumber':
                    return (control.errors.btwNumber) ? true : false;

                case 'min':
                    return (control.errors.min) ? true : false;

                case 'max':
                    return (control.errors.max) ? true : false;

                case 'maxLength':
                    return (control.errors.maxLength) ? true : false;

                case 'lessThan':
                    return (control.errors.lessThan) ? true : false;

                case 'greaterThan':
                    return (control.errors.greaterThan) ? true : false;

                case 'greaterValidator':
                    return (control.errors.greaterValidator) ? true : false;

                case 'lessValidator':
                    return (control.errors.lessValidator) ? true : false;

                case 'rangeValidator':
                    return (control.errors.rangeValidator) ? true : false;
            }
        }

        return false;
    }

    isCategoryValid(fieldName: string, category: string) {
        const control = this.form.controls[fieldName];
        if (control === undefined) {
            return false;
        }

        if (control.value === null || control.value === '') {
            return false;
        }

        if (control.valid) {
            return true;
        }

        if (control.errors === null || control.errors === undefined) {
            return true;
        }

        switch (category) {
            case 'caps': {
                if (!control.errors.caps) {
                    return true;
                }
                break;
            }
            case 'small': {
                if (!control.errors.small) {
                    return true;
                }
                break;
            }
            case 'digit': {
                if (!control.errors.digit) {
                    return true;
                }
                break;
            }
            case 'special': {
                if (!control.errors.special) {
                    return true;
                }
                break;
            }
            case 'len': {
                if (!control.errors.len) {
                    return true;
                }
                break;
            }
            case 'len12': {
                if (!control.errors.len12) {
                    return true;
                }
                break;
            }
        }
        return false;
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof FormArray) {
                const formArray = control as FormArray;
                const formGroups = formArray.controls as FormGroup[];
                formGroups.forEach(fg => {
                    this.validateAllFormFields(fg);
                });
            }
            else if (control instanceof FormGroup) {
                this.validateAllFormFields(control);
            }
        });
    }

    resetForm() {
        this.form.reset();
    }
}