import { ComponentData } from './../app-routing.module';
import { BoxComponent } from './../box/box.component';
import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-box-container',
  templateUrl: './box-container.component.html',
  styleUrls: ['./box-container.component.css']
})
export class BoxContainerComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private route: ActivatedRoute, private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.route.data.subscribe(
      ({ boxes }) => {
        boxes.forEach(
          (componentData: ComponentData) => {
            const compFactory = this.resolver.resolveComponentFactory(componentData.comp);
            const compRef = this.container.createComponent(compFactory);
            componentData.inputSetter(compRef.instance);
          }
        )
      });
  }
}