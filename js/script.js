//getting all required elements

const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box")

//if user press any key and release

inputBox.onkeyup = (e) => {
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            //filtering array values and user char to lowercase and return only those word/sentence that contain user char
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>';
        });
        console.log(emptyArray)
        searchWrapper.classList.add("active"); //show autocomplete box
        showSuggestions(emptyArray);
        let alllist = suggBox.querySelectorAll("li");
        for (let i = 0; i < alllist.length; i++){
            //adding onclick attribute to all li tag
            alllist[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectUserData = element.textContent;
    console.log(selectUserData);
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}


function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = '<li>' + userValue + '</li>';
    }
    else {
        listData = list.join("");
    }
    suggBox.innerHTML = listData;
}