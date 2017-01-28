import { renderComponent, expect } from '../test_helper';
import PostList from '../../src/components/post/PostList';

describe('Post List', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(PostList);
  })

  it('renders list of posts', () => {
  expect(component.find('post-list-item')).to.exist;
  })



});
