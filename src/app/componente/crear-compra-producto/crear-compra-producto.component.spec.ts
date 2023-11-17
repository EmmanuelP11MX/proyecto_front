import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCompraProductoComponent } from './crear-compra-producto.component';

describe('CrearCompraProductoComponent', () => {
  let component: CrearCompraProductoComponent;
  let fixture: ComponentFixture<CrearCompraProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearCompraProductoComponent]
    });
    fixture = TestBed.createComponent(CrearCompraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
