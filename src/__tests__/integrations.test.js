import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
  // Setup moxios and attempt to intercept that axios will issue.
  moxios.install();

  // Intercept the REQUEST and give back a mock response to 'axios'.
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [
      { name: 'Fetched #1' },
      { name: 'Fetched #2' }
    ]
  });
});

afterEach(() => {
  // Makes sure the stubRequest doesn't get used in some other test suite
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  // Attempt to rent the *entire* app
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );

  // find the 'fetchComments' button and click it
  wrapped.find('.fetch-comments').simulate('click');  
  // Introduce a TINY little pause
  moxios.wait(() => {
    wrapped.update();
    // Expect to find a list of comments!
    expect(wrapped.find('li').length).toEqual(2);

    done();
    wrapped.unmount();
  });


});