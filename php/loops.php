<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 

        for ($i = 0; $i < 5; $i++) {
            echo "$i <br>";
        }

        $name = "Maty, Jo";

        while($name == "Maty, Jo") {
            echo "hello " . $name . "<br>";
            $name++;
        }


        $numbers = array(1,2,3,4,5);

        do {
            $num = array_shift($numbers);
            /* var_dump($numbers);
            print_r($numbers); */
            echo $num . "<br>";
        } while (count($numbers)) 
    
    
    ?>
</body>
</html>