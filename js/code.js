var urlBase = 'http://vintagecontacts.com/LAMPAPI';
var extension = 'php';

// Declare out here for global scope
var userId = 0;

function doLogin() {
  var firstName = "";
  var lastName = "";
  var login = document.getElementById("loginName").value;
  var password = document.getElementById("loginPassword").value;

  document.getElementById("loginResult").innerHTML = "";

  var jsonPayload = '{"login" : "' + login + '", "password" : "' + password + '"}';
  var url = urlBase + '/Login.' + extension;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

	try
	{
		xhr.send(jsonPayload);

		var jsonObject = JSON.parse( xhr.responseText );
		userId = jsonObject.id;

		if( userId < 1 )
		{
			document.getElementById("loginResult").innerHTML = "User/Password combination incorrect";
			return;
		}
    else
    {
		    document.getElementById("loginResult").innerHTML = "Login Successful";
        window.location.href = "contacts.html";
    }

  }
  catch(err)
  {
      document.getElementById("loginResult").innerHTML = err.message;
  }
}
