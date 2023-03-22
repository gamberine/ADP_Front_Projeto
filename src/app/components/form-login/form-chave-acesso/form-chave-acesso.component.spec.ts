import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormChaveAcessoComponent } from './form-chave-acesso.component';

describe('FormChaveAcessoComponent', () => {
  let component: FormChaveAcessoComponent;
  let fixture: ComponentFixture<FormChaveAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormChaveAcessoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormChaveAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
