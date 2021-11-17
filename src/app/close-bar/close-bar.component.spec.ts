import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBarComponent } from './close-bar.component';

describe('CloseBarComponent', () => {
  let component: CloseBarComponent;
  let fixture: ComponentFixture<CloseBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
