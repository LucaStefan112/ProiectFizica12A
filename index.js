const data = [
{
	//1
	'title': 'asdasd',
	'link': 'asdasda'
}, {
	//2
	'title': 'adsasd',
	'link': ''
}, {
	//3
	'title': 'asdasd',
	'link': ''
}, {
	//4
	'title': '',
	'link': ''
}, {
	//5
	'title': '',
	'link': ''
}, {
	//6
	'title': '',
	'link': ''
}, {
	//7
	'title': '',
	'link': ''
}, {
	//8
	'title': '',
	'link': ''
}, {
	//9
	'title': '',
	'link': ''
}, {
	//10
	'title': '',
	'link': ''
}, {
	//11
	'title': '',
	'link': ''
}, {
	//12
	'title': '',
	'link': ''
}, {
	//13
	'title': '',
	'link': ''
}, {
	//14
	'title': '',
	'link': ''
}, {
	//15
	'title': '',
	'link': ''
}, {
	//16
	'title': '',
	'link': ''
}, {
	//17
	'title': '',
	'link': ''
}, {
	//18
	'title': '',
	'link': ''
}, {
	//19
	'title': '',
	'link': ''
}, {
	//20
	'title': '',
	'link': ''
}, {
	//21
	'title': '',
	'link': ''
}, {
	//22
	'title': '',
	'link': ''
}, {
	//23
	'title': '',
	'link': ''
}, {
	//24
	'title': '',
	'link': ''
}, {
	//25
	'title': '',
	'link': ''
}, {
	//26
	'title': '',
	'link': ''
}, {
	//27
	'title': '',
	'link': ''
}, {
	//28
	'title': '',
	'link': ''
}, {
	//29
	'title': '',
	'link': ''
}, {
	//30
	'title': '',
	'link': ''
}, {
	//31
	'title': '',
	'link': ''
}, {
	//32
	'title': '',
	'link': ''
}, {
	//33
	'title': '',
	'link': ''
}, {
	//34
	'title': '',
	'link': ''
}, {
	//35
	'title': '',
	'link': ''
}];

const mainBox = document.getElementById('mainBox');

let boxes = 0, boxRowContainer, boxRow;

function UrlExists(url){
    let http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

for(let cnt = 0; cnt < 35; cnt++){
	let info = data[cnt];
	if(info.title != ''){
		if(boxes == 0){
			boxRowContainer = document.createElement('div');
			boxRowContainer.id = 'boxRowContainer';
			mainBox.appendChild(boxRowContainer);
			boxRow = document.createElement('div');
			boxRow.id = 'boxRow';
			boxRow.style = 'width: 90%';
			boxRowContainer.appendChild(boxRow);
		}

		let boxContainer = document.createElement('div');
		boxContainer.id = 'boxContainer';
		boxRow.appendChild(boxContainer);

		let projectTitle = document.createElement('h1');
		projectTitle.id = 'projectTitle';
		projectTitle.textContent = info.title;
		boxContainer.appendChild(projectTitle);

		let projectIcon = document.createElement('a');
		projectIcon.id = 'projectIcon';
		projectIcon.target = '_blank';
		projectIcon.href = info.link;

		if(UrlExists("media/" + (cnt + 1) + ".png"))

			projectIcon.style.backgroundImage = "url('media/" + (cnt + 1) + ".png')";

		else if(UrlExists("media/" + (cnt + 1) + ".jpeg"))

			projectIcon.style.backgroundImage = "url('media/" + (cnt + 1) + ".jpeg')";

		else if(UrlExists("media/" + (cnt + 1) + ".jpg"))

			projectIcon.style.backgroundImage = "url('media/" + (cnt + 1) + ".jpg')";

		else

			projectIcon.style.backgroundImage = "url('media/default.png')";

		boxContainer.appendChild(projectIcon);

		boxes++;

		if(boxes == 3)	boxes = 0;
	}
}