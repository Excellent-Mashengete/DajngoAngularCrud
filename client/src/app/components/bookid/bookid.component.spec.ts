import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookidComponent } from './bookid.component';

describe('BookidComponent', () => {
  let component: BookidComponent;
  let fixture: ComponentFixture<BookidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
