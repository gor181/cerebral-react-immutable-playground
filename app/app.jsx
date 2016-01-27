const React = require('react');
const { HOC }= require('cerebral-view-react');

const App = React.createClass({
    displayName: 'Counter',

    componentDidMount() {
        setInterval(() => {
            this.props.signals.app.increment();
        }, 1000);
    },

    render() {
        const { app } = this.props;
        return (
            <div>Seconds passed since you have opened this page: {app.get('seconds')}</div>
        );
    }
});

module.exports = HOC(App, {
    app: ['app']
});
