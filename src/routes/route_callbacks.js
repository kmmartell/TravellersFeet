import store from '../store';
import { fetchPosts, fetchPost } from '../actions';

export function onPostEnter(nextState) {
  const tree_id = nextState.params.id;
  store.dispatch(fetchPost(tree_id));
}
