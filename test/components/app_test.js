import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

import { Header, Footer } from '../../src/components/templates';

describe('App' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);

  });

  it('contains footer', () => {
    expect(component.find('.footer')).to.exist;
  });
  it('contains header', () => {
    expect(component.find('.header')).to.exist;
  });

  it('renders itself', () => {
    expect(component).to.exist;
  });
});
