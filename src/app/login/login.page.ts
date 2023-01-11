import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../api/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userLoginForm: FormGroup = this.fb.group({
    'username': ['', [Validators.required]],
    'password': ['', [Validators.required]]
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastController: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginp(){
    if(!this.userLoginForm.valid){
      return false;
    }else{
      this.userService.login(this.userLoginForm.value)
      .subscribe(
        (data) =>{
          console.log('Hola',data);
          let IdUser = data.id;
          sessionStorage.setItem("IdUser", IdUser);
          this.mostrarMensaje('Sesion Iniciada')
          this.router.navigate(['/listar-cliente'])    
        }
        ,
        (error)=> {
          console.log('Ocurrio un error',error.error)
          this.mostrarMensaje (error.error)
        });
      return true;
    }
  }

  async mostrarMensaje(mensaje: any) {
    const toast = await this.toastController.create({
      position: 'bottom',
      message: mensaje,
      duration: 3000
    });
    toast.present();
  }

}
