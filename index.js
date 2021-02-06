const data = [
{
	//1
	'title': 'Efectul de seră',
	'link': 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.canva.com%2Fdesign%2FDAETgXi75Qc%2FKTImZLqK9VzU4lKvnXsIxg%2Fview%3Futm_content%3DDAETgXi75Qc%26utm_campaign%3Ddesignshare%26utm_medium%3Dlink%26utm_source%3Dsharebutton%26fbclid%3DIwAR05qxJmL6q1cdI59kQGPUT6S0IX5187VzRbs9-JTSa3DTyPImYgkZ-PiIE&h=AT38BGXpi2htHzMfEfQoRpX5tUL5_IAOA9RMkrQB_CW8jWYJjCWL92YTHUb0mVvlHPLAtxSMPwsSQFtBuDtQalI0Ly8bafq3wlZSQPqip4cGC_ZVCfhE0aQTFEl8CrrY3i2jlg'
}, {
	//2
	'title': 'Plita cu inducție',
	'link': 'https://l.facebook.com/l.php?u=https%3A%2F%2Fmariavasilache99.wixsite.com%2Fwebsite%3Ffbclid%3DIwAR3Iy5NQ4b4GRdvyR91ln1mgG5xmsJK-7bCscQbohV0oesPdzJWstTUWvEY&h=AT1C5RcjPOL56ALJPLUbgeypEwKNUIEemSvY05iygX0nN-JYtZ-PSfAJEiCiOxUIK2RVFQM0JlyUmECfUOWs4zhezCKWmdaqf-ktbKWFwcUN2JnMXup4zGTpeTeF0FoUI53Pew'
}, {
	//3
	'title': '',
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

			projectIcon.style.backgroundImage = "url('media/default.jpg')";

		boxContainer.appendChild(projectIcon);

		boxes++;

		if(boxes == 3)	boxes = 0;
	}
}
