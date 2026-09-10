const rootDiv = document.getElementById('root')

const rootReactEngine = ReactDOM.createRoot(rootDiv);

const entryElement = React.createElement('h1', null, 'Hello World From React');

rootReactEngine.render(entryElement); 