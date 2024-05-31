// Função para carregar arquivos CSS
function loadCSS(url) {
	const link = document.createElement('link');
	link.rel = 'stylesheet';
	link.href = url;
	document.head.appendChild(link);
}

// Função para carregar arquivos JavaScript
function loadJS(url) {
	const script = document.createElement('script');
	script.src = url;
	document.head.appendChild(script);
}
//css


//bootstrap
loadCSS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css")
loadJS("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")

//lib-animation

//font awesome
loadJS("https://kit.fontawesome.com/315d06e96d.js")
