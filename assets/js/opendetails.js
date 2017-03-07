if (window.innerWidth > 768) {
	var descriptions = document.getElementsByTagName('details');

	for (i = 0; i < descriptions.length; i++) {
        descriptions[i].setAttribute("open", "open");  
    }

}