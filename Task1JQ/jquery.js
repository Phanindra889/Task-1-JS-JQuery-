$(function () {
  LoadStatesInHtml();
  $("#submit").on("click", function () {
    var employeeName = EmptyFieldCheck("#fname", "#alert-name", "name is required");
    var employeeEmail = EmptyFieldCheck("#email", "#alert-mail", "email is required");
    var employeeOrganization = EmptyFieldCheck(
      "#organization",
      "#alert-organization",
      "organization is required"
    );
    if (employeeName == 0 || employeeEmail == 0 || employeeOrganization == 0) {
      $("#alert-to-fill").text("Please fill all the required details below");
    }
    if (employeeEmail != 0 && (!EmailValidation())) {
        location.reload();
      }
  });

  function EmptyFieldCheck(id, destinationName, message) {
    if ($(id).val() == "") {
      $(destinationName).text(message);
      return 0;
    } else {
      $(destinationName).text("");
    }
  }

  $("input[type='radio']").on("click", function () {
    var gender = $("input[type='radio']:checked").val();
    if (gender == "male") {
      setTimeout(function () {
        alert("Hello Sir");
      }, 300);
    } else {
      setTimeout(function () {
        alert("Hello Lady");
      }, 300);
    }
  });

  $("#clear-form").on("click", function () {
    location.reload();
  });

  $("#email").on("keyup", EmailValidation);

  function EmailValidation()
  {
    var email = $("#email").val();
    var regExp =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regExp.test(email)) {
      $("#alert-mail").text("Please provide valid email address");
      return true;
    } else {
      $("#alert-mail").text("");
      return false;
    }
  }

  $("#state-province").on("change", function () {
    var selected = $("#state-province option:selected").text();
    $("#promotion-code").val(selected + "-PROMO");
  });

  $("#browse-file").change(function () {
    var filePath = $("#browse-file").val();
    $("#upload-resume").val(filePath.slice(filePath.lastIndexOf("\\") + 1));
  });

  function LoadStatesInHtml() {
    states = [
      "Andhra Pradesh",
      "Arunachal Pradesh ",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jammu and Kashmir",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli",
      "Daman and Diu",
      "Lakshadweep",
      "National Capital Territory of Delhi",
      "Puducherry",
    ];
    for (var state of states) {
      $("#state-province").append(
        "<option value='$(state)'>" + state + "</option>"
      );
    }
  }
});
