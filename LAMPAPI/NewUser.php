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
    $sql = "INSERT INTO Users VALUES (0, '$firstName', '$lastName', '$username', '$password')";

    $id = 0;


    $conn->query($sql);
    if(mysqli_error($conn)) {
        returnWithError($conn->errno);
    }
    else {
        returnWithInfo($id);
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
		$retValue = '{"id":' . $id . ',"firstName":"' . $firstName . '","lastName":"' . $lastName . '","error":"0"}';
		sendResultInfoAsJson( $retValue );
	}

?>
