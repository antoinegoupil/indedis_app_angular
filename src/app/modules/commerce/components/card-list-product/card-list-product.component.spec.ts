import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardListProductComponent } from './card-list-product.component';

describe('CardListProductComponent', () => {
  let component: CardListProductComponent;
  let fixture: ComponentFixture<CardListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardListProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
