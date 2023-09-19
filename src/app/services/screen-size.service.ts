import { HostListener, Injectable } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  isSmallScreen: boolean = false;

  constructor(private viewportRuler: ViewportRuler) {
    this.isSmallScreen = this.checkIfSmallScreen();
  }
  
  isScreenSmall(): boolean {
    return this.isSmallScreen;
  }

  private checkIfSmallScreen(): boolean {
    const viewportWidth = this.viewportRuler.getViewportSize().width;
    return viewportWidth <= 600; // 根据你的需求设置小屏幕的阈值
  }
  
  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    this.isSmallScreen = this.checkIfSmallScreen();
  }

}