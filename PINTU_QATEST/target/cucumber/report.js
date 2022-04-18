$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Mobile/Register.feature");
formatter.feature({
  "name": "Automate Register Testcase Positive and Negative",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check all required fields by not entering the data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "RegisterAppium.i_open_the_application()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException: Cannot invoke \"org.openqa.selenium.WebDriver.findElement(org.openqa.selenium.By)\" because \"this.driver\" is null\r\n\tat stepdefs.RegisterAppium.i_open_the_application(RegisterAppium.java:39)\r\n\tat ✽.I open the application(features/Mobile/Register.feature:4)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I tap on No account yet? Create One",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterAppium.i_tap_on_no_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I tap register button with empty data required fields",
  "keyword": "When "
});
formatter.match({
  "location": "RegisterAppium.i_tap_register()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Validate pop up error",
  "keyword": "Then "
});
formatter.match({
  "location": "RegisterAppium.validate_pop_up_error()"
});
formatter.result({
  "status": "skipped"
});
});