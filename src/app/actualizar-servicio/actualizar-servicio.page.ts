import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController,ModalController } from '@ionic/angular';
import { ServicioService } from '../api/servicio.service';

@Component({
  selector: 'app-actualizar-servicio',
  templateUrl: './actualizar-servicio.page.html',
  styleUrls: ['./actualizar-servicio.page.scss'],
})
export class ActualizarServicioPage implements OnInit {
  @Input() idCliente: undefined;
  ServicioUpdateForm : FormGroup = this.fb.group({     
    'descripcion' : ['', [Validators.required]],
    'precioUnitario' : ['', [Validators.required]],
  }); 
  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder , 
    private sevicioService: ServicioService,
    private toastController : ToastController,
    private router :Router
  ) { }

  ngOnInit() {
  }
  regresar() {
    this.modalCtrl.dismiss();
  }
  ActualizarServicio(){
    if (!this.ServicioUpdateForm.valid) {
      this.mostrarMensaje("Ingrese datos");
    } else {
      this.ServicioUpdateForm.value.id = this.idCliente;
      this.sevicioService.actualizar(this.ServicioUpdateForm.value).subscribe(
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
