import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHttpComponent } from './list-http.component';

describe('ListHttpComponent', () => {
  let component: ListHttpComponent;
  let fixture: ComponentFixture<ListHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListHttpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
