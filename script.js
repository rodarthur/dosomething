(function(doc, localStorage){
  var showInstructions = document.getElementById("inst-checkbox");
  var lblInstructions = document.getElementById("inst-checkboxdialog");
  var content = document.getElementById("inst-content");

  if (typeof localStorage.showInstructions === 'undefined' || (localStorage.showInstructions !== 'true' && localStorage.showInstructions !== 'false')){
    localStorage.setItem("showInstructions", "true");
    showInstructions.checked = true;
  } else {
    showInstructions.checked = (localStorage.getItem('showInstructions') === 'true');
  }

  var toggleInstructions = function() {
    if (showInstructions.checked) {
      content.classList.remove('hideThis');
      localStorage.setItem("showInstructions", "true");
      lblInstructions.textContent = "Hide Instructions";
    } else {
      content.classList.add('hideThis');
      localStorage.setItem("showInstructions", "false");
      lblInstructions.textContent = "Show Instructions";    
    }
  }

  toggleInstructions();
  document.getElementById("inst-checkbox").addEventListener("click", toggleInstructions);

}(document, localStorage));