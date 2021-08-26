import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConfirmationComponent } from './sign-up-confirmation.component';

describe('SignUpConfirmationComponent', () => {
  let component: SignUpConfirmationComponent;
  let fixture: ComponentFixture<SignUpConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('page should contain confirmation text', () => {
    const fixture = TestBed.createComponent(SignUpConfirmationComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Thanks for signing up!');
  });

});
