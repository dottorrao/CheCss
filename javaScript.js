var oldPiece = ""
var oldTd = "";

function tdClick(e,td){
	td = document.getElementById(td.id);
	if ( oldTd == "") {
		if (td.innerHTML.indexOf("<img") != -1 ){
			oldTd = td;
			oldPiece = td.innerHTML;
			td.classList.add('selected');
		}
	} else {
		if ( td == oldTd ) {
			oldTd.classList.remove('selected');
		} else {
			td.innerHTML = oldPiece;
			oldTd.innerHTML = "";
			oldTd.classList.remove('selected');
		}
		oldTd = "";
		oldPiece = "";
	}
}; 