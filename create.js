//add stuff to add accounts to the json
//notify when new accounts are created
//check for duplicate accounts

var accountinfo = document.createElement('script');
accountinfo.src='';
document.body.appendChild(accountinfo);

var data = accountinfo.parse(js);

function createId(){
  var id = data.length + 1;
  var success = prompt('copy the highlighted code\nthen add a new bookmark (right click on the bookmarks bar and click add page)\nand replace the url with that code','javascript: var n=' + id + '; var x=document.createElement("script"); x.src="repl url here"; document.body.appendChild(x);');
}
createId();
