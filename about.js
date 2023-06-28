window.addEventListener("scroll", progressAll);

function progressAll() {
  const triggerProgress = (window.innerHeight / 6) * 4;
  const progressTop = document.getElementById("about-b");

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    // HTML

    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    // CSS

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    //SASS

    const progressSass = document.getElementById("progressDoneSass");
    progressSass.style.width = progressSass.getAttribute("data-done");
    progressSass.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("progressDoneBootstrap");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // JAVASCRIPT

    const progressJavscript = document.getElementById("progressDoneJavascript");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // REACT

    const progressReact = document.getElementById("progressDoneReact");
    progressReact.style.width = progressReact.getAttribute("data-done");
    progressReact.style.opacity = 1;
  }
}
// increment counter
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});


        const btn1 = document.querySelector( '#btn-1' );
        const text1 = document.querySelector( '.show-1' );
        btn1.addEventListener( 'click', function() {
            text1.classList.toggle( 'hide-1' )

            btn1.textContent == ">"
                ? ( btn1.textContent = "<" )
                : ( btn1.textContent = ">" );


        } )

        const btn2 = document.querySelector( '#btn-2' );
        const text2 = document.querySelector( '.show-2' );
        btn2.addEventListener( 'click', function() {
            text2.classList.toggle( 'hide-2' )

            btn2.textContent == ">"
                ? ( btn2.textContent = "<" )
                : ( btn2.textContent = ">" );


        } )

        const btn3 = document.querySelector( '#btn-3' );
        const text3 = document.querySelector( '.show-3' );
        btn3.addEventListener( 'click', function() {
            text3.classList.toggle( 'hide-3' )


            btn3.textContent == ">"
                ? ( btn3.textContent = "<" )
                : ( btn3.textContent = ">" );


        } )

    

