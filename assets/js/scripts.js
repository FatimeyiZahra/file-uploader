(function (window, undefined) {
  "use strict";

  var fileUpload = $(".file-upload-btn");
  var cardUploadFile = $(".upload-file");
  var cancelBtn = $(".cancel-btn");
  $(".file-upload-btn").click(function () {
    if (cardUploadFile.hasClass("show-form")) {
      cardUploadFile.removeClass("show-form");
    } else {
      cardUploadFile.addClass("show-form");
    }
  });

  $(".cancel-btn").click(function () {
    if (cardUploadFile.hasClass("show-form")) {
      cardUploadFile.removeClass("show-form");
    }
  });
})(window);
