import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, MenuController, IonSearchbar, NavController } from '@ionic/angular';
import { ApiService } from "src/app/services/api.service";
import { createAnimation, Animation } from '@ionic/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {

  @ViewChild(IonMenu, { static: false }) public sidemenu: IonMenu;
  @ViewChild("#search-app-component", { static: false }) private searchBar: HTMLElement;

  public appPages = [
    {
      title: 'Novedades',
      desc: 'Clasificación y reciclaje en Uruguay',
      url: 'novedades',
      icon: 'dr-newspaper'
    },
    {
      title: 'Programas',
      desc: 'Ciclo de vida de los residuos',
      url: 'programas',
      icon: 'dr-recycle'
    },
    {
      title: 'Auspiciantes',
      desc: 'Marcas que hacen posible esta app',
      url: 'empresas',
      icon: 'dr-empresas'
    }
  ];


  constructor(
    private menuCtrl: MenuController,
    public api: ApiService<any>,
    // private router: Router
  ) {
    // this.sidemenu.ionWillOpen.subscribe(data => {
    //     console.log('menu open');
    // });
  }

  ngOnInit() {
    this.api.loadInitialData().subscribe( () =>  { // console.log(this.predefinedOptions)
    });
  }

  toggleMenu(){
    this.menuCtrl.toggle(); //Add this method to your button click function
  }


  menuWillOpen(){
    // this.searchBar.classList.add('hide');
  }

  menuWillClose(){
    // this.searchBar.classList.remove('hide');
  }

}
