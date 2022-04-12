Feature: Hotel Booking In Adactin

@Ad1
Scenario Outline: Login Page

Given user Lanch The Application

When user Enter The "<username>" In Username Field

And user Enter The "<password>" In Password Field

Then user Click On the Login Button And It Navigates To The Searching Hotel Page

Examples:
|username|password|
|vijay|v123|
|VijayVijay11|G1WPI7|

@Ad2
Scenario: Search Hotel Page

When user Select The Hotel Location "Melbourne" In DropDwon

And user Select The Hotel "Hotel Creek" In DropDwon

And user Select The Room Type "Standard"In DropDwon

And user Select The Number Of Persons In Room In DropDwon

And user Enter The Check In Date "04/10/2022" In Check In Date Field

And user Enter The Check Out Date "04/13/2022" In Check Out Date

And user Select The Number Of Adults Per Room "2" In DropDown

And user Select The Number Of Childrens Per Room "1" In DropDown

Then user Click On the Search Button And It Navigates The Select Hotel Page

@Ad3
Scenario: Selecct Hotel Page

When user click On The Radio Button

Then user Click On the Continue Button And It Navigates The Book Hotel Page

@Ad4
Scenario: Book Hotel Page

When user Enter The First Name "vijay" In First Name Field

And user Enter The Last Name "R" In Last Name Field

And user Enter The Billing Address "chinna  sayakara street" In Billing Address Field

And user Enter The  Card Number In Card Number Field

And user Select The Card Type "VISA" In DropDown

And user Select The Expiry Month In DropDown 

And user Select The Expiry Year In DropDown

And user Enter CCV Number In CCV Number Field

Then user Click On The Book Now Button And It Navigates To Booking Confirmation Page

@Ad5
Scenario: Booking Confirmation Page

Then user Click On The MyItinerary Button and It Navigates To BookedItinerary Page And It Will Show Your Hotel Booking Confirmation 
