import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteColorTemplateComponent } from './favorite-color-template.component';

describe('FavoriteColorTemplateComponent', () => {
  let component: FavoriteColorTemplateComponent;
  let fixture: ComponentFixture<FavoriteColorTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteColorTemplateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FavoriteColorTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
