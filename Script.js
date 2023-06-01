document.getElementsByTagName("ul")[0].addEventListener("click", function(evt) {

    document.getElementById("menuToggler").checked = false;
  
    function handleTransitionEnd(transitionEvent) {
      
     
      let contentDivs = document.querySelectorAll("main div");
      for (var i = 0; i < contentDivs.length; i++) {
        contentDivs[i].style.display = "none";
      }
  
      let contentDiv = document.getElementById(contentId.substr(1));
      contentDiv.style.display = "inherit";
      
     
      sidebar.removeEventListener("transitionend", handleTransitionEnd);
    }
    
    sidebar.addEventListener("transitionend", handleTransitionEnd);
  });
  