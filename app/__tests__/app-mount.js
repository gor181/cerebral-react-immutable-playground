var React = require('react');
var u = require('react-addons-test-utils');
var expect = require('chai').expect;
var App = require('../app.jsx');

describe('App', function () {
    it('renders', function () {
        var app = u.renderIntoDocument(<App />);
        expect(app).to.exist;
    })
})
