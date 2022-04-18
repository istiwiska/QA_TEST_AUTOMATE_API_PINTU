@api @post
Feature: I am testing post request for Post Rest API

  Scenario: Post request to create a post in the API
    Given Go rest API is up and running
    And I set header and body to create new user
    When I hit the api with post request and end point as "/posts"
    Then API created a new User in the system
    
  Scenario: Post request to validate response when no body is sent
    Given Go rest API is up and running
    And I set header and but with out any body
    When I hit the api with post request and end point as "/posts"
    Then API returned the successful code when request to validate response when no body is sent as 201
    
  Scenario: Post request to validate response when empty field values are sent in body
    Given Go rest API is up and running
    And I set header and body with fields but no values
    When I hit the api with post request and end point as "/posts"
    Then API returned the successful code when request to validate response when empty field values are sent in body as 201
    
  Scenario: Post request to validate response when incorrect data types for all fields are sent
    Given Go rest API is up and running
    And I set header and body with incorrect data types are sent for every field
    When I hit the api with post request and end point as "/posts"
    Then API returned the successful code when request to validate response when incorrect data types for all fields are sent as 201
 