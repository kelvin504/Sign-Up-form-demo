import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFormComponent } from './sign-up-form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DemoApiService} from '../service/demo-api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';

describe('SignUpFormComponent', () => {
  let component: SignUpFormComponent;
  let fixture: ComponentFixture<SignUpFormComponent>;
  const twainService = jasmine.createSpyObj('Mockdata', ['mock@mocl.nl']);
  // Make the spy return a synchronous Observable with the test data
  //getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [ SignUpFormComponent ],
      providers: [ { provide: DemoApiService, useValue: twainService } ],
    })
    .compileComponents();
  });


  it('form should contain Capital letters check confirmation', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Capital letters (A to Z)');
  });

  it('form should contain Lowercase check confirmation', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Lowercase (a to z)');
  });

  it('form should contain Numbers check confirmation', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Numbers (0 to 9)');
  });

  it('form should contain Special characters check confirmation', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Special characters (as, @, $, !, %, *, ?, &, +)');
  });

  it('form should contain Minimal characters check confirmation', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div')?.textContent).toContain('Minimal 12 characters');
  });


  it('form should contain input Lastname', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')?.textContent).toContain('Lastname');
  });

  it('form should contain input Firstname', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')?.textContent).toContain('Firstname');
  });

  it('form should contain input Password', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')?.textContent).toContain('Password');
  });

  it('form should contain input Confirm Password', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('form')?.textContent).toContain('Confirm password');
  });

  it('form should contain title text', () => {
    const fixture = TestBed.createComponent(SignUpFormComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')?.textContent).toContain('Registration');
  });

});
