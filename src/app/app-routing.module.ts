import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'cliente-d',
    loadChildren: () => import('./cliente-d/cliente-d.module').then( m => m.ClienteDPageModule)
  },
  {
    path: 'servicio-d',
    loadChildren: () => import('./servicio-d/servicio-d.module').then( m => m.ServicioDPageModule)
  },
  {
    path: 'factura-d',
    loadChildren: () => import('./factura-d/factura-d.module').then( m => m.FacturaDPageModule)
  },
  {
    path: 'registar-cliente',
    loadChildren: () => import('./registar-cliente/registar-cliente.module').then( m => m.RegistarClientePageModule)
  },
  {
    path: 'listar-cliente',
    loadChildren: () => import('./listar-cliente/listar-cliente.module').then( m => m.ListarClientePageModule)
  },
  {
    path: 'actualizar-cliente',
    loadChildren: () => import('./actualizar-cliente/actualizar-cliente.module').then( m => m.ActualizarClientePageModule)
  },
  {
    path: 'buscar-cliente',
    loadChildren: () => import('./buscar-cliente/buscar-cliente.module').then( m => m.BuscarClientePageModule)
  },
  {
    path: 'registrar-servicio',
    loadChildren: () => import('./registrar-servicio/registrar-servicio.module').then( m => m.RegistrarServicioPageModule)
  },
  {
    path: 'listar-servicio',
    loadChildren: () => import('./listar-servicio/listar-servicio.module').then( m => m.ListarServicioPageModule)
  },
  {
    path: 'actualizar-servicio',
    loadChildren: () => import('./actualizar-servicio/actualizar-servicio.module').then( m => m.ActualizarServicioPageModule)
  },
  {
    path: 'registrarfactura',
    loadChildren: () => import('./registrarfactura/registrarfactura.module').then( m => m.RegistrarfacturaPageModule)
  },
  {
    path: 'listar-factura',
    loadChildren: () => import('./listar-factura/listar-factura.module').then( m => m.ListarFacturaPageModule)
  },
  {
    path: 'listar-factura-emitidas',
    loadChildren: () => import('./listar-factura-emitidas/listar-factura-emitidas.module').then( m => m.ListarFacturaEmitidasPageModule)
  },
  {
    path: 'listar-factura-anulada',
    loadChildren: () => import('./listar-factura-anulada/listar-factura-anulada.module').then( m => m.ListarFacturaAnuladaPageModule)
  },
  {
    path: 'detalle-factura',
    loadChildren: () => import('./detalle-factura/detalle-factura.module').then( m => m.DetalleFacturaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
