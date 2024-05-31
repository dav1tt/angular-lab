import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColorReactiveComponent } from './favorite-color-reactive.component';

describe('FavoriteColorReactiveComponent', () => {
  let component: FavoriteColorReactiveComponent;
  let fixture: ComponentFixture<FavoriteColorReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteColorReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteColorReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
