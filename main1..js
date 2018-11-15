// hashmap to build key value pair of any nested object

var map = new Map();
function buildMap(objt) {
    for (ob in objt) {
        if (typeof objt[ob] === "object") {
            map.set(ob, objt[ob]);
            buildMap(objt[ob]);
        } else {
            map.set(ob, objt[ob]);
        }
    }
}

var selectedId = [];
var count = 1;
var s = "";

function makeDropDown(data, selectId) {

    // if data is object make recursion call
    if (typeof data === "object") {
        let valueOfSelected = Object.keys(data);
        let selEle = createSelect(selectId, valueOfSelected);
        selEle.addEventListener("change", function () {
            var myNode = document.getElementById("displayResult");
            while (myNode.childNodes.length > 0 && myNode.firstChild) {
                myNode.removeChild(myNode.firstChild);
            }
            // if selected id not present in selected id add the selected id
            if (selectedId.indexOf(this.id) == -1) {
                selectedId.push(this.id);
                count = count + 1;
                makeDropDown(map.get(selEle.value), count);
            } else {
                // revisiting the selected id
                let index = this.id;
                deleteSelect(index);
                makeDropDown(map.get(selEle.value), count);
            }
        });
    } else {
        for (let i = 0; i < selectedId.length; i ++) {
            s = s + document.getElementById(selectedId[i]).value + " "; // final result
        }
            let header = document.createElement("h1");

        let headTNode = document.createTextNode("Confirm your order again?");
        header.appendChild(headTNode);
        document.getElementById("displayResult").appendChild(header);

        let h = document.createElement("h2");
        let textNode = document.createTextNode(s);
        h.appendChild(textNode);
        document.getElementById("displayResult").appendChild(h);

        let button = document.createElement("button");
        button.setAttribute("id", "button");
        let tNode = document.createTextNode("Order!!!");
        button.appendChild(tNode);
        document.getElementById("displayResult").appendChild(button);
        document.getElementById("button").addEventListener("click", function () {
            alert("Order Placed!!!");
        });

        button.addEventListener("click", function () {
            localStorageSet();
        });
    }
}

function createBR(ele) {
    let br = document.createElement("br");
    ele.appendChild(br);
}

// remove unwanted select element
function deleteSelect(id) {
    for (let i = id; i < selectedId.length; i ++) {
        document.getElementById(selectedId[i]).remove();
    }
    for (let i = id; i <= selectedId.length; i ++) {
        selectedId.pop(i);
    }
}

// create select element
function createSelect(id, valueOfSelected) {
    // selectedId.push(id);
    let selEle = document.createElement("select");
    selEle.setAttribute("id", id);
    document.getElementById("selectOption").appendChild(selEle);
    createOption(selEle, valueOfSelected);
    createBR(selEle);
    return selEle
}

// create option element
function createOption(selEle, valueOfSelected) {
    let defaultOption = document.createElement("option");
    defaultOption.setAttribute("value", "Select Item");
    let textNode = document.createTextNode("Select Item");
    defaultOption.appendChild(textNode);
    selEle.appendChild(defaultOption);

    for (let i = 0; i < valueOfSelected.length; i ++) {
        let opt = document.createElement("option");
        opt.setAttribute("value", valueOfSelected[i]);
        let textNode = document.createTextNode(valueOfSelected[i]);
        opt.appendChild(textNode);
        selEle.appendChild(opt);
    }
}

// cookie storage
function cookie1() {
    alert("WOW!");
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let instructions = document.getElementById("instructions");
    console.log(name, email, tel, instructions);

    cookies.setCookie("name", name);
    cookies.setCookie("email",  email);
    cookies.setCookie("tel", tel);
}

// setting local storage
function localStorageSet() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();

    if(dd<10) {
        dd = '0'+dd
    }

    if(mm<10) {
        mm = '0'+mm
    }

    today = mm + '/' + dd + '/' + yyyy;
    localStorage.setItem("Date", today);
    localStorage.setItem("Result", s);
}

// start the application
function init() {

    buildMap(dataSource);
    makeDropDown(dataSource, 1);

}