import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSolicitudesComponent } from './new-solicitudes.component';

describe('NewSolicitudesComponent', () => {
  let component: NewSolicitudesComponent;
  let fixture: ComponentFixture<NewSolicitudesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSolicitudesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSolicitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
