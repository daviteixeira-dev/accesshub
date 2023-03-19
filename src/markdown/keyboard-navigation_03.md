<Code language='html'>
    &lt;script&gt;
        document.addEventListener("keydown", function(event){

            let elementsWithTabIndex = Array.from(document.querySelectorAll("[tabindex]"));
            let currentIndex = elementsWithTabIndex.indexOf(document.activeElement);

            switch (event.key) {
                case "ArrowLeft":
                    if (currentIndex > 0){
                        elementsWithTabIndex[currentIndex - 1].focus();
                    }
                    break;
                case "ArrowUp":
                    if (currentIndex > 0){
                        elementsWithTabIndex[currentIndex - 1].focus();
                    }
                    break;
                case "ArrowRight":
                    if (currentIndex < elementsWithTabIndex.length - 1){
                        elementsWithTabIndex[currentIndex + 1].focus();
                    }
                    break;
                case "ArrowDown":
                    if (currentIndex < elementsWithTabIndex.length - 1){
                        elementsWithTabIndex[currentIndex + 1].focus();
                    }
                    break;
            }
        });
    &lt;/script&gt;
</Code>