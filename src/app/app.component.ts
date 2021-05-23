import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Subscription } from 'rxjs';
import { ThemingService } from './services/theming.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'example-sportsdb';
  themingSubscription: Subscription;
  isDark = false;

  constructor(
    private themingService: ThemingService,
    private overlayContainer: OverlayContainer
  ) { }

  @HostBinding('class') public cssClass: string;

  ngOnInit(): void {
    this.themingSubscription = this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
      this.applyThemeOnOverlays();
      if (theme === 'dark-theme') {
        this.isDark = true;
      } else {
        this.isDark = false;
      }
    });
  }

  changeTheme(theme: string) {
    this.themingService.theme.next(theme);
  }

  /**
   * Apply the current theme on components with overlay (e.g. Dropdowns, Dialogs)
   */
  private applyThemeOnOverlays() {
    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(this.themingService.themes);
    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }
    overlayContainerClasses.add(this.cssClass);
  }

  ngOnDestroy(): void {
    this.themingSubscription.unsubscribe();
  }
}

