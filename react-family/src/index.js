// document.getElementById('app').innerHTML = "Webpack workss"

/*使用es6的箭头函数*/
// var func = str => {
//     document.getElementById('app').innerHTML = str;
// };
// func('我现在在使用Babel!');

import React from 'react';
import ReactDom from 'react-dom';
import Hello from './component/Hello/Hello';
import {AppContainer} from 'react-hot-loader';

import getRouter from 'router/router';

/*初始化*/
renderWithHotReload(getRouter());

/*热更新*/
if (module.hot) {
    module.hot.accept('./router/router', () => {
        const getRouter = require('./router/router').default;
        renderWithHotReload(getRouter());
    });
}

// if (module.hot) {
//     module.hot.accept();
// }
function renderWithHotReload(RootElement) {
    ReactDom.render(
        <AppContainer>
            {RootElement}
        </AppContainer>,
        document.getElementById('app')
    )
}

// ReactDom.render(
//     getRouter(), document.getElementById('app'));
