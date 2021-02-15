import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';
import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import {
  Subscription
} from 'rxjs';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit, OnDestroy {
  relPath = 'assets/images/';
  isOnSmallScreen: boolean;
  sink: Subscription[] = [];
  constructor(private bpo$: BreakpointObserver) {}

  ngOnInit(): void {
    this.sink.push(
    this.bpo$.observe([Breakpoints.Handset, Breakpoints.Small, Breakpoints.HandsetLandscape, Breakpoints.XSmall]).subscribe(
        results => this.isOnSmallScreen = results.matches)
    )
  }

  // tslint:disable-next-line:typedef
  ngOnDestroy() {
    this.sink.forEach(_ => _.unsubscribe());
  }
}
