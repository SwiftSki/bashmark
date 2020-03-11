//add stuff to add accounts to the json
//notify when new accounts are created
//check for duplicate accounts

var accountinfo = document.createElement('script');
accountinfo.src='';
document.body.appendChild(accountinfo);

var data = accountinfo.parse(js);

function createId(){
  var name = prompt('What is you full name?\n(first and last)','John Doe');
  var id = data.length + 1;
  var code = 'javascript: var n=' + id + '; var x=document.createElement("script"); x.src="repl url here"; document.body.appendChild(x);';
  var success = prompt('copy the highlighted code\nthen add a new bookmark (right click on the bookmarks bar and click add page)\nand replace the url with that code\npress cancel to cancel stuff on my end',code);
  var pushname = '{"' + name + '"}';
  ww
  if(success === code){
    data.accounts.push(pushname);
    accountinfo = JSON.stringify(data);
  }
  else{
    alert('please contact me for help');
  }
}
createId();
