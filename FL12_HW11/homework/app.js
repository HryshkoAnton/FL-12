const structure = [
	{
		'folder': true,
		'title': 'Films',
		'children': [
		{
			'title': 'Iron Man.avi'
		},
		{
			'folder': true,
			'title': 'Fantasy',
			'children': [
			{
				'title': 'The Lord of the Rings.avi'
			},
			{
				'folder': true,
				'title': 'New folder 1',
				'children': false
			}
			]
		}
		]
	},
	{
		'folder': true,
		'title': 'Documents',
		'children': [
		{
			'folder': true,
			'title': 'EPAM Homework answers',
			'children': false
		}
		]
	}
];

const rootNode = document.getElementById('root');

let createElement = (el, cl) => {
  let div = document.createElement(el);
  div.classList.add(cl);
  return div;
}
const list = createElement('ul', 'list');
rootNode.appendChild(list);


function createElements(data, parent) {
  let childList;
  data.forEach(obj => {
	const li = createElement('li', 'folder');
	if (!obj.folder) {
		li.innerHTML = `<i class="material-icons">insert_drive_file</i>${obj.title}`;
	} else {
		li.innerHTML = `<i class="material-icons">folder</i><span class="caret">${obj.title}</span>`;
	}

	if (parent) {
		if (!childList) {
		childList = createElement('ul', 'nested');
		}
		childList.appendChild(li);
		parent.appendChild(childList);
  } else {
		list.appendChild(li);
	}

	let childLi;
	let isChildren = obj.children;
	if (isChildren) {
		const childUl = createElement('ul', 'nested');
		li.appendChild(childUl);
		obj.children.forEach(child => {
			childLi = createElement('li', 'childLi');
			if (!child.folder) {
				childLi.innerHTML = `<i class="material-icons">insert_drive_file</i>${child.title}`;
			} else {
			childLi.innerHTML = `<i class="material-icons">folder</i><span class="caret">${child.title}</span>`;
			}
			childUl.appendChild(childLi);
			if (child.children) {
				createElements(child.children, childLi);
			}
		});
	}
  });
}


createElements(structure);


let toggler = document.getElementsByClassName('caret');
let i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener('click', function() {
	if (this.parentElement.querySelector('.nested')) {
		this.parentElement.querySelector('.nested').classList.toggle('active');
	}
	this.classList.toggle('caret-down');
  });
}