import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../api/cliente.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActualizarClientePage } from '../actualizar-cliente/actualizar-cliente.page';

@Component({
  selector: 'app-buscar-cliente',
  templateUrl: './buscar-cliente.page.html',
  styleUrls: ['./buscar-cliente.page.scss'],
})
export class BuscarClientePage implements OnInit {
  cardCliente: boolean = false;
  buscarRegisterForm : FormGroup = this.fb.group({      
    'identificacionNumero' : ['', [Validators.required]]
  });
  EncontradoRegisterForm : FormGroup = this.fb.group({      
    //'identificacionNumero' : ['', [Validators.required]]
  }); 
  constructor(
    private clienteService: ClienteService,
    private toastController: ToastController,
    private modalCtrl:ModalController,
    private fb: FormBuilder ,
    private router :Router
  ) { }

  ngOnInit() {
  }

  BuscarCedula() {
    if (!this.buscarRegisterForm.valid) {
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.clienteService.buscar(this.buscarRegisterForm.value.identificacionNumero).subscribe(
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

  async mostrarMensaje(mensaje :any){
    const toast = await this.toastController.create({
      position : 'top',
      message : mensaje,
      duration : 3000
    });
    toast.present();
  }

}
