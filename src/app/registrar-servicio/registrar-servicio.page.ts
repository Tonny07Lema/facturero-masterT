import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ServicioService } from '../api/servicio.service';

@Component({
  selector: 'app-registrar-servicio',
  templateUrl: './registrar-servicio.page.html',
  styleUrls: ['./registrar-servicio.page.scss'],
})
export class RegistrarServicioPage implements OnInit {
  IdUser: any = "";
  constructor(
    private fb: FormBuilder , 
    private servicioService: ServicioService,
    private toastController : ToastController,
    private router :Router
  ) { }

  ngOnInit() {
    this.IdUser = sessionStorage.getItem("IdUser");
    console.log(this.IdUser);
  }
  ServicioRegisterForm : FormGroup = this.fb.group({    
    'usuarioId' :[this.IdUser], 
    'descripcion' : ['', [Validators.required]],
    'precioUnitario' : ['', [Validators.required]],
  }); 
  registarServicio(){
    if(!this.ServicioRegisterForm.valid){
      return this.mostrarMensaje('Ingrese todos los datos');
    }else{
      this.ServicioRegisterForm.value.usuarioId = this.IdUser
      this.servicioService.registrar(this.ServicioRegisterForm.value)
      .subscribe(
        (data) =>{
          console.log('Hola',data);
          this.mostrarMensaje('Servicio creado con exito')
          this.router.navigate(['/servicio-d'])    
        },
        (error)=> {
          console.log('Ocurrio un error',error.error)
          this.mostrarMensaje (error.error)
        });
      return true;
    }
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
