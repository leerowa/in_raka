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
        <div class="box red">
            <div class="wr-con">
            <img class="robot" src="robot-red.png">
                <h1 >RED</h1>
                <p>Red Robots ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
            </div>
            <div class="box-footer">
                <a  href="#" class="btn"><span>launch</span></a>
            </div>
        </div>
        <div class="box green">
            <div class="wr-con">
            <img class="robot" src="robot-green.png">
                <h1 >GREEN</h1>
                <p>Red Robots ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
            </div>
            <div class="box-footer">
                <a href="#" class="btn"><span>launch</span></a>
            </div>
        </div>
        <div class="box blue">
            <div class="wr-con">
            <img class="robot" src="robot-blue.png">
                <h1 >BLUE</h1>
                <p>Red Robots ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis</p>
            </div>
            <div class="box-footer">
                <a  href="#" class="btn"><span>launch</span></a>
            </div>
        </div>
    </body>
</html>
```
# css
```css
h1,p{
    margin:0;
}
a{
    color:inherit;
    text-decoration: none;
}

body{
    background-color:#999;
    text-align: center;
}
.box{
    vertical-align: bottom;
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
.box.red{color:orangered;}
.box.green{color:limegreen;}
.box.blue{color:dodgerblue;}
.wr-con p{
    color: black;
    text-align: left;
}
.wr-con h1{
    margin-bottom: 20px;
    text-align: center;
    display: inline-block;
    border-top:5px solid;
    border-bottom:5px solid;
}

.box-footer{
    background-color: #efefef;
    text-align: center;
    padding:20px;
}
.btn{
    background-color:currentColor;
    padding: 10px 20px;
    display: inline-block;
    letter-spacing: 5px;
    border-bottom: 5px solid rgba(0,0,0,0.2);
}
.btn:active{
    border-bottom: 0px;
    margin-top: 5px;
}
span{
    color:white;
}
```
