import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  IdUser: any ;
  constructor() { 
    
  }

  ngOnInit() {
  this.IdUser = sessionStorage.getItem("IdUser");
  console.log(this.IdUser);
  }

}
