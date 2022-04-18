@api @get
Feature: I am testing get request for Get Rest API
  Scenario: Get request to fetch all users
    Given Go rest API is up and running
    When I hit the api with get request and end point as "/posts"
    Then API should return all the users

  Scenario: Get request to fetch all users with id = 1 to check api resource filter
    Given Go rest API is up and running
    When I hit the api with get request and end point as "/posts?id=1"
    Then API should return all the id 1
    
  Scenario: API should get response status code as 200 for incorrect id
    Given Go rest API is up and running
    When I hit the api with get request and end point as "/posts?id=190"
    Then API should return user not found response for id 190
 
  Scenario: Get request to fetch all users with user_id 10 and id 99 to check api resource filter
    Given Go rest API is up and running
    When I hit the api with get request and end point as "/posts?userId=10&id=99"
    Then API should return all the users with user_id 10 and id 99