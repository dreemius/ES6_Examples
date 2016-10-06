var newItem = {};
var resultContainer = $('#result');
var countImages = document.getElementById('count');
var quantity = 0;

// Bootstrap Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Change name
function newName(name) {
	return editName = name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// Change description
function newDescription(descrp) {
	return editDescrp = descrp.slice(0,15);
}

// Change date
function newDate(date) {
	var tmpDate = new Date(date);
	return tmpDate.getFullYear() + '/' +
           tmpDate.getMonth() + '/' +
           tmpDate.getDate() + ' ' +
           tmpDate.getHours() + ':' +
           tmpDate.getMinutes();
}

function newElement(item) {

	var divLabel, img, secondDiv, nameDiv, descriptionDiv, dateDiv, button;
	
	divLabel = document.createElement('div');
	divLabel.className = 'col-md-3 col-sm-4 col-xs-6 text-center';

	divThumb = document.createElement('div');
	divThumb.className = 'thumbnail';

	divCaption = document.createElement('div');
	divCaption.className = 'caption';

	headerThree = document.createElement('h3');
	headerThree.innerHTML = item.id + ': ' + item.name;

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


	divCaption.appendChild(headerThree);
	divCaption.appendChild(description);
	divCaption.appendChild(date);

	divThumb.appendChild(img);
	divThumb.appendChild(divCaption);
	divThumb.appendChild(button);
	divLabel.appendChild(divThumb);

	result.appendChild(divLabel);
}

// Remove element
function removeElement(event) {
	event.target.parentNode.parentNode.remove();
	quantity--;
	showCurrentCount();
}

// Count elements
function showCurrentCount() {
	countImages.innerHTML = quantity;
}

// Add event for run
document.getElementById('add').addEventListener('click', run);

function run() {
	if (quantity < data.length) {
		newItem = {
			url : data[quantity].url,
			name : newName(data[quantity].name),
			id : data[quantity].id,
			description : newDescription(data[quantity].description),
			date : newDate(data[quantity].date)
		};
		newElement(newItem);
		quantity++;
		countImages.innerHTML = quantity;
	} else {
		alert('Sorry, no more elements.');
	}
}