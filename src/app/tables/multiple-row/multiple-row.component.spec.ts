import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleRowComponent } from './multiple-row.component';

describe('MultipleRowComponent', () => {
  let component: MultipleRowComponent;
  let fixture: ComponentFixture<MultipleRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleRowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultipleRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
