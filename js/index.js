let addCar = (name, model, year,  owner, phone, image) => ({name, model, year,  owner, phone, image});

let log = (text, type, date = new Date() ) => ({text, type, date })

let cars = [
	addCar('Audi', 'A7', '2017', 'Sergey Ivanovich', '+38(050)-123-12-07', 'Image/audi.jpg'),
	addCar('BMW', 'X6', '2017', 'Nikita', '+38(050)-123-12-02', 'Image/bmw.jpg'),
	addCar('Chevrolet', 'Camaro', '2012', 'Valeriy', '+38(050)-123-03', 'Image/chevrolet.jpg'),
	addCar('Ford', 'Mustang', '2014', 'Artem', '+38(050)-123-12-04', 'Image/ford_mustang.jpg'),
	addCar('Hyundai', 'Tucson', '2018', 'Ekaterina', '+38(050)-123-12-05', 'Image/hyundai.jpg'),
	addCar('Mazda', '3', '2007', 'Artem', '+38(050)-123-12-01', 'Image/mazda3.jpg'),
	addCar('Porche', 'Turbo911', '2016', 'Andrey', '+38(050)-123-12-06', 'Image/porche.jpg'),
];

let app = new Vue({
	el: '#app',
	data: {
		cars: cars,
		activeCar: cars[0],
		logs: [],
		selectCarIndex: 0,
		showPhone: false,
		search: '',
		modalShow: false,
	},
	methods: {
		selectCar: function (index) {
			this.activeCar = cars[index]
			this.selectCarIndex = index
		},
		newOrder() {
			this.modalShow = false
			this.logs.push(
				log(`Success oreder ${this.activeCar.name} - ${this.activeCar.model}`, 'ok')
				)
		},
		cancelOrder() {
			this.modalShow = false	
			this.logs.push(
				log(`Canceled order ${this.activeCar.name} - ${this.activeCar.model}`, 'cnl')
				)
		}
	},
	computed: {
		phoneBtnText() {
			return this.showPhone ? 'Hide Phone' : 'Show Phone'
		},
		filteredCars() {
			 return this.cars.filter(activeCar => {
				return activeCar.name.indexOf(this.search) > -1 || activeCar.model.indexOf(this.search) > -1;
			})
		}
	},
	filters: {
		date(value) {
			return value.toLocaleString()
		}
	},

});



