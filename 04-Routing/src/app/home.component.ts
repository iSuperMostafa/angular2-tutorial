import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'app-home',
  template: `
    <h1>
      Home Component!
    </h1>
    <p>param: {{param}}<p>
  `,
  styles: []
})
export class HomeComponent implements OnDestroy {
  private subscription: Subscription;

  param: string;

  constructor(private route: ActivatedRoute) {
    this.subscription = route.queryParams.subscribe(
      (queryParam: any) => this.param = queryParam['analytics']
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
