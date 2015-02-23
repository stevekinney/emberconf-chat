import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('controller:chatroom', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('submission is invalid if author or body is missing', function(assert) {
  var controller = this.subject();
  controller.setProperties({
    author: null,
    body: null
  });
  assert.ok(controller.get('submissionIsInvalid'));
});

test('submission is valid if author or body is missing', function(assert) {
  var controller = this.subject();
  controller.setProperties({
    author: 'Author',
    body: 'Body'
  });
  assert.ok(controller.get('submissionIsValid'));
});
