import React from 'react';
import { shallow } from 'enzyme';

// Components
import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', () => {
  // const div = document.createElement('div');

  // ReactDOM.render(<App />, div);

  // // Looks inside the div
  // // and checks to see if the CommentBox is in there
  // expect(div.innerHTML).toContain('Comment Box');

  // ReactDOM.unmountComponentAtNode(div);

  // Using ENZYME, this makes sure we have a component 'CommentBox' in our app
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentBox).length).toEqual(1);
});
