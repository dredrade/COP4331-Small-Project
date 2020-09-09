var urlBase= 'http://vintagecontacts.com/LAMPAPI';
var extension = 'php';

var userId = 0;
var firstName = "";
var lastName = "";

function createUser()
{
  userId = 0;
  firstName = document.getElementById("newFirst").value;
  lastName = document.getElementById("newLast").value;
  var username = document.getElementById("newName").value;
  var password = document.getElementById("newPass").value;

  document.getElementById("createResult").innerHTML = "";

  var jsonPayload = '{"login" : "' + username + '", "password" : "' + password + '", "FirstName" : "' + firstName + '", "LastName" : "' + lastName + '"}';
  var url = urlBase + '/NewUser.' + extension;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  try {
    xhr.send(jsonPayload);

    var jsonObject = JSON.parse( xhr.responseText );
    userId = jsonObject.id;

    document.getElementById("createResult").innerHTML = userID;

    if (userId < 1)
    {
      document.getElementById("createResult").innerHTML = "Success!";
      window.location.href = "index.html";
      return;
    } else {
      document.getElementById("createResult").innerHTML = "Username already taken.";
    }

  } catch (e) {
      document.GetElementById("createResult").innerHTML = "Woah, there seems to be some bad stuff going on rn";
  }
}
