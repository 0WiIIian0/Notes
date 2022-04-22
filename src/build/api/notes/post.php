<?php

$title = $_POST['title'];
$content = $_POST['content'];

echo json_encode(
  array(
    'title' => $title,
    'content' => $content
  )
);

?>