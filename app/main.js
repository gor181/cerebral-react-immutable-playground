const React = require('react');
const ReactDOM = require('react-dom');
const Controller = require('cerebral');
const { Container } = require('cerebral-view-react');
const Model = require('cerebral-immutable-js');

const App = require('./app.jsx');

const controller = Controller(Model({}));

//Signal action for increasing seconds
const increment = function ({ module }) {
    const seconds = module.state.get('seconds');
    module.state.set('seconds', seconds + 1);
};

const Module = (options = {}) => {
    return (module) => {
        module.state({
            seconds: 0
        });

        module.signals({
             increment: [
               increment
             ]
        });
    };
};

controller.modules({
    app: Module()
});

ReactDOM.render(
    <Container controller={controller}><App /></Container>,
    document.getElementById('app')
)
