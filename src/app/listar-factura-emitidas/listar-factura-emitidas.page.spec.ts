import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarFacturaEmitidasPage } from './listar-factura-emitidas.page';

describe('ListarFacturaEmitidasPage', () => {
  let component: ListarFacturaEmitidasPage;
  let fixture: ComponentFixture<ListarFacturaEmitidasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFacturaEmitidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarFacturaEmitidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
