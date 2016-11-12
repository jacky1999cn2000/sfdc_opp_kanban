import React from 'react';

class App extends React.Component {
    render() {
      console.dir(this.props)
      // console.log('this.props.location.query ',this.props.location.query);
        return (
            <div>
            This is new version!
                {this.props.children}
            </div>
        );
    }
}

export default App;
