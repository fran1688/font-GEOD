import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Actualiza tú tasa del día',
      icon: 'ti-announcement',
      url: '/'
    },
    {
      title: 'Promesas',
      icon: 'mdi mdi-gauge',
      url: 'promesas'
    },
    {
      title: 'Mensaje',
      icon: 'fa-envelope',
      url: '/message'
    },
    {
      title: 'Solicitud de Envio',
      icon: 'mdi mdi-gauge',
      url: '/Shipping_request'
    },
    {
      title: 'Ver movimientos',
      icon: 'mdi mdi-gauge',
      url: '/movements'
    },
    {
      title: 'Compartir mi perfil',
      icon: 'fa-share-alt',
      url: ''
    },
    {
      title: 'Políticas de uso',
      icon: 'mdi mdi-gauge',
      url: '/'
    },
    {
      title: 'Configuración',
      icon: 'ti-settings',
      url: '/register'
    },
    {
      title: 'Cerrar sesión',
      icon: 'fa-sign-out',
      url: '/login'
    }
  ];

  constructor() { }
}
