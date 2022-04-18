package stepdefs;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.emptyArray;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.not;

import java.util.HashMap;

import org.junit.Assert;

import context.TestBase;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.response.Response;

public class PostRequestStepDefs extends TestBase {

	TestContextAPI testContext;

	public PostRequestStepDefs(TestContextAPI testContext) {
		this.testContext = testContext;
	}
	
	@Given("I set header and body to create new user")
	public void i_set_header_and_body_to_create_new_user() {

		HashMap<String,String> hm_header = new HashMap<String,String>();
		hm_header.put("Content-Type", "application/json");

		String body_string = "{\r\n"
				+ "    \"title\" : \"recommendation\",\r\n"
				+ "    \"body\"  : \"motorcycle\",\r\n"
				+ "    \"userId\" : 12\r\n"
				+ "}";

		testContext.req_spec.headers(hm_header).body(body_string);	
	}

	@Given("I set header and but with out any body")
	public void i_set_header_and_but_with_out_any_body() {
		HashMap<String,String> hm_header = new HashMap<String,String>();
		hm_header.put("Content-Type", "application/json");		
		testContext.req_spec.headers(hm_header);
	}
	
	@Given("I set header and body with fields but no values")
	public void i_set_header_and_body_with_fields_but_no_values() {
		HashMap<String,String> hm_header = new HashMap<String,String>();
		hm_header.put("Content-Type", "application/json");

		String body_string = "{\r\n"
				+ "    \"title\" : \"\",\r\n"
				+ "    \"body\"  : \"\",\r\n"
				+ "    \"userId\" : \"\"\r\n"
				+ "}";
		
		testContext.req_spec.headers(hm_header).body(body_string);
	}
	
	@Given("I set header and body with incorrect data types are sent for every field")
	public void i_set_header_and_body_with_incorrect_data_types_are_sent_for_every_field() {
		HashMap<String,String> hm_header = new HashMap<String,String>();
		hm_header.put("Content-Type", "application/json");

		String body_string = "{\r\n"
				+ "    \"title\" : 1,\r\n"
				+ "    \"body\"  : 2,\r\n"
				+ "    \"userId\" : \"3\"\r\n"
				+ "}";
		
		testContext.req_spec.headers(hm_header).body(body_string);
	}

	
	@When("I hit the api with post request and end point as {string}")
	public void i_hit_the_api_with_post_request_and_end_point_as(String endPoint) {
		testContext.resp = testContext.req_spec.when().post(endPoint);
	}
	
	@Then("API created a new User in the system")
	public void api_created_a_new_User_in_the_system() {
		testContext.resp.then()
		.statusCode(201)
		.assertThat()
		.body("title", equalTo("recommendation"))
		.body("body", equalTo("motorcycle"))
		.body("userId", equalTo(12));
	}
	
	@Then("API returned the successful code when request to validate response when no body is sent as {int}")
	public void api_returned_the_successful_code_as1(Integer statusCode) {
		testContext.resp.then().statusCode(statusCode);
	}
	
	@Then("API returned the successful code when request to validate response when empty field values are sent in body as {int}")
	public void api_returned_the_successful_code_as2(Integer statusCode) {
		testContext.resp.then().statusCode(statusCode);
	}
	
	@Then("API returned the successful code when request to validate response when incorrect data types for all fields are sent as {int}")
	public void api_returned_the_successful_code_as3(Integer statusCode) {
		testContext.resp.then().statusCode(statusCode);
	}

}