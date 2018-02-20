var oldPiece = ""
var oldTd = "";

function tdClick(e,td){
	/*get selected TD*/
	td = document.getElementById(td.id);
	/*if it's beginning of the moving*/
	if ( oldTd == "") {
		/* only if a cell with a piece has been selected*/
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