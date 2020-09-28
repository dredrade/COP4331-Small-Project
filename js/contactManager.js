var urlBase = 'http://vintagecontacts.com/LAMPAPI';
var extension = 'php';

// var firstName = "";
// var lastName = "";
// var email = "";
// var phone = 0;
// var userId = 0;
// var id = 0;

function createContact()
{
  var firstName = "";
  var lastName = "";
  var phone = "";
  var email = "";
  var id = 0;

  firstName = document.getElementById("newFirst").value;
  lastName = document.getElementById("newLast").value;
  email = document.getElementById("newEmail").value;
  phone = document.getElementById("");
}

function buildTable()
{
  var contacts = [
    {'firstName':'DefaultFirst', 'lastName':'DefaultLast', 'phone':'0000000000', 'email':'defaultemail@knights.ucf.edu'}
  ]

  var jsonPayload = '{"userId" : " ' + userId '"}';

  var url = urlBase + '/Contacts' + extension;
  var xhr = new XMLHttpRequest();

  xhr.open("POST", url, false);
  xhr.setRequestHeader("Content-type", "application/json; charset=UTF-8");

  try {
    xhr.send(jsonPayload);

    var table = document.getElementById("myTable");

    contacts = JSON.parse( xhr.responseText );

    if (contacts.length > 0)
    {

      for (var i = 0; i < contacts.length; i++)
      {
        var row = `<tr>
                    <td>${contacts[i].firstName}</td>
                    <td>${contacts[i].lastName}</td>
                    <td>${contacts[i].phone}</td>
                    <td>${contacts[i].email}</td>
                  </tr>`;

        table.innerHTML += row;

      }

    }
    else
    {
      table.innerHTML += `<tr>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                            <td> </td>
                          </tr>`;
    }

  }
  catch (e)
  {

  }

}
