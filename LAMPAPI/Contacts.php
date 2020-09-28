<?php

  $inData = getRequestInfo();

  $userId = 0;

  $conn = new mysqli("localhost", "group5_HTMLAccess", "thisonlyworkssometimes", "group5_contacts");


  if ($conn->connect_error)
  {
    returnWithError( $conn->connect_error );
  }
  else
  {
    $sql = "SELECT firstName, lastName, phone, email FROM contacts WHERE UserID='" . $inData["login"] . "'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0)
    {
      $contact_array = array();

      foreach($result as $row)
      {
        $contact_array[] = array('firstName' => $row->firstName, 'lastName' => $row->lastName, 'phone' => $row->phone, 'email' => $row->email);
      }

      return json_encode($contact_array);
    }

  }

 ?>
