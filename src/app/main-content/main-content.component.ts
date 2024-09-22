import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from "../hero/hero.component";
import { AboutMeComponent } from '../about-me/about-me.component';
import { MySkillsComponent } from '../my-skills/my-skills.component';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ContactComponent } from '../contact/contact.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, NavbarComponent, HeroComponent, AboutMeComponent, MySkillsComponent, PortfolioComponent, ContactComponent, TranslateModule],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']   
})
export class MainContentComponent {}
