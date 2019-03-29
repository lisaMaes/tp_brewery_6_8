import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleListComponent } from './ale-list.component';

describe('AleListComponent', () => {
  let component: AleListComponent;
  let fixture: ComponentFixture<AleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
