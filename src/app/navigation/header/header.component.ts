import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onToggle() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.router.navigate(['/']);
  }
}
