import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Parent2DataComponent } from './parent2-data.component';

describe('Parent2DataComponent', () => {
  let component: Parent2DataComponent;
  let fixture: ComponentFixture<Parent2DataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Parent2DataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Parent2DataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
