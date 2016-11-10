import React from 'react';

class App extends React.Component {
    componentDidMount() {
        $("#foo").foundation();
    }

    render() {
        return (
            <div id="foo">

                <span>
                    Hello World!
                </span>
                <i className="fa fa-camera-retro"></i>

                <ul className="vertical menu" data-accordion-menu>
                    <li>
                        <a href="#">Item 1</a>
                        <ul className="menu vertical nested">
                            <li>
                                <a href="#">Item 1A</a>
                            </li>
                            <li>
                                <a href="#">Item 1B</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">Item 2</a>
                    </li>
                </ul>

            </div>
        );
    }
}

export default App;
