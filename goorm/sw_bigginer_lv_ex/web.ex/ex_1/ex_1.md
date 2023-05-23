# html
```html

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="main.css">
        <title>first web</title>
    </head>
    <body>
        <div class="wrapper">
            <div></div>
            <div class="header">
                <img class="proflie" src="halloween-profile.png">
                <h1>jack-O-Lantan</h1>
                <p>A jack-o'-lantern is a carved pumpkin, turnip, or other root vegetable lantern associated with Halloween. Its name comes from the phenomenon of a strange light flickering over peat bogs, called will-o'-the-wisp or jack-o'-lantern.</p>
            </div>
            <div class="content">
                <div class="section inf">
                    <h2>inf</h2>
                    <ul>
                        <li>jack@veamcamp.com</li>                        
                        <li>000-1234-5678</li>
                        <li>Seoul, Korea</li>
                    </ul>
                </div>
                <div class="section skill">
                    <h2>skill</h2>
                    <ul>
                        <li>photpshop</li>                        
                        <li>html+css</li>
                        <li>misic</li>
                    </ul></div>
            </div>
            <div class="footer">
                HAPPYHALLOWEEN
            </div>
        </div>
    </body>
</html>

```
# css
```css

p, h1, h2, ul{
    margin:0;
    padding:0;
}
li{
    list-style-type: none;
}
body{
    background-attachment: fixed;
    background-size:cover;
    background-position: center;
    background-image: url(background.gif);
    background-color: #666;
}
.wrapper{
    background-color: #ddd;
    margin: 50px auto;
    width :800px;
}
.header{
    background-repeat: 0;
    background-image: url(halloween-header-bg.png);
    color:white;
    height: 400px;
    text-align: center;
    
}
.header h1{
    color: violet;
    margin: 10px 0;
}
.header p{
    background-color: #333;
    width: 400px;
    margin: 0 auto;
    padding : 10px
}
img.proflie{
    margin-top: 50px;
}

.section{
    background-color: white;
    margin : 20px;
    padding: 20px;
    background-image:url(icon-information.png);
    background-repeat: no-repeat;
    background-position: right 30px center;
}
.section.skill{
    background-image:url(icon-skills.png);
}
.section li:hover{
    color: red;
    border-color:orangered;
}


.section h2{
    color:orangered;
    margin-bottom: 10px;
}
li{
    border-left: 5px solid #ddd;
    padding: 6px 10px 4px;
}
.footer{
    background-color: #111;
    padding: 10px 0;
    text-align: center;
    color: violet;
    letter-spacing: 5px;
    text-indent: 5px;
}
```
