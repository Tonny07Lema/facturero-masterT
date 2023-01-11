import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastController,ModalController } from '@ionic/angular';
import { ClienteService } from '../api/cliente.service';
import { Cliente } from '../entidades';

@Component({
  selector: 'app-actualizar-cliente',
  templateUrl: './actualizar-cliente.page.html',
  styleUrls: ['./actualizar-cliente.page.scss'],
})
export class ActualizarClientePage implements OnInit {

  @Input() clienteUpdate: any;
  clienteUp = new Cliente;
  clienteUpdateForm : FormGroup = this.fb.group({    
   'tipoIdentificacion': ['', [Validators.required]],
    'identificacionNumero' : ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correoElectronico': ['', [Validators.required]]
  }); 
  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder , 
    private clienteService: ClienteService,
    private toastController : ToastController,
    private router :Router
  ) { }

  ngOnInit() {
    this.clienteUp = this.clienteUpdate;
  }
  regresar() {
    this.modalCtrl.dismiss();
  }

  actualizar(){
    if (!this.clienteUpdateForm.valid) {
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.clienteUpdateForm.value.id = this.clienteUp.id;
      this.clienteService.actualizar(this.clienteUpdateForm.value).subscribe(
        (data) => {
          console.log('Hola', data);
          // this.ruta.navigate(['login'])
          this.modalCtrl.dismiss();
        }, (error) => {
          console.log('No vale ');
          this.mostrarMensaje(error.error);
        });
    }
  }
  async mostrarMensaje(mensaje :any){
    const toast = await this.toastController.create({
      position : 'top',
      message : mensaje,
      duration : 3000
    });
    toast.present();
  }
}
