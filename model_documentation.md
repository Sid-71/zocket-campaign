# Model Documentation


# Campaign Model Documentation

This document provides an overview of the Campaign model's schema and fields.

## Campaign Schema

The Campaign schema defines the structure of a campaign object.

- `campaignName` (String): The name of the campaign.
- `startDate` (Date, default: Current date): The start date of the campaign.
- `endDate` (Date, default: Current date): The end date of the campaign.
- `clicks` (Number, default: 0): The number of clicks for the campaign.
- `location` (String): The location of the campaign.
- `platform` (String): The platform of the campaign.
- `status` (Number): The status of the campaign (0: live now, 1: paused, 2: exhausted).
- `budget` (Number): The budget allocated for the campaign.
- `targetRadius` (Number): The target radius for the campaign.
- `image` (String): The image associated with the campaign.
- `description` (String): A description of the campaign.
- `userId` (Reference to User model): The ID of the user associated with the campaign.
- `isOn` (Boolean, default: false): Indicates whether the campaign is active.

## Campaign Model

The Campaign model is created based on the Campaign schema and allows you to interact with campaign data in your application.

- **Model Name:** Campaign
- **Schema:** Campaign Schema

You can use the Campaign model to perform operations such as creating, updating, and retrieving campaign data in your application.





## Product Schema

The Product schema defines the structure of a product object.

- `name` (String): The name of the product.
- `image` (String): The URL or path to the product's image.
- `text` (String): Additional text or description for the product.
- `price` (Number): The price of the product.

## Product Model

The Product model is created based on the Product schema and allows you to interact with product data in your application.

- **Model Name:** Product
- **Schema:** Product Schema

You can use the Product model to perform operations such as creating, updating, and retrieving product data in your application.


# User Model Documentation

This document provides an overview of the User model's schema and fields.

## User Schema

The User schema defines the structure of a user object.

- `userName` (String): The username of the user.
- `email` (String): The email address of the user.
- `password` (String): The password of the user.

## User Model

The User model is created based on the User schema and allows you to interact with user data in your application.

- **Model Name:** User
- **Schema:** User Schema

You can use the User model to perform operations related to user authentication and management in your application.

---

# Task Model Documentation

This document provides an overview of the Task model's schema and fields.

## Task Schema

The Task schema defines the structure of a task object.

- `name` (String): The name of the task.
- `platform` (String): The platform associated with the task.
- `description` (String): A description of the task.

## Task Model

The Task model is created based on the Task schema and allows you to interact with task data in your application.

- **Model Name:** Task
- **Schema:** Task Schema

You can use the Task model to perform operations related to task management in your application.
