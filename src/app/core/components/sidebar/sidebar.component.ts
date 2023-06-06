import { DOCUMENT } from '@angular/common'
import { Component, Inject, Renderer2 } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  public isOpen: boolean = false

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2) { }

  public toggleMenu() {
    this.isOpen = !this.isOpen

    this.isOpen
      ? this.renderer.addClass(this.document.body, 'prevent-scroll')
      : this.renderer.removeClass(this.document.body, 'prevent-scroll')
  }

  public closeMenu() {
    this.isOpen = false

    this.renderer.removeClass(this.document.body, 'prevent-scroll')
  }
}
