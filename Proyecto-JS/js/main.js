$(document).ready(function(){
	
	/*PAGINA INDEX*/
	//slider
	if(window.location.href.indexOf('index') > -1){
		$('.bxslider').bxSlider({
			mode: 'fade',
			captions: true,
			slideWidth: 1200
		});
	
	//posts

	var posts = [
		{
			titulo: "Titulo 1", 
			date: 'Publicado el dia '+ moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"), 
			contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			titulo: "Titulo 2", 
			date: 'Publicado el dia '+ moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"), 
			contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			titulo: "Titulo 3", 
			date: 'Publicado el dia '+ moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"), 
			contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			titulo: "Titulo 4", 
				date: 'Publicado el dia '+ moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"), 
			contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		},
		{
			titulo: "Titulo 5", 
			date: 'Publicado el dia '+ moment().date() + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"), 
			contenido: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmodtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,	quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.	Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod	tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodoconsequat. Duis aute irure dolor in reprehenderit in voluptate velit esse	cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
		}
	];
		
	for(var index in posts)	{
		var post = `
			<article class="post">
					<h2>${posts[index].titulo}</h2>
					<span class="date">${posts[index].date}</span>
					<p>
						${posts[index].contenido}
					
						
					</p>
					<a href="#" class="button-more">Leer mas</a>
				</article>
		`;
		
		$("#posts").append(post)
	}
	}
	/* ${} es la forma de indicar que dentro habra contenido js */
	
	//selector de tema
	var red = $("#to-red");
	var blue = $("#to-blue");
	var green = $("#to-green");
	
	green.css("cursor", "pointer");
	red.css("cursor", "pointer");
	blue.css("cursor", "pointer");
	
	
	red.click(function(){
		
		$("#theme").attr("href", "css/red.css")
	});
	
	blue.click(function(){
		
		$("#theme").attr("href", "css/blue.css")
	});
	
	green.click(function(){
		
		$("#theme").attr("href", "css/green.css")
	});
	
	//scroll arriba

	$(".subir").click(function(e){

			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			},  500);

			return false;
		});
	
	//login
	$("#login form").submit(function(){
		
		var name = $("#name").val(); //saca el valor del edit
		localStorage.setItem("for_name", name); //agrega el valor al localstorage
	});
	
	var for_name = localStorage.getItem("for_name"); // consigue el valor del local storage
	
	if(for_name != null && for_name != "undefined"){
		var about_p = $("#about p")
		about_p.html("<br><strong>Bienvenido, "+ for_name + "</strong> ");
		about_p.append("<a href='#' id='logout'>Cerrar sesion</a>");
		$("#login").hide();
		
		$("#logout").click(function(){
			
			localStorage.clear();
			location.reload();
		});
	}
	
	/*PAGINA SOBRE MI*/
	if(window.location.href.indexOf('about') > -1){
		
		$("#acordeon").accordion();
	}
	
	/*RELOJ*/
	if(window.location.href.indexOf('reloj') > -1){
		
		setInterval(function(){
			
			var reloj = moment().format("hh:mm:ss");
			$("#reloj").html(reloj);
		},  1000);
			
	}
	
	if(window.location.href.indexOf('contacto') > -1){
		
		$('form input[name="date"]').datepicker({
			dateFormat: 'dd-mm-yy'
		});
		$.validate({
			lang: 'es'
			
		});
	}
});




