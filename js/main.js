/*		js/main.js		*/

$(document).on("ready", function iniciarEdesign() {

	var indexSeccion = 0;
	$("#add-seccion div").on("click", function () {
		if ($(this).hasClass("plus")) {
			$(".seccion").eq(indexSeccion-1).hide();

			$(this).text("-");
			$(this).removeClass("plus");
			$(this).addClass("minus");
			$("#escenario").append("<div id=\"seccion" + indexSeccion + "\" class=\"seccion\"></div>");
			$("#opciones-seccion").slideDown(300);
			indexSeccion+=1;

		} else if ($(this).hasClass("minus")) {
			$(this).text("+");
			$(this).removeClass("minus");
			$(this).addClass("plus");
			$("#opciones-seccion").slideUp(300);
		}
	})

	$(".add-image :radio").on("click", function () {
		console.log($(this).val());
		if ($(this).val() == "si") {
			// alert("SI!");
			$("#tipo-imagen").fadeIn(300);
		} else if ($(this).val() == "no") {
			$("#tipo-imagen").fadeOut(300);
			$("#add-image").slideUp(300);
			$("#cual-boton").slideUp(300);

		};
	})

	$("select#tipo-imagen").on("change", function () {
		// alert("WORKS!");
		$(".tipo").each(function (i, val) {
			$(this).slideUp(300);
		})
		var tipoImagen = $(this).val();

		$("#add-image").slideDown(300);	
		switch(tipoImagen){
			
			case  "fondo":
				break;

			case  "cuadro-texto":
				break;
		
			case  "texto":
				break;
		
			case  "boton":
				$("#cual-boton").slideDown(300);	
				break;

			default:
				$("#add-image").slideUp(300);	
				break;
		}


	})


	var tipoBoton;
	$("#cual-boton :radio").on("change", function () {
		tipoBoton = $(this).val();
	})
			
	$("#add-image :button").on("click", function () {
		
		if($("#add-image :file").val() == "" || $("#add-image :file").val() == " "){
			// alert("vacio");d
		} else {
			$(".print").fadeIn(300);
			var fileName = $("#add-image :file").val().replace("C:\\fakepath\\", "");
			var tipoImagen = $("select#tipo-imagen").val();
			

			switch(tipoImagen){
		
				case  "fondo":				
					$("#seccion" + (indexSeccion-1) ).append("<div class=\"fondo\"> <img src='img/" + fileName + "'></div>");
					$(".seccion div").draggable();
					$(".seccion .fondo").draggable("destroy");
				break;

				case  "cuadro-texto":
					$("#seccion" + (indexSeccion-1) ).append("<div class=\"cuadro-texto\"> <img src='img/" + fileName + "'></div>");				
					$(".seccion div").draggable();
				break;

				case  "texto":				
					$("#seccion" + (indexSeccion-1) ).append("<div class=\"texto\"> <img src='img/" + fileName + "'></div>");				
					$(".seccion div").draggable();
				break;
			
				case  "boton":
					switch(tipoBoton){
						case "siguiente":
							$("#seccion" + (indexSeccion-1) ).append("<div class=\"boton siguiente\"> <img src='img/" + fileName + "'></div>");				
						break;

						case "anterior":
							$("#seccion" + (indexSeccion-1) ).append("<div class=\"boton anterior\"> <img src='img/" + fileName + "'></div>");				
						break;

						case "volver":
							$("#seccion" + (indexSeccion-1) ).append("<div class=\"boton volver\"> <img src='img/" + fileName + "'></div>");				
						break;

						case "atras":
							$("#seccion" + (indexSeccion-1) ).append("<div class=\"boton atras\"> <img src='img/" + fileName + "'></div>");				
						break;

						case "iniciar":
							$("#seccion" + (indexSeccion-1) ).append("<div class=\"boton iniciar\"> <img src='img/" + fileName + "'></div>");				
						break;

						case "comenzar":
							$("#seccion" + (indexSeccion-1) ).append("<div class=\"boton comenzar\"> <img src='img/" + fileName + "'></div>");				
						break;

						default:
							break;
					}
					$(".seccion div").draggable();
										
				break;

				default:
					
					break;
			}
		}
		$("#add-image :file").val("");
	})

	var codigo;
	$(".print :button").on("click", function () {
		codigo = $("#escenario").html();
		codigo = codigo.replace(/ style="display: none;"/g, "").replace(/ ui-draggable/g, "").replace(/></g, ">\n<").replace(/<img/g, "\n\t<img").replace("    	", "");

		
		$("#codigo pre").text(codigo);
		// $("#codigo pre").snippet("html", {style:"typical", showNum:true});
		$("#codigo").fadeIn(300);

		 // alert(codigo);
		$("#copiar-codigo").zclip({
	        copy: $("#codigo pre").text(),
	        afterCopy: function(){
	           alert("Copiado al clipboard!\nPégalo en un nuevo archivo de HTML");
	        }
	    });

	})
	$("#codigo .cerrar").on("click", function () {
		$(".seccion div").draggable();
		$("#codigo").fadeOut(300);
	})

	

})


