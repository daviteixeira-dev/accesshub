<Code language='html'>

Código HTML

&lt;div class="getMascara"&gt;&lt;/div&gt;
&lt;button title="Máscara de leitura" onclick="ReadMask()"&gt;M&lt;/button&gt;

Código CSS

&lt;style&gt;

.mascara {
    top: 50%;
    left: 50%;
    width: 99%;
    height: 10rem;
    z-index: 9999;
    position: absolute;
    pointer-events: none;
    border: 2px dashed #000;
    transform: translate(-50%, -50%);
    background-color: rgba(0,0,0,0.3);
    box-shadow: 0px 0px 10px 5px rgba(0,0,0,0.5);
}

.focarr {
    filter: brightness(1.8);
}

&lt;/style&gt;

Código JavaScript

&lt;script&gt;
    let getMascara = document.querySelector("getMascara");

    function ReadMask(){
        let divMascara = document.querySelector('.getMascara');

        if(divMascara.classList.contains('mascara')){

            divMascara.classList.remove('mascara');
            divMascara.classList.remove('focar');

        }else{

            divMascara.classList.add('mascara');
            divMascara.classList.add('focar');
            atualizarPosicaoMascara();

        }
    }

    function atualizarPosicaoMascara(event){
        let mascara = document.querySelector('.mascara');

        if (mascara) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            mascara.style.top = "${
                event.clientY + scrollTop - mascara.offsetHeight / 2
            }px";
        }
    }

    document.addEventListener("mousemove", atualizarPosicaoMascara);
    window.addEventListener("scroll", atualizarPosicaoMascara);
    window.addEventListener("resize", atualizarPosicaoMascara);
&lt;/script&gt;
</Code>