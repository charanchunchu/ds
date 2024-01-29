import { NextDirective } from './next.directive';
import { ElementRef } from '@angular/core';

describe('NextDirective', () => {
  it('should create an instance', () => {
    const elMock = new ElementRef(null);
    const directive = new NextDirective(elMock);
    expect(directive).toBeTruthy();
  });
});
