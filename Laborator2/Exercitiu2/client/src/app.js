function run() {
  new Vue({
    el: '#app',
    data: {
		users: [],
		usersService: null
    },
    created: function () {
      this.usersService = users();
      this.usersService.get().then(response => (this.users = response.data));
    },
    methods: {
		del: function(index){
			this.$delete(this.users, index);
		},
		add: function(){
			let username = document.getElementById("username");
			let usercity = document.getElementById("usercity");
			this.users.push({name: username.value, city: usercity.value});
		},
		modify: function(index){
			/**let username = document.getElementById("username");
			let usercity = document.getElementById("usercity");
			this.users.name[index] = username;
			this.users.city[index] = usercity;**/
		}
	}
  });
}

document.addEventListener('DOMContentLoaded', () => {
  run();
});
