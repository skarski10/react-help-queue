var heading = React.createElement('h1', {}, 'Help Queue');
var ticketLocation = React.createElement('h3', {}, '3a');
var ticketNames = React.createElement('h3', {}, 'Thato and Heley');
var ticketIssue = React.createElement('h3', {}, "Firebase won't save record");
var app = React.createElement('div', {}, heading, ticketLocation, ticketNames, ticketIssue);

ReactDOM.render(
  app,
  document.getElementById('react-app-root')
);

ReactDOM.render(
  <div>
    <h1>Help Queue</h1>
    <h2>{new Date().toLocaleTimeString()}</h2>
    <h3>3a</h3>
    <h3>Thato and Haley</h3>
    <p><em>Firebase won't save record</em></p>
  <div>,
  document.getElementById('react-app-root')
);
