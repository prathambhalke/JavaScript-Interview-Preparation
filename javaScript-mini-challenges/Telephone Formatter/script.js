const telePhoneNumberInput = document.getElementById("input");

telePhoneNumberInput.focus();

telePhoneNumberInput.addEventListener("input", (e) => {
  let value = e.target.value;

  var formatedValue;
  if (value !== "" && value.length === 4) {
    formatedValue = `+(${value.substring(0, 3)}) - ${value.charAt(3)}`;
    e.target.value = formatedValue;
  } else if (value.length < 8 && value.includes(")")) {
    let cleanedValue = value.replace(/[\(\)\s\-\+]/g, "");
    e.target.value = Number(cleanedValue);
  }
});
