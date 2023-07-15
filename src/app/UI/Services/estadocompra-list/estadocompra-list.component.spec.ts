import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadocompraListComponent } from './estadocompra-list.component';

describe('EstadocompraListComponent', () => {
  let component: EstadocompraListComponent;
  let fixture: ComponentFixture<EstadocompraListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadocompraListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadocompraListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
