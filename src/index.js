import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import './Css/animate.Css';
// import './Css/bootstrap.min.Css';
// import './Css/font-awesome.min.Css';
// import './Css/index.Css';
// import './Css/owl.carousel.Css';
// import './Css/responsive.Css';
// import './Css/style.Css';
// import './Css/themefisher-fonts.Css';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />,
    document.getElementById('root')
);

serviceWorker.unregister();
