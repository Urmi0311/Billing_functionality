function validateForm() {

  var flag = false;
  var ship_fname, ship_lname, ship_aptadd, ship_streetadd, ship_country, ship_state, ship_city, ship_zip;
  var bill_fname, bill_lname, bill_aptadd, bill_streetadd, bill_country, bill_state, bill_city, bill_zip;


  
  ship_fname = document.forms["Myform"]["firstname"].value;
  ship_lname = document.forms["Myform"]["lastname"].value;
  ship_aptadd = document.forms["Myform"]["aptaddress"].value;
  ship_streetadd = document.forms["Myform"]["address"].value;
  ship_country = document.forms["Myform"]["country"].value;
  ship_state = document.forms["Myform"]["state"].value;
  ship_city = document.forms["Myform"]["city"].value;
  ship_zip = document.forms["Myform"]["code"].value;


  bill_fname = document.forms["Myform"]["billfirstname"].value;
  bill_lname = document.forms["Myform"]["billlastname"].value;
  bill_aptadd = document.forms["Myform"]["billaptaddress"].value;
  bill_streetadd = document.forms["Myform"]["billaddress"].value;
  bill_country = document.forms["Myform"]["billcountry"].value;
  bill_state = document.forms["Myform"]["billstate"].value;
  bill_city = document.forms["Myform"]["billcity"].value;
  bill_zip = document.forms["Myform"]["billcode"].value;



  //firstname validation

  var regName = /^[A-Za-z]+$/;

  if (ship_fname == "" || ship_fname == null) {
    alert('First Name cannot be blank for shipping address.');
    return false;
  }
  if (!(regName.test(ship_fname))) {
    alert('Invalid first name given for shipping address.');
    return false;
  }

  if ((ship_fname <= 2) || (ship_fname.length > 20)) {
    alert("To less Characters in First name for shipping address.");
    return false;
  }

  //lastname validation

  var regName = /^[A-Za-z]+$/;
  if (ship_lname == "" || ship_lname == null) {
    alert('Last Name cannot be blank for shipping address.');
    return false;
  }
  if (!(regName.test(ship_lname))) {
    alert('Invalid last name given for shipping address.');
    return false;
  }

  if ((ship_lname <= 2) || (ship_lname.length > 20)) {
    alert("To less Characters in Last name for shipping address");
    return false;
  }


  // apt address

  if (ship_aptadd == "" || ship_aptadd == null) {
    alert("Apt Address needed for shipping address.");
    return false
  }

  // street address

  if (ship_streetadd == "" || ship_streetadd == null) {
    alert("Street Address needed for shipping address.");
    return false
  }

  // country validation

  if (ship_country == "" || ship_country == null) {
    alert("country name needed for shipping address.");
    return false
  }

  // state valiation

  if (ship_state == "" || ship_state == null) {
    alert("State name needed for shipping address.");
    return false
  }

  // city

  if (ship_city == "" || ship_city == null) {
    alert("City name needed for shipping address.");
    return false
  }

  // zip code validation

  var regName = /^[0-9]+$/;
  if (ship_zip == "" || ship_zip == null) {
    alert("Pincode can't be blank for shipping address.");
    return false;
  }
  if (!(regName.test(ship_zip))) {
    alert("Invalid last name given for shipping address.");
    return false;
  }
 

  var ship_bill_value = document.getElementById("sameaddress");

  if (ship_bill_value.checked == true) {
    bill_fname = ship_fname;
    bill_lname = ship_lname;
    bill_aptadd = ship_aptadd;
    bill_streetadd = ship_streetadd;
    bill_country = ship_country;
    bill_state = ship_state;
    bill_city = ship_city;
    bill_zip = ship_zip;

    flag = true;

  }

  else {

    var regName = /^[A-Za-z]+$/;

    if (bill_fname == "" || bill_fname == null) {
      alert('First Name cannot be blank for billing address.');
      return false;
    }
    if (!(regName.test(bill_fname))) {
      alert('Invalid first name given for billing address.');
      return false;
    }

    if ((bill_fname <= 2) || (bill_fname.length > 20)) {
      alert("To less Characters in First name for billing address.");
      return false;
    }

    //lastname validation

    var regName = /^[A-Za-z]+$/;
    if (bill_lname == "" || bill_lname == null) {
      alert('Last Name cannot be blank for billing address.');
      return false;
    }
    if (!(regName.test(bill_lname))) {
      alert('Invalid last name given for billing address.');
      return false;
    }

    if ((bill_lname <= 2) || (bill_lname.length > 20)) {
      alert("To less Characters in Last name for billing address");
      return false;
    }


    // apt address

    if (bill_aptadd == "" || bill_aptadd == null) {
      alert("Apt Address needed for billing address.");
      return false
    }

    // street address

    if (bill_streetadd == "" || bill_streetadd == null) {
      alert("Street Address needed for billing address.");
      return false
    }

    // city

    if (bill_city == "" || bill_city == null) {
      alert("City name needed for billing address.");
      return false
    }

    // zip code validation

    var regName = /^[0-9]+$/;
  if (bill_zip == "" || bill_zip == null) {
    alert("Pincode can't be blank for billing address.");
    return false;
  }
  if (!(regName.test(bill_zip))) {
    alert('Invalid last name given for billing address.');
    return false;
  }
 

    // state valiation

    if (bill_state == "" || bill_state == null) {
      alert("State name needed for billing address.");
      return false
    }

    if (bill_country == "" || bill_country == null) {
      alert("country name needed for billing address.");
      return false
    }

    flag=true;


  }

  if(flag == true){
    Place_Order()
  }
};


  function Myfunction() {
    var checkBox = document.getElementById("sameaddress");
    var txtship = document.getElementById("firstname");
    var txtbil = document.getElementById("billfirstname");

    var txtship1 = document.getElementById("lastname");
    var txtbil1 = document.getElementById("billlastname");

    var txtship2 = document.getElementById("aptaddress");
    var txtbil2 = document.getElementById("billaptaddress");

    var txtship3 = document.getElementById("address");
    var txtbil3 = document.getElementById("billaddress");

    var txtship4 = document.getElementById("country");
    var txtbil4 = document.getElementById("billcountry");

    var txtship5 = document.getElementById("state");
    var txtbil5 = document.getElementById("billstate");

    var txtship6 = document.getElementById("city");
    var txtbil6 = document.getElementById("billcity");

    var txtship7 = document.getElementById("code");
    var txtbil7 = document.getElementById("billcode");

    if (checkBox.checked == true) {
      txtbil.value = txtship.value;

    } else {
      txtbil.value = "";
    }

    if (checkBox.checked == true) {
      txtbil1.value = txtship1.value;

    } else {
      txtbil1.value = "";
    }

    if (checkBox.checked == true) {
      txtbil2.value = txtship2.value;

    } else {
      txtbil2.value = "";
    }

    if (checkBox.checked == true) {
      txtbil3.value = txtship3.value;

    } else {
      txtbil3.value = "";
    }

    if (checkBox.checked == true) {
      txtbil4.value = txtship4.value;

    } else {
      txtbil4.value = "";
    }

    if (checkBox.checked == true) {
      txtbil5.value = txtship5.value;

    } else {
      txtbil5.value = "";
    }

    if (checkBox.checked == true) {
      txtbil6.value = txtship6.value;

    } else {
      txtbil6.value = "";
    }

    if (checkBox.checked == true) {
      txtbil7.value = txtship7.value;

    } else {
      txtbil7.value = "";
    }




  };

  function Place_Order() {
    alert('Your order has been generated');
  };
