import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListarFacturaAnuladaPage } from './listar-factura-anulada.page';

describe('ListarFacturaAnuladaPage', () => {
  let component: ListarFacturaAnuladaPage;
  let fixture: ComponentFixture<ListarFacturaAnuladaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarFacturaAnuladaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarFacturaAnuladaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
