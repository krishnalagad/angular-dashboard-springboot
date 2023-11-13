import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSixComponent } from './component-six.component';

describe('ComponentSixComponent', () => {
  let component: ComponentSixComponent;
  let fixture: ComponentFixture<ComponentSixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentSixComponent]
    });
    fixture = TestBed.createComponent(ComponentSixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
