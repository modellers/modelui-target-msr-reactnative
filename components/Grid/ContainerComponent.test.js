import React from 'react';
import renderer from 'react-test-renderer';

test('Renders snapshot as expected', () => {
  const tree = renderer.create(<div />).toJSON();
  expect(tree).toMatchSnapshot();
});