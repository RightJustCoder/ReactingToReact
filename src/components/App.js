import React from 'react';

    let App = (props) => {

        if (props.text) {
            return <h1>props.text</h1>
        } else return <h1>Hello Globe!!!</h1>;
        

    }

export default App;