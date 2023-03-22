import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConfirmacaoContaComponent } from './form-confirmacao-conta.component';

describe('FormConfirmacaoContaComponent', () => {
  let component: FormConfirmacaoContaComponent;
  let fixture: ComponentFixture<FormConfirmacaoContaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConfirmacaoContaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConfirmacaoContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
