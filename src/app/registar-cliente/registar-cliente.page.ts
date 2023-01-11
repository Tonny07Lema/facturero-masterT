import { Component, OnInit ,Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ClienteService } from '../api/cliente.service';
@Component({
  selector: 'app-registar-cliente',
  templateUrl: './registar-cliente.page.html',
  styleUrls: ['./registar-cliente.page.scss'],
})
export class RegistarClientePage implements OnInit {


  clienteRegisterForm : FormGroup = this.fb.group({      
    'tipoIdentificacion' : ['', [Validators.required]],
    'identificacionNumero' : ['', [Validators.required]],
    'nombre': ['', [Validators.required]],
    'direccion': ['', [Validators.required]],
    'telefono': ['', [Validators.required]],
    'correoElectronico': ['', [Validators.required]]
  }); 
  constructor(
    private fb: FormBuilder , 
    private clienteService: ClienteService,
    private toastController : ToastController,
    private router :Router
  ) { }

  ngOnInit() {
  }
  registarCliente(){
    if(!this.clienteRegisterForm.valid){
      return this.mostrarMensaje('Ingrese todos los datos');
    }else{
      this.clienteService.registrar(this.clienteRegisterForm.value)
      .subscribe(
        (data) =>{
          console.log('Hola',data);
          this.mostrarMensaje('Cliente creado con exito')
          this.router.navigate(['/cliente-d'])    
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
