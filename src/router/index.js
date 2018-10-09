import Vue from "vue";
import VueRouter from "vue-router";
//login
import FormInput from "../components/login/FormInput";
import RegisterForm from "../components/login/RegisterForm";
import ForgotPass from "../components/login/ForgotPass";
import Home from "../components/home/Home";
import ResetPass from "../components/login/ResetPass.vue";
//sub nav: user
import User from "../components/profile/User";
import Profile from "../components/profile/InfoUser/Profile";
import Password from "../components/profile/InfoUser/Password";
import Activity from "../components/profile/InfoUser/Activity";
import Billing from "../components/profile/InfoUser/Billing";
import EmailNotify from "../components/profile/InfoUser/EmailNotify";
import Sync from "../components/profile/InfoUser/Sync";
// main menu
import Mini from "../components/mini/Mini";
import People from "../components/people/People";
import Learn from "../components/learn/Learn";
import About from "../components/about/About";
import Project from "../components/project/Project";

Vue.use(VueRouter);

const routes = [{
	path: '/login',
	component: FormInput,
	name: 'login'
}, {
	path: '/reset-pass',
	component: ResetPass,
	name: 'reset-pass'
}, {
	path: '/register',
	component: RegisterForm,
	name: 'register'
}, {
	path: '/reset',
	component: ForgotPass,
	name: 'reset'
}, {
	path: '/',
	component: Home,
	name: 'home'
}, {
	path: '/mini',
	component: Mini,
	name: 'mini',
}, {
	path: '/people',
	component: People,
	name: 'people'
}, {
	path: '/learn',
	component: Learn,
	name: 'learn'
}, {
	path: '/about',
	component: About,
	name: 'about'
}, {
	path: '/project',
	component: Project,
	name: 'project'
}, {
	path: '/:id',
	component: User,
	name: 'user',
	children: [{
		path: 'profile',
		component: Profile
	}, {
		path: 'password',
		component: Password
	}, {
		path: 'billing',
		component: Billing
	}, {
		path: 'email',
		component: EmailNotify
	}, {
		path: 'activity',
		component: Activity
	}, {
		path: 'sync',
		component: Sync
	}]
}]



function checkToken() {
	if (!localStorage.myToken) {
		return false;
	} else return true;
}


const router = new VueRouter({
	routes,
	mode: 'history'
});


//redirect to home if logged in, redirect to login if not logged in
router.beforeEach((to, from, next) => {
	if (checkToken()) {
		if (to.path === '/login' || to.path === '/register' || to.path === '/reset' || to.path === '/reset-pass') {
			next({
				name: 'home'
			});
		} else next();
	} else if (!checkToken()) {
		if (to.path === '/login' || to.path === '/register' || to.path === '/reset' || to.path === '/reset-pass') {
			next();
		} else next({
			name: 'login'
		});
	}
});

export default router;