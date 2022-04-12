$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/featur/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin",
  "description": "",
  "id": "hotel-booking-in-adactin",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin;login-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lanch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cusername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"\u003cpassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On the Login Button And It Navigates To The Searching Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin;login-page;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin;login-page;;1"
    },
    {
      "cells": [
        "vijay",
        "v123"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin;login-page;;2"
    },
    {
      "cells": [
        "VijayVijay11",
        "G1WPI7"
      ],
      "line": 17,
      "id": "hotel-booking-in-adactin;login-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 42616127,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin;login-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lanch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"vijay\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"v123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On the Login Button And It Navigates To The Searching Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_Lanch_The_Application()"
});
formatter.result({
  "duration": 13423274294,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijay",
      "offset": 16
    }
  ],
  "location": "Step_Defination.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 5030884344,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "v123",
      "offset": 16
    }
  ],
  "location": "Step_Defination.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 147393940,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Click_On_the_Login_Button_And_It_Navigates_To_The_Searching_Hotel_Page()"
});
formatter.result({
  "duration": 2558304831,
  "status": "passed"
});
formatter.after({
  "duration": 906589,
  "status": "passed"
});
formatter.before({
  "duration": 134278,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Login Page",
  "description": "",
  "id": "hotel-booking-in-adactin;login-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Ad1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Lanch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"VijayVijay11\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user Enter The \"G1WPI7\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Click On the Login Button And It Navigates To The Searching Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_Lanch_The_Application()"
});
formatter.result({
  "duration": 462823839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VijayVijay11",
      "offset": 16
    }
  ],
  "location": "Step_Defination.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 134815864,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "G1WPI7",
      "offset": 16
    }
  ],
  "location": "Step_Defination.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 100042593,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Click_On_the_Login_Button_And_It_Navigates_To_The_Searching_Hotel_Page()"
});
formatter.result({
  "duration": 1771151549,
  "status": "passed"
});
formatter.after({
  "duration": 129146,
  "status": "passed"
});
formatter.before({
  "duration": 382735,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin;search-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Ad2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "user Select The Hotel Location \"Melbourne\" In DropDwon",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user Select The Hotel \"Hotel Creek\" In DropDwon",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Select The Room Type \"Standard\"In DropDwon",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Select The Number Of Persons In Room In DropDwon",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Enter The Check In Date \"04/10/2022\" In Check In Date Field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Enter The Check Out Date \"04/13/2022\" In Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Select The Number Of Adults Per Room \"2\" In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Select The Number Of Childrens Per Room \"1\" In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Click On the Search Button And It Navigates The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Melbourne",
      "offset": 32
    }
  ],
  "location": "Step_Defination.user_Select_The_Hotel_Location_In_DropDwon(String)"
});
formatter.result({
  "duration": 279400231,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 23
    }
  ],
  "location": "Step_Defination.user_Select_The_Hotel_In_DropDwon(String)"
});
formatter.result({
  "duration": 151562114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Standard",
      "offset": 27
    }
  ],
  "location": "Step_Defination.user_Select_The_Room_Type_In_DropDwon(String)"
});
formatter.result({
  "duration": 131050951,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Select_The_Number_Of_Persons_In_Room_In_DropDwon()"
});
formatter.result({
  "duration": 6949581215,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/10/2022",
      "offset": 30
    }
  ],
  "location": "Step_Defination.user_Enter_The_Check_In_Date_In_Check_In_Date_Field(String)"
});
formatter.result({
  "duration": 314333866,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "04/13/2022",
      "offset": 31
    }
  ],
  "location": "Step_Defination.user_Enter_The_Check_Out_Date_In_Check_Out_Date(String)"
});
formatter.result({
  "duration": 285481651,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 43
    }
  ],
  "location": "Step_Defination.user_Select_The_Number_Of_Adults_Per_Room_In_DropDown(String)"
});
formatter.result({
  "duration": 136394270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 46
    }
  ],
  "location": "Step_Defination.user_Select_The_Number_Of_Childrens_Per_Room_In_DropDown(String)"
});
formatter.result({
  "duration": 147127095,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Click_On_the_Search_Button_And_It_Navigates_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 2096751501,
  "status": "passed"
});
formatter.after({
  "duration": 179180,
  "status": "passed"
});
formatter.before({
  "duration": 131284,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Selecct Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin;selecct-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 40,
      "name": "@Ad3"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "user click On The Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user Click On the Continue Button And It Navigates The Book Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_click_On_The_Radio_Button()"
});
formatter.result({
  "duration": 116737526,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Click_On_the_Continue_Button_And_It_Navigates_The_Book_Hotel_Page()"
});
formatter.result({
  "duration": 1611542596,
  "status": "passed"
});
formatter.after({
  "duration": 374609,
  "status": "passed"
});
formatter.before({
  "duration": 116745,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Book Hotel Page",
  "description": "",
  "id": "hotel-booking-in-adactin;book-hotel-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 47,
      "name": "@Ad4"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "user Enter The First Name \"vijay\" In First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "user Enter The Last Name \"R\" In Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user Enter The Billing Address \"chinna  sayakara street\" In Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user Enter The  Card Number In Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "user Select The Card Type \"VISA\" In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "user Select The Expiry Month In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "user Select The Expiry Year In DropDown",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "user Enter CCV Number In CCV Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 66,
  "name": "user Click On The Book Now Button And It Navigates To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "vijay",
      "offset": 27
    }
  ],
  "location": "Step_Defination.user_Enter_The_First_Name_In_First_Name_Field(String)"
});
formatter.result({
  "duration": 176462966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "R",
      "offset": 26
    }
  ],
  "location": "Step_Defination.user_Enter_The_Last_Name_In_Last_Name_Field(String)"
});
formatter.result({
  "duration": 106967312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chinna  sayakara street",
      "offset": 32
    }
  ],
  "location": "Step_Defination.user_Enter_The_Billing_Address_In_Billing_Address_Field(String)"
});
formatter.result({
  "duration": 195495789,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Enter_The_Card_Number_In_Card_Number_Field()"
});
formatter.result({
  "duration": 326946153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VISA",
      "offset": 27
    }
  ],
  "location": "Step_Defination.user_Select_The_Card_Type_In_DropDown(String)"
});
formatter.result({
  "duration": 147188674,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Select_The_Expiry_Month_In_DropDown()"
});
formatter.result({
  "duration": 330144447,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Select_The_Expiry_Year_In_DropDown()"
});
formatter.result({
  "duration": 325092348,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Enter_CCV_Number_In_CCV_Number_Field()"
});
formatter.result({
  "duration": 150611050,
  "status": "passed"
});
formatter.match({
  "location": "Step_Defination.user_Click_On_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 99533705,
  "status": "passed"
});
formatter.after({
  "duration": 114179,
  "status": "passed"
});
formatter.before({
  "duration": 111185,
  "status": "passed"
});
formatter.scenario({
  "line": 69,
  "name": "Booking Confirmation Page",
  "description": "",
  "id": "hotel-booking-in-adactin;booking-confirmation-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@Ad5"
    }
  ]
});
formatter.step({
  "line": 71,
  "name": "user Click On The MyItinerary Button and It Navigates To BookedItinerary Page And It Will Show Your Hotel Booking Confirmation",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Defination.user_Click_On_The_MyItinerary_Button_and_It_Navigates_To_BookedItinerary_Page_And_It_Will_Show_Your_Hotel_Booking_Confirmation()"
});
formatter.result({
  "duration": 30254092696,
  "status": "passed"
});
formatter.after({
  "duration": 108192,
  "status": "passed"
});
});