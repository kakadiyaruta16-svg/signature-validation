// REGISTER PAGE
if (document.getElementById("signature-pad")) {
    var canvas = document.getElementById("signature-pad");
    var signaturePad = new SignaturePad(canvas);

    function saveSignature() {
        var username = document.getElementById("username").value;

        if (username === "") {
            alert("Enter Username First!");
            return;
        }

        var data = signaturePad.toDataURL();
        localStorage.setItem("user_" + username, data);
        alert("Signature Saved Successfully!");
    }

    function clearPad() {
        signaturePad.clear();
    }

    function login() {
        var loginUser = document.getElementById("loginUser").value;

        if (localStorage.getItem("user_" + loginUser)) {
            localStorage.setItem("currentUser", loginUser);
            window.location.href = "verify.html";
        } else {
            alert("User Not Found!");
        }
    }
}


// VERIFY PAGE
if (document.getElementById("verify-pad")) {
    var verifyCanvas = document.getElementById("verify-pad");
    var verifyPad = new SignaturePad(verifyCanvas);

    function verifySignature() {
        var currentUser = localStorage.getItem("currentUser");
        var original = localStorage.getItem("user_" + currentUser);
        var newSign = verifyPad.toDataURL();

        if (original === newSign) {
            document.getElementById("result").innerHTML = "✅ Valid Signature";
            document.getElementById("result").style.color = "green";
        } else {
            document.getElementById("result").innerHTML = "❌ Invalid Signature";
            document.getElementById("result").style.color = "red";
        }
    }

    function clearVerifyPad() {
        verifyPad.clear();
    }
}