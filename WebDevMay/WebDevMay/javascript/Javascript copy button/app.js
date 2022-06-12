function myFunction() {
    var copyText = document.getElementById("promocode");
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("button").innerText="Copied!";
  }