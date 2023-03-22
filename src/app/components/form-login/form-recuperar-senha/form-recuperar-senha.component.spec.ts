import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecuperarSenhaComponent } from './form-recuperar-senha.component';

describe('FormRecuperarSenhaComponent', () => {
  let component: FormRecuperarSenhaComponent;
  let fixture: ComponentFixture<FormRecuperarSenhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRecuperarSenhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecuperarSenhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
