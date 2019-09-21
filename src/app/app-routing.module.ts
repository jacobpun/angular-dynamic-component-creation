import { BoxComponent } from './box/box.component';
import { BoxContainerComponent } from './box-container/box-container.component';
import { NgModule, Component, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export interface ComponentData {
  comp: Type<any>
  inputSetter: (comp: any) => void
}

const routes: Routes = [
  {
    path: 'route1',
    component: BoxContainerComponent,
    data: {
      boxes: [
        {
          comp: BoxComponent,
          inputSetter: (comp: BoxComponent) => comp.num = 1
        }
      ]
    }
  },
  {
    path: 'route2',
    component: BoxContainerComponent,
    data: {
      boxes: [
        {
          comp: BoxComponent,
          inputSetter: (comp: BoxComponent) => comp.num = 1
        },
        {
          comp: BoxComponent,
          inputSetter: (comp: BoxComponent) => comp.num = 2
        }
      ]
    }
  },
  {
    path: 'route3',
    component: BoxContainerComponent,
    data: {
      boxes: [
        {
          comp: BoxComponent,
          inputSetter: (comp: BoxComponent) => comp.num = 1
        },
        {
          comp: BoxComponent,
          inputSetter: (comp: BoxComponent) => comp.num = 2
        },
        {
          comp: BoxComponent,
          inputSetter: (comp: BoxComponent) => comp.num = 3
        }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
