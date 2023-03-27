import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusArquivosComponent } from './meus-arquivos.component';

describe('MeusArquivosComponent', () => {
  let component: MeusArquivosComponent;
  let fixture: ComponentFixture<MeusArquivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeusArquivosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeusArquivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
