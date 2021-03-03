function checnum(as) {
  var a = as.value;
  for (var x = 0; x < a.length; x++) {
    var ff = a[x];
    if (isNaN(a)) {
      a = a.substring(0, a.length - 1);
      as.value = a;
    }
  }
}
function loanemi_calc() {
  var lamt = document.getElementById("lamt").value;
  var dpay = document.getElementById("dpay").value;
  var inte = document.getElementById("inte").value;
  var term = document.getElementById("term").value;
  var msg = true;
  if (lamt == "") {
    $("#priceerror").html("Enter Vehicle loan amount");
    msg = false;
    document.getElementById("lamt").focus();
  } else {
    $("#priceerror").html("");
  }
  if (inte == "") {
    $("#interesterror").html("Enter interest rate in percentage");
    msg = false;

    document.getElementById("dpay").focus();
  } else {
    $("#interesterror").html("");
  }
  if (term == "") {
    $("#perioderror").html("Enter term of loan payment");
    msg = false;
    document.getElementById("inte").focus();
  } else {
    $("#perioderror").html("");
  }
  if (msg) {
    if (dpay == "") {
      dpay = 0;
      document.getElementById("term").value = dpay;
      $("#dpay").val(dpay);
    }
    lamt = parseFloat(lamt);
    dpay = parseFloat(dpay);
    inte = parseFloat(inte);
    term = parseFloat(term);
    if (dpay <= lamt) {
      var p = lamt - dpay;
      var r = inte / 1200;
      var part1 = Math.pow(1 + r, term);
      var part2 = p * r * part1;
      var part3 = part1 - 1;
      var emi = Math.round(100 * (part2 / part3)) / 100;
      document.getElementById("emi").value = emi;
      var tamt = Math.round(100 * emi * term) / 100;
      document.getElementById("tamt").value = tamt;
      var tip = Math.round(100 * (tamt - p)) / 100;
      document.getElementById("tip").value = tip;
    } else {
      $("#downerror").html("Enter down payment less than the Auto loan amount");
      document.getElementById("dpay").value = "";
      document.getElementById("dpay").focus();
    }
  }
}

function reset() {
  document.getElementById("lamt").value = "";
  document.getElementById("dpay").value = "";
  document.getElementById("inte").value = "";
  document.getElementById("term").value = "";
  document.getElementById("emi").value = "";
  document.getElementById("tip").value = "";
  document.getElementById("tamt").value = "";
}
