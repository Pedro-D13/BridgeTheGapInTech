import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  relPath = "assets/team_image/"

  isHandset$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.Handset,Breakpoints.HandsetPortrait,Breakpoints.HandsetLandscape,Breakpoints.Small,Breakpoints.Medium])
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, ) {}

  ngOnInit(){
  }

}
