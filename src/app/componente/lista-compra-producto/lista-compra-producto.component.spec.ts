import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaCompraProductoComponent } from './lista-compra-producto.component';

describe('ListaCompraProductoComponent', () => {
  let component: ListaCompraProductoComponent;
  let fixture: ComponentFixture<ListaCompraProductoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaCompraProductoComponent]
    });
    fixture = TestBed.createComponent(ListaCompraProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
