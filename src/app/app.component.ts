import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter} from "rxjs";
import {MatSidenav, MatSidenavContent} from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  page = '';
  routes: Array<string> = [];

  constructor(private  router: Router) {
  }
  ngOnInit() {
    this.routes = this.router.config.map(config => config.path) as string[];
    this.router.events.pipe(filter(event =>  event instanceof NavigationEnd)).subscribe((evts: any) => {
      const currentPage=(evts.urlAfterRedirects as string).split('/')[1] as string;
      if(this.routes.includes(currentPage)) this.page=currentPage;

    })
  }

  changePage(selectedPage: string) {
    //this.page=selectedPage
    this.router.navigateByUrl(selectedPage);
  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle();
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event === true) sidenav.close();
  }
}
