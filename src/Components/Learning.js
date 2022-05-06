import React from "react";
import {render} from'react-dom';

const Learning = () =>{
const node = document.getElementById('root');
const root = React.createElement('div', {},
 React.createElement('h1', {}, "Hello,World!",
 React.createElement('a', {href: 'mailto: njerimuchiri3210@gmail.com'},
 React.createElement('h1', {}, "React In Action"),
 React.createElement('em',{},"...And now it really is!" )
 )
 )
);
render(root, node);
}
export default Learning;
