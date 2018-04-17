import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenTestComponent } from './children-test.component';

describe('ChildrenTestComponent', () => {
  let component: ChildrenTestComponent;
  let fixture: ComponentFixture<ChildrenTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
