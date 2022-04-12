package com.stepDefination;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;

import com.adactintestrunner.Adactin_Runner_Class;
import com.base_class.Base_Class;
import com.configuratorreader.Adactin_File;
import com.pageobjctmanager.Pagd_Object_Manager_Adactin;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Defination extends Base_Class {

	public static  WebDriver driver = Adactin_Runner_Class.driver;
	
	public static Pagd_Object_Manager_Adactin pom= new Pagd_Object_Manager_Adactin(driver);

	@Before
	
	public void before_Hooks(Scenario s) {
		
		String name =s.getName();
	System.out.println("scenario Name: "+name);
	}
	
	@After
	public void after_Hooks(Scenario s) {

		if(s.isFailed()) {
		
		} 
		
		String status =s.getStatus();
		System.out.println("Scenario Status: "+status );
	}
	@Given("^user Lanch The Application$")
	public void user_Lanch_The_Application() throws Throwable {

		geturl(Adactin_File.get_Instene().get_Reader().get_Url());
		
			}

	@When("^user Enter The \"([^\"]*)\" In Username Field$")
	public void user_Enter_The_In_Username_Field(String user) throws Throwable {
	
		wait(30,TimeUnit.SECONDS);
		inputValueElement(pom.getLog().getUser(),user);
		
		
	}

	@When("^user Enter The \"([^\"]*)\" In Password Field$")
	public void user_Enter_The_In_Password_Field(String password) throws Throwable {
	
		inputValueElement(pom.getLog().getPassword(),password);
	    
	    
	}

	@Then("^user Click On the Login Button And It Navigates To The Searching Hotel Page$")
	public void user_Click_On_the_Login_Button_And_It_Navigates_To_The_Searching_Hotel_Page() throws Throwable {
	    
		clickOnElement(pom.getLog().getLogin());
	    
			}

	@When("^user Select The Hotel Location \"([^\"]*)\" In DropDwon$")
	public void user_Select_The_Hotel_Location_In_DropDwon(String location) throws Throwable {
	 
		dropdown("byvalue",pom.getHd().getLocation(),location);
		
	    
	}

	@When("^user Select The Hotel \"([^\"]*)\" In DropDwon$")
	public void user_Select_The_Hotel_In_DropDwon(String hotel) throws Throwable {
	    
		dropdown("byvalue",pom.getHd().getHotel(),hotel);
			    
	}

	@When("^user Select The Room Type \"([^\"]*)\"In DropDwon$")
	public void user_Select_The_Room_Type_In_DropDwon(String roomType) throws Throwable {
	    
		dropdown("byvalue",pom.getHd().getRoomType(),roomType);
		
	  
	}

	@When("^user Select The Number Of Persons In Room In DropDwon$")
	public void user_Select_The_Number_Of_Persons_In_Room_In_DropDwon() throws Throwable {

	
		dropdown("byindex",pom.getHd().getNumOfRoom(),textdata("C:\\Users\\De\\eclipse-workspace\\Cucumber_Adactin\\Adactin.xlsx",18, 5));
    
	}

	@When("^user Enter The Check In Date \"([^\"]*)\" In Check In Date Field$")
	public void user_Enter_The_Check_In_Date_In_Check_In_Date_Field(String CheckIn) throws Throwable {
		
		pom.getHd().getCheckIn().clear();
		inputValueElement(pom.getHd().getCheckIn(),CheckIn);
	
	}

	@When("^user Enter The Check Out Date \"([^\"]*)\" In Check Out Date$")
	public void user_Enter_The_Check_Out_Date_In_Check_Out_Date(String CheckOut) throws Throwable {
		
		pom.getHd().getCheckOut().clear();
		
		inputValueElement(pom.getHd().getCheckOut(),CheckOut);
		
		
	}

	@When("^user Select The Number Of Adults Per Room \"([^\"]*)\" In DropDown$")
	public void user_Select_The_Number_Of_Adults_Per_Room_In_DropDown(String Adults) throws Throwable {
		
		dropdown("byvalue",pom.getHd().getAdut(),Adults);  
	
	}

	@When("^user Select The Number Of Childrens Per Room \"([^\"]*)\" In DropDown$")
	public void user_Select_The_Number_Of_Childrens_Per_Room_In_DropDown(String child) throws Throwable {
		
		dropdown("byvalue",pom.getHd().getChild(),child);  
	
	}

	@Then("^user Click On the Search Button And It Navigates The Select Hotel Page$")
	public void user_Click_On_the_Search_Button_And_It_Navigates_The_Select_Hotel_Page() throws Throwable {

		clickOnElement(pom.getHd().getSearch());
	    
		}

	@When("^user click On The Radio Button$")
	public void user_click_On_The_Radio_Button() throws Throwable {
  
		wait(30,TimeUnit.SECONDS);

		clickOnElement(pom.getHs().getRadio());
	
	
	}

	@Then("^user Click On the Continue Button And It Navigates The Book Hotel Page$")
	public void user_Click_On_the_Continue_Button_And_It_Navigates_The_Book_Hotel_Page() throws Throwable {

		clickOnElement(pom.getHs().getCon());
		}

	@When("^user Enter The First Name \"([^\"]*)\" In First Name Field$")
	public void user_Enter_The_First_Name_In_First_Name_Field(String fn) throws Throwable {
	    
		inputValueElement(pom.getHb().getFn(),fn);
		}

	@When("^user Enter The Last Name \"([^\"]*)\" In Last Name Field$")
	public void user_Enter_The_Last_Name_In_Last_Name_Field(String ln) throws Throwable {
	    
		inputValueElement(pom.getHb().getLa(),ln);
		}

	@When("^user Enter The Billing Address \"([^\"]*)\" In Billing Address Field$")
	public void user_Enter_The_Billing_Address_In_Billing_Address_Field(String address) throws Throwable {
	   
		inputValueElement(pom.getHb().getAddress(),address);
		}

	@When("^user Enter The  Card Number In Card Number Field$")
	public void user_Enter_The_Card_Number_In_Card_Number_Field() throws Throwable {
		
		
		inputValueElement(pom.getHb().getCcNum(),textdata("C:\\Users\\De\\eclipse-workspace\\Cucumber_Adactin\\Adactin.xlsx",31, 5));

		}

	@When("^user Select The Card Type \"([^\"]*)\" In DropDown$")
	public void user_Select_The_Card_Type_In_DropDown(String type) throws Throwable {
	
		dropdown("byvalue",pom.getHb().getCcType(),type);
		}

	@When("^user Select The Expiry Month In DropDown$")
	public void user_Select_The_Expiry_Month_In_DropDown() throws Throwable {
	
		
		dropdown("byvalue",pom.getHb().getMon(),textdata("C:\\Users\\De\\eclipse-workspace\\Cucumber_Adactin\\Adactin.xlsx",33, 5));
	
	}

	@When("^user Select The Expiry Year In DropDown$")
	public void user_Select_The_Expiry_Year_In_DropDown() throws Throwable {
	   
		dropdown("byvalue",pom.getHb().getYear(),textdata("C:\\Users\\De\\eclipse-workspace\\Cucumber_Adactin\\Adactin.xlsx",34, 5));
		
	}

	@When("^user Enter CCV Number In CCV Number Field$")
	public void user_Enter_CCV_Number_In_CCV_Number_Field() throws Throwable {
	    
		inputValueElement(pom.getHb().getCcv(),Adactin_File.get_Instene().get_Reader().get_Password());

	 	}

	@Then("^user Click On The Book Now Button And It Navigates To Booking Confirmation Page$")
	public void user_Click_On_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation_Page() throws Throwable {
	   
		clickOnElement(pom.getHb().getBookNow());
	 
	}

	@Then("^user Click On The MyItinerary Button and It Navigates To BookedItinerary Page And It Will Show Your Hotel Booking Confirmation$")
	public void user_Click_On_The_MyItinerary_Button_and_It_Navigates_To_BookedItinerary_Page_And_It_Will_Show_Your_Hotel_Booking_Confirmation() throws Throwable {
	 
		wait(30,TimeUnit.SECONDS);
		clickOnElement(pom.getIp().getInvoice());

		}



}
