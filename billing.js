function valiationForm() {
    var ship_firstname = document.getElementById("firstname");
    var ship_lastname = document.getElementById("lastname");
    var ship_aptaddress = document.getElementById("aptaddress");
    var ship_address = document.getElementById("address");
    var ship_country = document.getElementById("country");
    var ship_state = document.getElementById("state");
    var ship_city = document.getElementById("city");
    var ship_code = document.getElementById("code");

    var bill_firstname = document.getElementById("billfirstname");
    var bill_lastname = document.getElementById("billlastname");
    var bill_aptaddress = document.getElementById("billaptaddress");
    var bill_address = document.getElementById("billaddress");
    var bill_country = document.getElementById("billcountry");
    var bill_state = document.getElementById("billstate");
    var bill_city = document.getElementById("billcity");
    var bill_code = document.getElementById("billcode");
    var check = document.getElementById("check");

    

    if (check.checked == true) {
        bill_firstname.value = ship_firstname.value;
        bill_lastname.value = ship_lastname.value;
        bill_aptaddress.value = ship_aptaddress.value;
        bill_address.value = ship_address.value;
        bill_country.value = ship_country.value;
        bill_state.value = ship_state.value;
        bill_city.value = ship_city.value;
        bill_code.value = ship_code.value;
       

    }

    else {
        bill_firstname.value = "";
        bill_lastname.value = "";
        bill_aptaddress.value = "";
        bill_address.value = "";
        bill_country.value = "";
        bill_state.value = "";
        bill_city.value = "";
        bill_code.value = "";
    }
}


function validateAddress() {
    var ship_firstname =
        document.forms.Myform.firstname.value;
    var ship_lastname =
        document.forms.Myform.lastname.value;
    var ship_aptaddress =
        document.forms.Myform.aptaddress.value;
    var ship_address =
        document.forms.Myform.address.value;
    var ship_country =
        document.forms.Myform.country.value;
    var ship_state =
        document.forms.Myform.state.value;
    var ship_city =
        document.forms.Myform.city.value;
    var ship_code =
        document.forms.Myform.code.value;

    var regName = /\d+$/g;
    var regnum = /^[0-9]*$/;
    var letters = /^[A-Za-z]+$/;

    if (regName.test(ship_firstname)) {
        window.alert("Please enter your first name properly.");
        return false;
    }
    if (regName.test(ship_lastname)) {
        window.alert("Please enter your last name properly.");
        return false;
    }

    if (regName.test(ship_aptaddress)) {
        window.alert("Please enter your Apt Address properly.");
        return false;
    }

    if (regName.test(ship_address)) {
        window.alert("Please enter your Address properly.");
        return false;
    }

    if (!letters.test(ship_country)) {
        window.alert("Country Incorrect")
        return false;

    }

    if (!letters.test(ship_state)) {
        window.alert("State Incorrect")
        return false;

    }
    if (!letters.test(ship_city)) {
        window.alert("City Incorrect")
        return false;

    }

    if (ship_code.length != 6 || !regnum.test(ship_code)) {
        window.alert("Postal Code Incorrect")
        return false;
    }


    var bill_firstname =
        document.forms.Myform.billfirstname.value;
    var bill_lastname =
        document.forms.Myform.billlastname.value;
    var bill_aptaddress =
        document.forms.Myform.billaptaddress.value;
    var bill_address =
        document.forms.Myform.billaddress.value;
    var bill_country =
        document.forms.Myform.billcountry.value;
    var bill_state =
        document.forms.Myform.billstate.value;
    var bill_city =
        document.forms.Myform.billcity.value;
    var bill_code =
        document.forms.Myform.billcode.value;

    var regName = /\d+$/g;
    var regnum = /^[0-9]*$/;
    var letters = /^[A-Za-z]+$/;

    if (regName.test(bill_firstname)) {
        window.alert("Please enter your name properly.");
        return false;
    }
    if (regName.test(bill_lastname)) {
        window.alert("Please enter your name properly.");
        return false;
    }

    if (regName.test(bill_aptaddress)) {
        window.alert("Please enter your Apt Address properly.");
        return false;
    }

    if (regName.test(bill_address)) {
        window.alert("Please enter your Address properly.");
        return false;
    }

    if (!letters.test(bill_country)) {
        window.alert("Country Incorrect")
        return false;

    }

    if (!letters.test(bill_state)) {
        window.alert("State Incorrect")
        return false;

    }
    if (!letters.test(bill_city)) {
        window.alert("City Incorrect")
        return false;

    }

    if (bill_code.length != 6 || !regnum.test(bill_code)) {
        window.alert("Postal Code Incorrect")
        return false;
    }

    window.alert("Order Placed")
    return true;

}



