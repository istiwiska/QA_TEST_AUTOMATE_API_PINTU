$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/api/GetRequests.feature");
formatter.feature({
  "name": "I am testing get request for Get Rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get"
    }
  ]
});
formatter.scenario({
  "name": "Get request to fetch all users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with get request and end point as \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefs.i_hit_the_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the users",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefs.api_should_return_all_the_users()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch all users with id \u003d 1 to check api resource filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with get request and end point as \"/posts?id\u003d1\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefs.i_hit_the_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the id 1",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefs.api_should_return_all_the_id(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "API should get response status code as 200 for incorrect id",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with get request and end point as \"/posts?id\u003d190\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefs.i_hit_the_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return user not found response for id 190",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefs.api_should_return_user_not_found_response(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get request to fetch all users with user_id 10 and id 99 to check api resource filter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@get"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with get request and end point as \"/posts?userId\u003d10\u0026id\u003d99\"",
  "keyword": "When "
});
formatter.match({
  "location": "GetRequestStepDefs.i_hit_the_api_with_get_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API should return all the users with user_id 10 and id 99",
  "keyword": "Then "
});
formatter.match({
  "location": "GetRequestStepDefs.api_should_return_all_the_users_with_user_id_and_id(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("features/api/PostRequests.feature");
formatter.feature({
  "name": "I am testing post request for Post Rest API",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@post"
    }
  ]
});
formatter.scenario({
  "name": "Post request to create a post in the API",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body to create new user",
  "keyword": "And "
});
formatter.match({
  "location": "PostRequestStepDefs.i_set_header_and_body_to_create_new_user()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostRequestStepDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API created a new User in the system",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequestStepDefs.api_created_a_new_User_in_the_system()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post request to validate response when no body is sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and but with out any body",
  "keyword": "And "
});
formatter.match({
  "location": "PostRequestStepDefs.i_set_header_and_but_with_out_any_body()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostRequestStepDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the successful code when request to validate response when no body is sent as 201",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequestStepDefs.api_returned_the_successful_code_as1(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post request to validate response when empty field values are sent in body",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body with fields but no values",
  "keyword": "And "
});
formatter.match({
  "location": "PostRequestStepDefs.i_set_header_and_body_with_fields_but_no_values()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostRequestStepDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the successful code when request to validate response when empty field values are sent in body as 201",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequestStepDefs.api_returned_the_successful_code_as2(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Post request to validate response when incorrect data types for all fields are sent",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@api"
    },
    {
      "name": "@post"
    }
  ]
});
formatter.step({
  "name": "Go rest API is up and running",
  "keyword": "Given "
});
formatter.match({
  "location": "GetRequestStepDefs.go_rest_API_is_up_and_running()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I set header and body with incorrect data types are sent for every field",
  "keyword": "And "
});
formatter.match({
  "location": "PostRequestStepDefs.i_set_header_and_body_with_incorrect_data_types_are_sent_for_every_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I hit the api with post request and end point as \"/posts\"",
  "keyword": "When "
});
formatter.match({
  "location": "PostRequestStepDefs.i_hit_the_api_with_post_request_and_end_point_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returned the successful code when request to validate response when incorrect data types for all fields are sent as 201",
  "keyword": "Then "
});
formatter.match({
  "location": "PostRequestStepDefs.api_returned_the_successful_code_as3(Integer)"
});
formatter.result({
  "status": "passed"
});
});