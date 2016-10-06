class Gallery {
    
	constructor(data) {
		this.resultContainer = document.querySelector('#result');
		/*
        This method runs construcor
        **/
        this.countImages = document.querySelector('#count');
		this.addBtn = document.querySelector('#add');
		this.quantity = 0;
        this.data = data;
        
        $('[data-toggle="tooltip"]').tooltip();
        this.addBtn.addEventListener('click', (event) => this.add(event) );
	}

	add(event) {
        event.preventDefault();
        if (this.quantity < this.data.length) {
            this.createImageElement({
                url     : this.data[this.quantity].url,
                name    : this.newName(this.data[this.quantity].name),
                id      : this.data[this.quantity].id,
                date    : this.newDate(this.data[this.quantity].date),
                description : this.newDescription(this.data[this.quantity].description)
            });
            this.quantity++;
            this.countImages.innerHTML = this.quantity;
        } else {
            alert(`Sorry, no more elements.`);
        }
    }


	newName(name) {
		return name[0].toUpperCase() + name.slice(1).toLowerCase();
	}

	
	newDescription(descrp) {
		return descrp.slice(0,15);
	}

	
	newDate(date) {
	   let tmpDate = new Date(date);
	   return `${tmpDate.getFullYear()}/${tmpDate.getMonth()}/${tmpDate.getDate()} ${tmpDate.getHours()}:${tmpDate.getMinutes()}`;
    }
    
    appendChildElement (element, ...appendElements) {
        return appendElements.map((appendElement) => {
            return element.appendChild(appendElement);
        });    
    }
    createNodeElement (tagElement, elementClass, nodeElement) {
        nodeElement = document.createElement(tagElement);
        nodeElement.className = elementClass;
        return nodeElement;
    }
    
    createImageElement (item) {

        let divLabel, divThumb, divCaption, headerLevelThree, description, date, img, button;

        divLabel = this.createNodeElement('div', 'col-md-3 col-sm-4 col-xs-6 text-center', divLabel);
        divThumb = this.createNodeElement('div', 'thumbnail', divThumb);
        divCaption = this.createNodeElement('div', 'caption', divCaption);

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
        button.addEventListener('click', (event) => this.removeElement(event));

        this.appendChildElement(divCaption, headerLevelThree, description, date);
        this.appendChildElement(divThumb, img, divCaption, button);
        this.appendChildElement(divLabel, divThumb);
        this.appendChildElement(result, divLabel);
    }

    removeElement (event) {
        event.target.parentNode.parentNode.remove();
        this.quantity--;
        this.showCurrentCount();
    }

    showCurrentCount () {
        this.countImages.innerHTML = this.quantity;
    }
}

var gallery = new Gallery(data);






