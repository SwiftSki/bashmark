//add stuff to add accounts to the json
//notify when new accounts are created
//check for duplicate accounts

function createId(){
  var id = prompt('what would you like you id to be?');
  //add something to get account stuff
  if(id === /* existing account ids*/){
    alert('that id has been taken');
    createId();
  }
  else{
    var success=prompt('ctrl + c\nthen add a new bookmark and replace the url with that code','javascript: var n='+id+'; var x=document.createElement("script"); x.src="repl url here"; document.body.appendChild(x);');
  }
}
createId();
