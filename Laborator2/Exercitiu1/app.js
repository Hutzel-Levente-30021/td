var app = new Vue({
	el: '#app',
	data:{
		message: ''
	},
	methods:{
		process: function(){
			message = document.getElementById("message");
			let res = 'Mesajul este egal cu ' + message.value;
			$('#result').html(res);
		}
	}
})