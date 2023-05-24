# html
```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>second web</title>
        <link rel="stylesheet" href="main.css">
    </head>
    <body>
        <div class="box">
            <div class="wr-con">
            <img class="robot" src="robot-red.png">
                <h1>RED</h1>
                <p>Red Robots ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
            </div>
            <div class="box-footer">...</div>
        </div>
        <div class="box">
            <div class="wr-con">
            <img class="robot" src="robot-green.png">
                <h1>GREEN</h1>
                <p>Red Robots ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
            </div>
            <div class="box-footer">...</div>
        </div>
        <div class="box">
            <div class="wr-con">
            <img class="robot" src="robot-blue.png">
                <h1>BLUE</h1>
                <p>Red Robots ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
            </div>
            <div class="box-footer">...</div>
        </div>
    </body>
</html>
```
# css
```css
h1,p{
    margin:0;
}

body{
    background-color:#999;
    text-align: center;
}
.box{
    display:inline-block;
    background-color: white;
    width: 350px;
    margin: 50px 10px;
    text-align: center;
    
}
.wr-con{
    padding:20px;

}
.robot{
    margin-top: -30px;

}
.wr-con h1{
    margin-bottom: 20px;
    color : black;
    text-align: center;
    background-color: rgb(231, 235, 185);
    display: inline-block;
    border-top:5px solid;
    border-bottom:5px solid;
}
.box-footer{
    background-color: #efefef;
    text-align: center;
}
```
