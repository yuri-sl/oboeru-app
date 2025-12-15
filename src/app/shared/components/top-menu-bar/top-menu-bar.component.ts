import { Component, OnInit } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-top-menu-bar',
  imports: [MenuModule, MenubarModule],
  templateUrl: './top-menu-bar.component.html',
  styleUrl: './top-menu-bar.component.scss',
})
export class TopMenuBarComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'New',
        items: [
          {
            label: 'New user',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          },
        ],
      },
      {
        label: 'Search',
        icon: 'pi pi-search',
      },
    ];
  }
}
