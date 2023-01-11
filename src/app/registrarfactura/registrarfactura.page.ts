import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController,ModalController } from '@ionic/angular';
import { Detalle} from 'src/app/entidades';
import { ClienteService } from '../api/cliente.service';
import { FacturaService } from '../api/factura.service';
import { ServicioService } from '../api/servicio.service';

@Component({
  selector: 'app-registrarfactura',
  templateUrl: './registrarfactura.page.html',
  styleUrls: ['./registrarfactura.page.scss'],
})
export class RegistrarfacturaPage implements OnInit {
  detalles: Detalle[] = []
  detalles2: Detalle[] = []
  fechaActual: Date = new Date();
  impuesto2: String = ""
  totales: String = ""
  subtotal: String = ""
  IdUser: any = "";
  cardCliente: boolean = false;
  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private clienteService: ClienteService,
    private modalCtrl: ModalController,
    private faturaService:FacturaService,
    private servicioSevice:ServicioService, 
    private router :Router,
    
  ) { }

  ngOnInit() {
    this.IdUser = sessionStorage.getItem("IdUser");
    this.servicioSevice.detalle2.subscribe(data => this.detalles = data)
    // console.log(this.detalles)
    this.total()
  }
  buscarCliente: FormGroup = this.fb.group({
    'identificacionNumero': ['', [Validators.required]]
  });
  EncontradoRegisterForm: FormGroup = this.fb.group({
    
  });
  newFactura: FormGroup = this.fb.group({
    'fechaDeEmision': [''],
    'subtotal': [0],
    'impuesto': [''],
    'total': [''],
    'clienteId': [''],
    'usuarioId': [''],
    'detalles': [],
  })

  BuscarCedula() {
    if (!this.buscarCliente.valid) {
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.clienteService.buscar(this.buscarCliente.value.identificacionNumero).subscribe(
        (data) => {
          console.log('Busqueda', data);
          this.cardCliente = true
          this.EncontradoRegisterForm.value.id = data.id;
          this.EncontradoRegisterForm.value.tipoIdentificacion = data.tipoIdentificacion;
          this.EncontradoRegisterForm.value.identificacionNumero = data.identificacionNumero;
          this.EncontradoRegisterForm.value.nombre = data.nombre;
          this.EncontradoRegisterForm.value.direccion = data.direccion;
          this.EncontradoRegisterForm.value.telefono = data.telefono;
          this.EncontradoRegisterForm.value.correoElectronico = data.correoElectronico;

        }, (error) => {
          console.log('No vale ');
          this.mostrarMensaje(error.error);
          this.cardCliente = false
        });
    }
  }

  total() {
    let sum = 0
    let impuesto = 0
    let total = 0
    this.detalles.forEach(data => {
      sum += data.total
    })
    impuesto = sum * 0.12
    total = sum + impuesto

    this.subtotal = sum.toFixed(2)
    this.impuesto2 = impuesto.toFixed(2);
    this.totales = total.toFixed(2);
  }
  facturar() {
    if (!this.newFactura.valid || this.cardCliente != true || this.detalles == this.detalles2) {
      // return false;
      this.mostrarMensaje("Ingrese los datos faltantes");
    } else {
      this.newFactura.value.fechaDeEmision = this.fechaActual
      this.newFactura.value.subtotal = this.subtotal
      this.newFactura.value.impuesto = this.impuesto2
      this.newFactura.value.total = this.totales
      this.newFactura.value.clienteId = this.EncontradoRegisterForm.value.id
      this.newFactura.value.usuarioId = this.IdUser
      this.newFactura.value.detalles = this.detalles
      this.faturaService.nuevaFactura(this.newFactura.value).subscribe(
        (data) => {
          console.log('Hola', data);
          this.mostrarMensaje("Factura Creada");
          this.router.navigate(['/listar-factura'])  
          this.modalCtrl.dismiss();
          this.borrar();
        }, (error) => {
          console.log('No vale ');
          this.mostrarMensaje(error.error);
        });
    }
  }

  borrar(){
    this.servicioSevice.borrar();
  }
  async mostrarMensaje(mensaje :any){
    const toast = await this.toastController.create({
      position : 'bottom',
      message : mensaje,
      duration : 3000
    });
    toast.present();
  }
}
