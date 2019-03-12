<?php

$recepient = "chilicklic@mail.ru";
$siteName = "MrBurger";

$name = trim($_POST["name"]); // Имя
$phone = trim($_POST["phone"]); // Телефон
$street = trim($_POST["street"]); // Улица
$house = trim($_POST["house"]); // Дом
$korp = trim($_POST["korp"]); // Корпус
$kvart = trim($_POST["kvart"]); // Квартира
$etaz = trim($_POST["etaz"]); // Этаж
$comments = trim($_POST["comments"]); // Комментарий
$cash = trim($_POST["cash"]); // Потребуется сдача
$cashs = trim($_POST["cashs"]); // Оплата по карте
$perezvon = trim($_POST["perezvon"]); // Оплата по карте

$message = "
    <!DOCTYPE HTML>
        <html>
            <head>
                <title>
                    Заказ с сайта '$siteName'.
                </title>
            </head>
            <body>
                <ul style='border: 1px solid #ccc'>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'> Имя: <p style='font-style: italic;'>$name;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Телефон: <p style='font-style: italic;'>$phone;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Улица: <p style='font-style: italic;'>$street;</p>
                    </li>                    
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Дом: <p style='font-style: italic;'>$house;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Корпус: <p style='font-style: italic;'>$korp;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Квартира: <p style='font-style: italic;'>$kvart;</p>
                    </li>    
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Корпус: <p style='font-style: italic;'>$korp;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Этаж: <p style='font-style: italic;'>$etaz;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Комментарий: <p style='font-style: italic;'>$comments;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Потребуется сдача: <p style='font-style: italic;'>$cash;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Оплата по карте: <p style='font-style: italic;'>$cashs;</p>
                    </li>
                    <li style='
                    list-style: circle;
                    font-weight: bold;'>
                        Не перезванивать: <p style='font-style: italic;'>$perezvon;</p>
                    </li>                                                                                                                                        
                </ul>
            </body>
        </html>";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>


<!--

$recepient = "chilicklic@mail.ru";
$siteName = "HTML-шаблон";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$message = "Имя: $name \nТелефон: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

-->