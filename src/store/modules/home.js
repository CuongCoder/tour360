import axios from "axios";
export const state = {
	listProject: [],
	isLoadProject: true
}

export const mutations = {
	logout() {
		delete localStorage.myToken;
		delete localStorage.password;
		delete localStorage.email;
		delete localStorage.name;
	}
}

export const getters = {

}

export const actions = {
	async GET_USER() {
		var config = {
			headers: {
				'Authorization': "bearer " + localStorage.myToken
			}
		};
		await axios.get('/projects', config)
			.then(response => {
				state.listProject = [].concat(response.data.data[0]);
				setTimeout(() => {
					state.isLoadProject = false;
				}, 500);
			})
			.catch(error => alert(error));
	},
	UPDATE_USER() {

	}
}

export default {
	state,
	actions,
	mutations,
	getters
};