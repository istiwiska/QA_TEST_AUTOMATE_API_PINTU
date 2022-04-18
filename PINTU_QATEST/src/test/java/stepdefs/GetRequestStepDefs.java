package stepdefs;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.emptyArray;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.everyItem;
import static org.hamcrest.Matchers.not;

import java.util.Arrays;

import context.*;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;

public class GetRequestStepDefs extends TestBase {

	TestContextAPI testContext;

	public GetRequestStepDefs(TestContextAPI testContext) {
		this.testContext = testContext;
	}
	
	@Given("Go rest API is up and running")
	public void go_rest_API_is_up_and_running() {
		testContext.req_spec= given().baseUri(server);
	}
	
	@When("I hit the api with get request and end point as {string}")
	public void i_hit_the_api_with_get_request_and_end_point_as(String endPoint) {
		testContext.resp= testContext.req_spec.when().get(endPoint);

	}
	
	@Then("API should return all the users")
	public void api_should_return_all_the_users() {
		testContext.resp.then().assertThat()
		.statusCode(200)
		.body("result", not(emptyArray()));
	}
	
	@Then("API should return all the id {int}")
	public void api_should_return_all_the_id(int id) {
		testContext.resp.then().assertThat()
		.statusCode(200)
		.body("result", not(emptyArray()))
		.body("id", everyItem(equalTo(id)));
	}
	
	@Then("API should return user not found response for id {int}")
	public void api_should_return_user_not_found_response(int id){
		testContext.resp.then()
		.assertThat()
		.statusCode(200)
		.body("result", not(emptyArray()));
	}
	
	@Then("API should return all the users with user_id {int} and id {int}")
	public void api_should_return_all_the_users_with_user_id_and_id(int user_id,int id){
		testContext.resp.then()
		.assertThat()
		.statusCode(200)
		.body("result", not(emptyArray()))
		.body("userId", everyItem(equalTo(user_id)))
		.body("id", everyItem(equalTo(id)));
	}
	

	


}
