import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCompraComponent } from './edit-compra.component';

describe('EditCompraComponent', () => {
  let component: EditCompraComponent;
  let fixture: ComponentFixture<EditCompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCompraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
