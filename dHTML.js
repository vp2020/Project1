var win_width,    // Distance to move
    dxArr = [];   // Direction for each item

//Get dimensions of the window
function dimensions() {
    win_width = window.innerWidth - 50;
}


function colorChange(index){

    var color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];

    if(index==(color.length-1)){
        index = 0;
    }
    document.getElementById('OrderNow').style.backgroundColor = color[index];

    setTimeout(function(){colorChange(index+1);},1000);


}

function init1(){
    dimensions();

    for (let i = 1; i <= 1; i++ ) {
        let img = document.createElement('h1');
        let imgTextNode = document.createTextNode("Order Now!!!");
        img.appendChild(imgTextNode);
        document.getElementById("OrderNow").appendChild(img);
        img.id  = "move"+i;
        // img.style.fontSize = "14px";
        img.style.position = "absolute";
        img.style.color =
        img.style.left     = 0;
        img.style.top      = i * 42 - 42 + "px";
        document.body.appendChild( img );

        moveIt( "move" + i, i );

        dxArr[i] = i + 1;
    }
}


function moveIt( whichOne, id ){
    var pos = parseInt( document.getElementById( whichOne ).style.left );

    if ( ( pos < win_width && dxArr[id] > 0 ) || ( pos > 0 && dxArr[id] < 0 ) ) {
        let dx = ( dxArr[id] + 1 ) % 20 + 1 || -1;
        document.getElementById( whichOne ).style.left = pos + dx + "px";
    }
    else {
        dxArr[id] = dxArr[id] * -1;
    }
    setTimeout( function() {
        moveIt( whichOne, id );
    }, 20 );
}