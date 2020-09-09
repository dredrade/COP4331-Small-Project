<?php

  $inData = getRequestInfo();

  $id = 0;
  $firstName = $inData["FirstName"];
  $lastName = $inData["LastName"];
  $username = $inData["login"];
  $password = $inData["password"];

  $conn = new mysqli("localhost", "group5_HTMLAccess", "thisonlyworkssometimes", "group5_contacts");

  if($conn->connect_error)
  {
    returnWithError( $conn->connect_error );
  }
  else
  {
    $sql = "SELECT UserID FROM Users WHERE Login='" . $inData["login"] . "'";

    $result = $conn->query($sql);

    if($result->num_rows > 0)
    {
      $row = $result->fetch_assoc();
      $id = $row["UserID"];
      returnWithInfo($id);
    }
    else
    {
      $sql = "INSERT INTO Users VALUES (0, '$firstName', '$lastName', '$username', '$password')";

      $conn->query($sql);

      returnWithInfo(0);
    }
  }

    function getRequestInfo()
    {
		return json_decode(file_get_contents('php://input'), true);
	}

	function sendResultInfoAsJson( $obj )
	{
		header('Content-type: application/json');
		echo $obj;
	}

	function returnWithError( $err )
	{
		$retValue = '{"id":0,"firstName":"","lastName":"","error":"' . $err . '"}';
		sendResultInfoAsJson( $retValue );
	}

	function returnWithInfo( $id )
	{
		$retValue = '{"id":' . $id . ',"firstName":"' . $firstName . '","lastName":"' . $lastName . '","error":""}';
		sendResultInfoAsJson( $retValue );
	}

?>
