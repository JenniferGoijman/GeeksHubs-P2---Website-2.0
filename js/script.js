const Inicio = `<div id="boxGeneralito">
                    <div id="box1Inicio">
                        <div class="inicio">
                            <img src="../img/name.png" alt="Icono Nombre" class="elementoInicio">
                            Jennifer Judith Goijman
                            </div>
                        <div class="inicio">
                            <img src="../img/pastel.png" alt="Nombre" class="elementoInicio">
                            30 de agosto de 1991
                            </div>
                        <div class="inicio">
                            <img src="../img/phone.png" alt="Telefono" class="elementoInicio">
                            +346449433349
                            </div>
                        <div class="inicio">
                            <img src="../img/location.png" alt="Ubicación" class="elementoInicio">
                            Madrid, España
                            </div>
                        <div class="inicio">
                            <img src="../img/mail.png" alt="Email" class="elementoInicio">
                            jgoijman@gmail.com
                            </div>
                    </div>
                    <div id="box2Inicio">
                        <img src="../img/Foto CV.JPG" alt="Foto - JenniferGoijman" class="fotoCV">
                        </div>
                    <br>
                    <br>
                </div>`;
const SobreMi = `<div id="boxGeneralitoSobreMi">
                <div id="boxSobreMi1">
                    <p>Me defino como una persona práctica, organizada y versátil. Me gusta trabajar en equipo, adquirir
                        nuevos conocimientos y desafiarme constantemente. </p><br>
                </div>
                <div id="boxSobreMi2">
                    <p>Luego de terminar el <a href="https://www.ort.edu.ar/" id="edu">Bachillerato con orientación en
                            Informática</a>, obtuve la <a href="http://www.uba.ar/" id="edu">Licenciatura en Psicología</a>
                        mientras me desenvolvía profesionalmente en el mundo IT.</p><br>
                </div>
                <div id="boxSobreMi3">
                    <p>En el último año estuve trabajando en diferentes países de Europa en el área de servicio, lo que me
                        permitió desarrollar mi flexibilidad, mejorar mi fluidez en inglés y motivarme a estudiar alemán.
                    </p><br>
                </div>
                <div id="boxSobreMi4">
                    <p>Mi objetivo para el 2020 es reciclarme profesionalmente, es por ello que estoy realizando el Bootcamp
                        Full Stack Developer de GeeksHubs en Madrid. </p>
                </div>
</div>`;
const Tecnologias = `<div id="boxTecnologias">
                    <p>Tecnologías utilizadas:</p><br>
                    <div class="skills">
                        <a href="https://www.w3.org/" target="_blank"><img class="elementoSkillsV" src="../img/html.png" alt="Logo HTML5"></a>
                        <a href="https://www.w3.org/" target="_blank"><img class="elementoSkillsV" src="../img/css.png" alt="Logo CSS3"></a>
                        <a href="https://www.w3.org/" target="_blank"><img class="elementoSkillsV" src="../img/js.png" alt="Logo JS"></a>
                        <a href="https://git-scm.com/" target="_blank"><img class="elementoSkillsV" src="../img/git.png" alt="Logo Git"></a>
                        <a href="https://es.reactjs.org/" target="_blank"><img class="elementoSkillsV" src="../img/react.png" alt="Logo React"></a>
                        <a href="https://angular.io/" target="_blank"><img class="elementoSkillsV" src="../img/angular.png" alt="Logo Angular"></a>
                        <a href="https://www.mysql.com/" target="_blank"><img class="elementoSkillsV" src="../img/mysql.png" alt="Logo MySQL"></a>
                        <a href="https://www.mongodb.com/es" target="_blank"><img class="elementoSkillsH" src="../img/mongo.png" alt="Logo MongoDB"></a>
                        <a href="https://laravel.com/" target="_blank"><img class="elementoSkillsV" src="../img/laravel.png" alt="Logo Laravel"></a>
                        <a href="https://www.php.net/" target="_blank"><img class="elementoSkillsH" src="../img/php.png" alt="Logo PHP"></a>
                        <a href="https://jquery.com/" target="_blank"><img class="elementoSkillsV" src="../img/jquery.png" alt="Logo jQuery"></a>
                        <a href="https://www.typescriptlang.org/" target="_blank"><img class="elementoSkillsV" src="../img/typescript.png" alt="Logo TypeScript"></a>
                        <a href="https://nodejs.org/es/" target="_blank"><img class="elementoSkillsV" src="../img/nodejs.png" alt="Logo NodeJS"></a>
                        </div>
                        </div>`;
const Contacto = `<div id="boxGeneralitoContacto">
                    <div id="box1">
                        <p>Puedes ponerte en contacto completando el siguiente formulario y responderé a la brevedad.</p>
                    </div>
                    <div id="box2">
                        <form action="">
                            <div class="datos">
                                <label for="name">Nombre:</label>
                                <input type="text" class="name" placeholder="Nombre completo" required>
                            </div>
                            <div class="datos">
                                <label for="email">Email:</label>
                                <input type="email" name="email" placeholder="Email" required>
                            </div>
                            <div class="datos">
                                <label for="phone">Teléfono:</label>
                                <input type="tel" name="phone" placeholder="Teléfono" required>
                            </div>
                            <div class="datos">
                                <label for="message">Mensaje:</label>
                                <textarea name="message" rows="5" placeholder="Mensaje"></textarea>
                            </div>
                            <div class="datos2">
                                <input type="submit" id="aceptar" value="Aceptar">
                            </div>
                        </form>
                    </div>
                    </div>`;

const main = document.querySelector('main');
window.addEventListener('load',()=>{
    if(window.location.hash==='#sobremi'){
        main.innerHTML = SobreMi
    }else  if(window.location.hash==='#tecnologias'){
        main.innerHTML = Tecnologias
    }else  if(window.location.hash==='#contacto'){
        main.innerHTML = Contacto
    }else{
        main.innerHTML = Inicio
    }
})

document.querySelector('#botonInicio').addEventListener('click', ()=>{
    main.innerHTML = Inicio;
    history.pushState({},'','#');
});
document.querySelector('#botonSobreMi').addEventListener('click',()=>{
    main.innerHTML = SobreMi;
    history.pushState({},'','#sobremi');
})
document.querySelector('#botonTecnologias').addEventListener('click',()=>{
    main.innerHTML = Tecnologias;
    history.pushState({},'','#tecnologias');
})
document.querySelector('#botonContacto').addEventListener('click',()=>{
    main.innerHTML = Contacto;
    history.pushState({},'','#contacto');
})


//CAMBIAR ESTO
//SI APRIETA BOTON ACEPTAR, GUARDAR PERSONA.NOMBRE, PERSONA.EMAIL, PERSONA.TELEFONO, PERSONA.MENSAJE.
/*var usernameInput = document.querySelector('.username'); 
var textoUsuario = document.querySelector('#textoUsuario');
usernameInput.addEventListener('keyup', function (event) {
    usuario.username = event.target.value;
    textoUsuario.innerHTML = event.target.value; //el innerHTML es para meter texto 
})

console.log(usuario);*/