<Code language='css'>
.style {
    visibility: hidden;
    /*
        *Efeito na Tela - O elemento fica oculto, mas continua a ocupar o espaço que normalmente ocuparia.
        *Efeito na Acessibilidade - O conteúdo é ignorado pelos leitores de tela.
    */
    display:none;
    /*
        *Efeito na Tela - O elemento fica oculto e não ocupa espaço.
        *Efeito na Acessibilidade - O conteúdo é ignorado pelos leitores de tela.
    */
    width: 0;
    height: 0;
    overflow: hidden;
    /*
        *Efeito na Tela - O elemento fica oculto e não ocupa espaço.
        *Efeito na Acessibilidade - O conteúdo é ignorado pelos leitores de tela.
    */
    text-indent: -999em;
    /*
        *Efeito na Tela - O conteúdo é movido para “fora da tela”, não sendo mais visível,
        *mas links podem ser focalizados de maneira imprevisível.
        *Efeito na Acessibilidade - Os leitores de tela acessam o conteúdo, mas somente
        *texto e elementos inline.
    */
    left: -999em;
    position: absolute;
    /*
        *Efeito na Tela - O conteúdo é removido de sua posição, não ocupando espaço e é
        *movido para “fora da tela”, ficando oculto.
        *Efeito na Acessibilidade - Os leitores de tela acessam o conteúdo.
    */
}  
</Code>