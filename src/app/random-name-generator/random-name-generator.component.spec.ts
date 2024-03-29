import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNameGeneratorComponent } from './random-name-generator.component';

describe('RandomNameGeneratorComponent', () => {
  let component: RandomNameGeneratorComponent;
  let fixture: ComponentFixture<RandomNameGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomNameGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomNameGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
