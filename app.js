
function $(element_id){
    return document.getElementById(element_id);
}

function setSrc(element_id, src){
    var element = $(element_id);
    element.src = src;
}

/* Hay que mirar com hacer para apuntar solo a una zona para el click */

/* Hay que tener una funcion que le pases todas las categorias para que asi 
pueda hacer una funcion para el desplegable, no sabemois cuantas categorias tenemos en cada moemento */


function validar(){
    var titulo, deadline, category, description;
    titulo = document.getElementById("input-title").value;
    deadline = document.getElementById("input-deadline").value;
    description = document.getElementById("input-description").value;

    if(titulo === ""){
        addError("El campo titulo está vacío");
        return false;
    }
    else if(deadline === ""){
        addError("El campo deadline está vacío");
        return false;
    }
    
    else if(category=""){
        addError("El campo category está vacío");
        return false;
    }
    
    else if(description === ""){
        addError("El campo description está vacío");
        return false;
    }
    else if(titulo.length > 100){
        addError("El campo titulo es demasiado largo");
        return false;
    }
    else if(description.length > 1000){
        addError("El campo description es demasiado largo");
        return false;
    }
    
    return true;
}

function addError(text_error){
    document.getElementById("error-container").insertAdjacentText("beforeend", text_error);
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

function removeError(){
    //Buscamos por id
    var contenedor = document.getElementById ("error-container");
    
    //Asignamos a variable item el elemento con id ='item2'de la lista
    contenedor.removeChild();
}


// Menu depleglable colores

function toggleClass(elem,className){
	if (elem.className.indexOf(className) !== -1){
		elem.className = elem.className.replace(className,'');
	}
	else{
		elem.className = elem.className.replace(/\s+/g,' ') + 	' ' + className;
	}
	
	return elem;
}

function toggleDisplay(elem){
	const curDisplayStyle = elem.style.display;			
				
	if (curDisplayStyle === 'none' || curDisplayStyle === ''){
		elem.style.display = 'block';
	}
	else{
		elem.style.display = 'none';
	}
}


function toggleMenuDisplay(e){
	const dropdown = e.currentTarget.parentNode;
	const menu = dropdown.querySelector('.menu');
	const icon = dropdown.querySelector('.fa-angle-right');

	toggleClass(menu,'hide');
	toggleClass(icon,'rotate-90');
}


//Seleccionar alguno del desplegable
function handleOptionSelected(e){
	toggleClass(e.target.parentNode, 'hide');			

	const id = e.target.id;
	const newValue = e.target.textContent + ' ';
	const titleElem = document.querySelector('.dropdown .title');
	const icon = document.querySelector('.dropdown .title .fa');


	titleElem.textContent = newValue;
	titleElem.appendChild(icon);
	
	//Activa evento personalizado
	document.querySelector('.dropdown .title').dispatchEvent(new Event('change'));
	//setTimeout se usa para que la transición se muestre correctamente
	setTimeout(() => toggleClass(icon,'rotate-90',0));
}

function handleTitleChange(e){
    const result = document.getElementById('result');
  
    result.innerHTML = 'The result is: ' + e.target.textContent;
  }

function menuColores(){

    //get elements
    const dropdownTitle = document.querySelector('.dropdown .title');
    const dropdownOptions = document.querySelectorAll('.dropdown .option');

    //bind listeners to these elements
    dropdownTitle.addEventListener('click', toggleMenuDisplay);

    dropdownOptions.forEach(option => option.addEventListener('click',handleOptionSelected));

    document.querySelector('.dropdown .title').addEventListener('change',handleTitleChange);
}
