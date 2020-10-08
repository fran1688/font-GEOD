import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Actualiza tú tasa del día',
      icon: '../../../assets/images/icon/actualizar_tasa.svg',
      url: '/'
    },
    {
      title: 'Mensaje',
      icon: '../../../assets/images/icon/mensaje.svg',
      url: 'promesas'
    },
    {
      title: 'Solicitud de Envio',
      icon: '../../../assets/images/icon/envio.svg',
      url: '/message'
    },
    {
      title: 'Ver Movimiento',
      icon: '../../../assets/images/icon/ver_movimiento.svg',
      url: '/Shipping_request'
    },
    {
      title: 'Compartir mi perfil',
      icon: '../../../assets/images/icon/compartir.svg',
      url: '/movements'
    },
    {
      title: 'Politias de Uso',
      icon: '../../../assets/images/icon/politicas_de_uso.svg',
      url: ''
    },
    {
      title: 'Configuración',
      icon: '../../../assets/images/icon/configuración.svg',
      url: '/'
    },
    {
      title: 'Cerrar sesión',
      icon: '../../../assets/images/icon/cerrar_seción.svg',
      url: '/login'
    }
  ];

  constructor() { }
}
