//(function(document, localStorage){

  var collapseStuffContainers = document.getElementsByClassName("collapseStuff");
  for (var i=0; i < collapseStuffContainers.length; i++){
    
    collapseStuffContainers[i].addEventListener("click", function() {
      var labels = this.getElementsByClassName("collapse-label");
      var contents = this.getElementsByClassName("collapse-content");
      var containerId = this.id;

      for (var j=0; j<labels.length; j++){
        if(labels[j].classList.contains("collapse-show")) {
          setCollapseShown(labels, contents, j, containerId);
          console.log("i:"+i+" j:"+j);
          setLocalStorageStuff(containerId, (j+1)%labels.length);
          break;
        };
      };
    });
  };

  var setCollapseShown = function(labels, contents, location, containerId) {

    labels[location].classList.remove("collapse-show");
    labels[location].classList.add("collapse-hide");
    labels[(location+1)%labels.length].classList.add("collapse-show");
    labels[(location+1)%labels.length].classList.remove("collapse-hide");

    contents[location].classList.remove("collapse-show");
    contents[location].classList.add("collapse-hide");
    contents[(location+1)%labels.length].classList.add("collapse-show");
    contents[(location+1)%labels.length].classList.remove("collapse-hide");
  };

  var setLocalStorageStuff = function(id, locationToShow) {
    localStorage.setItem("collapseStuff>" + window.location.pathname + ">" + id, locationToShow);
    console.log(localStorage);
  };

  var getLocalStorageStuff = function(domId) {
    return localStorage.getItem("collapseStuff>" + window.location.pathname + ">" + domId);
  };

  var getLocalStorageStuffThisPage = function() {
    var allTheDomIds = [];
    for (var lskey in window.localStorage){
      var splitKey = lskey.split(">");
      if (splitKey[0] === "collapseStuff" && splitKey[1] === window.location.pathname){
        allTheDomIds.push(splitKey[2]);
      }
    }
    return allTheDomIds;
  };

  console.log(localStorage);

  var allTheThingsById = getLocalStorageStuffThisPage();

  var initCollapseShown = function(container, prevLocation) {    
    var labels = container.getElementsByClassName("collapse-label");
    var contents = container.getElementsByClassName("collapse-content");

    if (prevLocation > labels.length){
      prevLocation = 0;
    }

    for (var j=0; j<labels.length; j++){
      if (j === prevLocation){
        labels[j].classList.remove("collapse-hide");
        labels[j].classList.add("collapse-show");
        contents[j].classList.remove("collapse-hide");
        contents[j].classList.add("collapse-show");
      } else {
        labels[j].classList.remove("collapse-show");
        labels[j].classList.add("collapse-hide");
        contents[j].classList.remove("collapse-show");
        contents[j].classList.add("collapse-hide");
      }
    } 
  };

  var abcbutton = document.getElementById("abcbutton").addEventListener("click", function(){
    console.log(getLocalStorageStuff("collapseContainer2"));
    console.log(getLocalStorageStuff("collapseContainer2"));
    console.log(getLocalStorageStuff("collapseContainer2"));
  });
  

//}(document, localStorage));

