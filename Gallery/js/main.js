let resultContainer = document.querySelector('#result');
let countImages = document.querySelector('#count');
let addBtn = document.querySelector('#add')
let quantity = 0;

// Bootstrap Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Change name
let newName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();

// Change description
let newDescription = (descrp) =>  descrp.slice(0,15);

// Change date
let newDate = (date) => {
	let tmpDate = new Date(date);
	return `${tmpDate.getFullYear()}/${tmpDate.getMonth()}/${tmpDate.getDate()} ${tmpDate.getHours()}:${tmpDate.getMinutes()}`;
}


let appendChildElement = (element, ...appendElements) => {
	return appendElements.map((appendElement) => {
		return element.appendChild(appendElement);
	});
}

let createNodeElement = (tagElement, elementClass, nodeElement) => {
	nodeElement = document.createElement(tagElement);
	nodeElement.className = elementClass;
	return nodeElement;
}

let newElement = (item) => {

	let divLabel, divThumb, divCaption, headerLevelThree, description, date, img, button;
	
	divLabel = createNodeElement('div', 'col-md-3 col-sm-4 col-xs-6 text-center', divLabel);
	divThumb = createNodeElement('div', 'thumbnail', divThumb);
	divCaption = createNodeElement('div', 'caption', divCaption);

	headerLevelThree = document.createElement('h3');
	headerLevelThree.innerHTML = `${item.id}: ${item.name}`;

	description = document.createElement('p');
	description.innerHTML = item.description;

	date = description.cloneNode(true);
	date.innerHTML = item.date;

	img = document.createElement('img');
	img.src = item.url;
	img.alt = item.name;

	button = document.createElement('button');
	button.appendChild(document.createTextNode('Удалить'));
	button.className = 'btn btn-danger';
	button.setAttribute('onclick', 'removeElement(event)');

	appendChildElement(divCaption, headerLevelThree, description, date);
	appendChildElement(divThumb, img, divCaption, button);
	appendChildElement(divLabel, divThumb);
	appendChildElement(result, divLabel);
}

// Remove element
let removeElement = (event) => {
	event.target.parentNode.parentNode.remove();
	quantity--;
	showCurrentCount();
}

// Count elements
let showCurrentCount = () => countImages.innerHTML = quantity;

let run = () => {
	if (quantity < data.length) {
		newElement({
			url : data[quantity].url,
			name : newName(data[quantity].name),
			id : data[quantity].id,
			description : newDescription(data[quantity].description),
			date : newDate(data[quantity].date)
		});
		quantity++;
		countImages.innerHTML = quantity;
	} else {
		alert(`Sorry, no more elements.`);
	}
}

// Add event for run
addBtn.addEventListener('click', run);