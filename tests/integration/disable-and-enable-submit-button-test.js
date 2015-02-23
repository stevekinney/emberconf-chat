import Ember from 'ember';
import { test } from 'ember-qunit';
import { module } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('Integration - Enable and Disable Submit Button', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    Ember.run(App, App.destroy);
  }
});

test('it has a submit button', function (assert) {
  assert.expect(1);
  visit('/').then(function () {
    assert.ok(find('input[type=submit]').length, 'It has a submit button');
  });
});

test('the submit button is disabled by default', function (assert) {
  assert.expect(1);
  visit('/').then(function () {
    andThen(function () {
      assert.ok($('input[type=submit]').prop('disabled'), 'The submit button is disabled.');
    });
  });
});

test('entering an author name and method activates the button', function (assert) {
  assert.expect(1);
  visit('/').then(function () {
    fillIn('.message-author input[type=text]', 'Author');
    fillIn('.message-body input[type=text]', 'Body');
    andThen(function () {
      assert.ok(!find('input[type=submit]').prop('disabled'), 'The submit button is enabled.');
    });
  });
});
