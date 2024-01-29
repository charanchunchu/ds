import { PrevDirective } from './prev.directive';
import { ElementRef } from '@angular/core';

describe('PrevDirective', () => {
  it('should create an instance', () => {
    const elMock = new ElementRef(null);
    const directive = new PrevDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
