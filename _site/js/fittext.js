// Fits text into a parent element, simple and easy. Written by Tyler Clarke for Bruce Wallenstein.

function fitText(el){
    el.style.fontSize = ""; // Clear previous fitting to avoid issues
    var parentDims = el.parentNode.getBoundingClientRect();
    var elDims = el.getBoundingClientRect();
    var modifier = ((parentDims.width - parseInt(getComputedStyle(el.parentNode).padding) * 2)/elDims.width);
    el.style.fontSize = modifier * parseInt(getComputedStyle(el).fontSize) + "px";
}
