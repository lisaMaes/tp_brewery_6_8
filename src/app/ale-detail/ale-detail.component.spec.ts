import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AleDetailComponent } from './ale-detail.component';

describe('AleDetailComponent', () => {
  let component: AleDetailComponent;
  let fixture: ComponentFixture<AleDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AleDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AleDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
