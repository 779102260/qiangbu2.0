import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

//reducer
import reducer from './redux/reducer.js';
//css
import css from './css/app.css';

//组件
import Home from './components/home/index.js';
import New from './components/new/index.js';
import Cases from './components/cases/index.js';
import Contact from './components/contact/index.js';


//菜单和路由
const Menu=()=>{
	let menu=(
		<Router>
			<div>
				<ul className="menu">
					<li><Link to='/'>六安墙布</Link></li>
					<li><Link to='/'>首页</Link></li>
					<li><Link to='/new'>2018新品</Link></li>
					<li><Link to='/cases'>现场案例</Link></li>
					<li><Link to='/contact'>联系我们</Link></li>
				</ul>
				<div>
					<Route exact path='/' component={Home}/>
					<Route path='/new' component={New}/>
					<Route path='/cases' component={Cases}/>
					<Route path='/contact' component={Contact}/>
				</div>
			</div>
		</Router>
	);
	return menu;
}

//redux
const store=createStore(reducer);
const App=<Provider store={store}><Menu /></Provider>;

export default App;




