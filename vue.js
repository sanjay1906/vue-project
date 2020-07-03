var testthe = 'hello im hare to tack';

Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.test}}</li>',
});

const chal = new Vue({
	el: '#app',
	data: {
		groceryList: [
			{ id: 0, text: 'Vegetables' },
			{ id: 1, text: 'Cheese' },
			{ id: 2, text: 'Whatever else humans are supposed to eat' },
		],
		message: testthe,
		seen: false,
		hello: 'hreh',
		todos: [{ test: 'henh' }, { test: 'tu ja' }],
		image: 'https://image.shutterstock.com/image-photo/butterfly-grass-on-meadow-night-260nw-1111729556.jpg',
		instock: false,
		not: false,
		value: 2,
		details: [
			{
				id: 1,
				color: 'red',
				image:
					'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEXuAAAEBsBwAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=',
			},
			{
				id: 2,
				color: 'blue',
				image: 'https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
			},
		],
	},
	methods: {
		thehere: function () {
			chal.todos.push({ test: 'function here' });
		},
		callme: function () {
			this.message = this.message.split('').reverse().join('');
		},
		update: function (imagehere) {
			this.image = imagehere;
		},
	},
});

chal.todos.push({ test: 'im here' });
