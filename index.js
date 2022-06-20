
let content = document.querySelector('.js-generated.content')

let dogName = document.createElement('h1');
dogName.textContent = 'Rizzo';
dogName.setAttribute('class', 'dog-name');
content.append(dogName);

let dogContent = document.createElement('div');
dogContent.setAttribute('class', 'dog-content');
content.append(dogContent)


