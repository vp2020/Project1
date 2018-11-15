

var dataSource;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        dataSource = JSON.parse(this.responseText);
    }
};
xmlhttp.open("GET", "dataJSON.json", true);
xmlhttp.send();
