# API Documentation

This document provides an overview of the API endpoints and their usage.

## Authentication

### Sign Up

- **URL:** `/signup`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  - `userName` (string): User's username.
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:**
    ```json
    {
      "user": {
        "userName": "John",
        "email": "john@example.com"
      },
      "token": "your-auth-token"
    }
    ```
- **Error Responses:**
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "Please enter all details"
    }
    ```
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "User already exists"
    }
    ```

### Sign In

- **URL:** `/signin`
- **Method:** `POST`
- **Description:** Sign in as a registered user.
- **Request Body:**
  - `userName` (string): User's username.
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:**
    ```json
    {
      "user": {
        "userName": "John",
        "email": "john@example.com"
      },
      "token": "your-auth-token"
    }
    ```
- **Error Responses:**
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "Please enter all details"
    }
    ```
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "User not found"
    }
    ```
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "Invalid Credentials"
    }
    ```



# Campaign API Documentation

This document provides an overview of the Campaign API endpoints and their usage.

## Create Campaign

- **URL:** `/campaign/create-campaign`
- **Method:** `POST`
- **Description:** Create a new campaign.
- **Request Body:**
  - `campaignName` (string): Name of the campaign.
  - `startDate` (date, optional): Start date of the campaign (default: current date).
  - `endDate` (date, optional): End date of the campaign (default: current date).
  - `clicks` (number, default: 0): Number of clicks for the campaign.
  - `location` (string): Location of the campaign.
  - `platform` (string): Platform for the campaign.
  - `status` (number): Status of the campaign (0->live now, 1->paused, 2->exhausted).
  - `budget` (number): Budget for the campaign.
  - `targetRadius` (number): Target radius for the campaign.
  - `image` (string): URL of the campaign image.
  - `description` (string): Description of the campaign.
  - `userId` (string): ID of the user associated with the campaign.
  - `isOn` (boolean, default: false): Whether the campaign is on.
- **Success Response:**
  - **Status:** 201 Created
  - **Response Body:** Campaign object.
- **Error Response:**
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "Invalid data"
    }
    ```

## Get Campaign

- **URL:** `/campaign/get-campaign`
- **Method:** `GET`
- **Description:** Get campaigns based on filter criteria.
- **Query Parameters:**
  - `userId` (string): ID of the user.
  - `platform` (string, optional): Platform for filtering.
  - `status` (number, optional): Status for filtering.
  - `name` (string, optional): Name for filtering using case-insensitive pattern matching.
  - `days` (number, optional): Number of days to filter campaigns based on creation date.
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:** Array of campaign objects.
- **Error Response:**
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "message": "Invalid data"
    }
    ```

## Delete Campaign

- **URL:** `/campaign/delete-campaign`
- **Method:** `DELETE`
- **Description:** Delete a campaign by its ID.
- **Query Parameters:**
  - `campaignId` (string): ID of the campaign to delete.
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:** Deleted campaign object.
- **Error Response:**
  - **Status:** 404 Not Found
  - **Response Body:**
    ```json
    {
      "message": "Campaign not found"
    }
    ```

## Edit Campaign

- **URL:** `/campaign/edit-campaign`
- **Method:** `POST`
- **Description:** Edit a campaign by its ID.
- **Query Parameters:**
  - `campaignId` (string): ID of the campaign to edit.
- **Request Body:**
  - `payload` (object): Updated campaign data (same structure as Create Campaign request body).
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:** Updated campaign object.
- **Error Response:**
  - **Status:** 404 Not Found
  - **Response Body:**
    ```json
    {
      "message": "Campaign not found"
    }
    ```



    # Products API Documentation

This document provides an overview of the Products API endpoint and its usage.

## Get Products

- **URL:** `/product/get-product`
- **Method:** `GET`
- **Description:** Get a list of all products.
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:** Array of product objects.
- **Error Response:**
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "error": "Error message",
      "stack": "Error stack trace"
    }
    ```




    # Task API Documentation

This document provides an overview of the Task API endpoint and its usage. this represents all those task like in page 1 . what you want to choose like get leads as calls, get leads as facebook.

## Get Tasks

- **URL:** `/task/get-task`
- **Method:** `GET`
- **Description:** Get a list of all tasks.
- **Success Response:**
  - **Status:** 200 OK
  - **Response Body:** Array of task objects.
- **Error Response:**
  - **Status:** 400 Bad Request
  - **Response Body:**
    ```json
    {
      "error": "Error message",
      "stack": "Error stack trace"
    }
    ```
