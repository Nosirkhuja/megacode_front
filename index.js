let users = [
	{
		name: 'name1',
		surname: 'surname1',
		lastname: 'patronymic1',
		phone: '976531',
		age: '19',
		group: '13B',
    pasportfside: '/img/tpassport.png',
    pasportBside: '/img/passport.jpg',
		add: 'poij',
		cancel: 'patronymic1',
		// status:'no'

	},
	{
		name: 'name1',
		surname: 'surname1',
		lastname: 'patronymic1',
		phone: '976531',
		age: '19',
		group: '13B',
    pasportfside: '/img/tpassport.png',
    pasportBside: '/img/passport.jpg',
		add: 'poij',
		cancel: 'patronymic1',
		// status:'no'

	},
	{name: 'name1',
  surname: 'surname1',
  lastname: 'patronymic1',
  phone: '976531',
  age: '19',
  group: '13B',
  pasportfside: '/img/tpassport.png',
  pasportBside: '/img/passport.jpg',
  add: 'poij',
  cancel: 'patronymic1',
//   status:'no'

	},
	{name: 'name1',
  surname: 'surname1',
  lastname: 'patronymic1',
  phone: '976531',
  age: '19',
  group: '13B',
  pasportfside: '/img/tpassport.png',
  pasportBside: '/img/passport.jpg',
  add: 'poij',
  cancel: 'patronymic1',
//   status:'no'

	},
	{name: 'name1',
  surname: 'surname1',
  lastname: 'patronymic1',
  phone: '976531',
  age: '19',
  group: '13B',
  pasportfside: '/img/tpassport.png',
  pasportBside: '/img/passport.jpg',
  add: 'poij',
  cancel: 'patronymic1',
//   status:'no'

	},
];
let table = document.getElementById('table');
let k= 'er';
for (let user of users) {
	
	let tr = document.createElement('tr');
	
	let td1 = document.createElement('td');
	td1.textContent = user.name;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = user.surname;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = user.lastname;
	tr.appendChild(td3);

	let td4 = document.createElement('td');
	td4.textContent = user.phone;
	tr.appendChild(td4);

	let td5 = document.createElement('td');
	td5.textContent = user.age;
	tr.appendChild(td5);

	let td6 = document.createElement('td');
	td6.textContent = user.group;
	tr.appendChild(td6);

  let td7 = document.createElement('td');
  td7.innerHTML = `<span id="big-photo"></span>
  <img onclick="open_photo('`+user.pasportfside+`')" class="photo" src="`+user.pasportfside+`"></img>`;
  	tr.appendChild(td7);

  let td8 = document.createElement('td');
  td8.innerHTML = `<span id="big-photo"></span>
  <img onclick="open_photo('`+user.pasportBside+`')" class="photo" src="`+user.pasportBside+`"></img>`;
  	tr.appendChild(td8);

  let td9 = document.createElement('td');
  td9.innerHTML = `<button onclick="FMA()">Добавить</button>`
  tr.appendChild(td9);


  let td10 = document.createElement('td');
  td10.innerHTML = `<button onclick="FMC()">Отклонить</button>`
  tr.appendChild(td10);
	
//   let td11 = document.createElement('td');
//   td11.textContent = user.status;
//   tr.appendChild(td11);

table.appendChild(tr);
}

function FMA(){
	// KA();
	k = 'added';
alert("Заявка добавлена");
}
function FMC(){
	k = "canceled";
alert("Заявка отклонена");
}
function open_photo(photo) {
	document.getElementById("big-photo").innerHTML =
	  ("<img onclick='close_photo()' style='position: absolute; height: 300px' src='" + photo + "'>")
  }
  
  function close_photo() {
	document.getElementById("big-photo").innerHTML = ""
  }
function FP(){

}