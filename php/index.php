<?php
// Step 1: Define the API URL
$apiUrl = "https://jsonplaceholder.typicode.com/posts";
$apiUrl2 = "https://api.breakingbadquotes.xyz/v1/quotes";


// Step 2: Get the content from the API
$response = file_get_contents($apiUrl);
$response = file_get_contents($apiUrl2);


// Step 3: Decode JSON into PHP array
$data = json_decode($response, true);
$data2 = json_decode($response, true);

?>
<?php
$weatherApiUrlKey = "673477f72181997a0d83e17403d0ae42";
$apiUrl3 = "http://api.weatherstack.com/current?access_key=$weatherApiUrlKey&query=curico";
$response = file_get_contents($apiUrl3);
$data = json_decode($response, true);
// Check if the request was successful
if (isset($data['current'])) {
    $temperature = $data['current']['temperature'];
    $description = $data['current']['weather_descriptions'][0];
    $icon = $data['current']['weather_icons'][0];
    $location = $data['location']['name'];
} else {
    $error = $data['error']['info'] ?? 'Unable to fetch weather data.';
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>API Data Example</title>
    <style>
        li {
            border: 1px solid grey;
            padding: 10px;
            box-shadow: 0 1px 2px 2px grey;
            border-radius: 3px;
            list-style: none;
        }
        img {
            border-radius: 10px;
            width: 100px;
        }
        p {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-size: 18px;
            font-weight: 500;
            margin: 3px;
        }
        .temp__container {
            border: 1px solid grey;
            border-radius: 3px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-items: center;
            padding: 10px;
            width: 250px;
            background-color: #aeecef;
            color: #254F93;
        }
    </style>
</head>
<body>
    <h1>Posts from API "Breaking bad"</h1>
    <ul>
        <?php foreach ($data2 as $post): ?>
            <li>
                <!-- <strong><?= htmlspecialchars($post['title']) ?></strong><br> -->
                <strong><?= htmlspecialchars($post['quote']) ?></strong><br>
              <!--   <?= htmlspecialchars($post['body']) ?> -->
                <?= htmlspecialchars($post['author']) ?>
            </li>
        <?php endforeach; ?>
    </ul>

    <?php if (isset($temperature)): ?>
    <div class="temp__container">
        <p><strong>Location:</strong> <?= htmlspecialchars($location) ?></p>
        <p><strong>Temperature:</strong> <?= htmlspecialchars($temperature) ?> °C</p>
        <p><strong>Description:</strong> <?= htmlspecialchars($description) ?></p>
        <img src="<?= htmlspecialchars($icon) ?>" alt="Weather Icon">

    </div>
    <?php else: ?>
        <p>Error: <?= htmlspecialchars($error) ?></p>
    <?php endif; ?>
</body>
</html>
