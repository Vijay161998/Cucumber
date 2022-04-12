package com.adactintestrunner;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.base_class.Base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
   
	features = "src\\test\\java\\com\\featur\\adactin.feature",

     glue = "com.stepDefination",
     
     monochrome = true,
     
     strict =true,
     plugin = {"html:Reports/Cucumber_Report",
    		 
    		 "json:Report/Jsonreport.json",
    		"com.cucumber.listener.ExtentCucumberFormatter:Reports/Exten.html"

	}
)
public class Adactin_Runner_Class  {

	public static WebDriver driver;
	
	@BeforeClass 

	public static  void set_Up() {

		driver=Base_Class.browser_Configuration("chrome");

	}
	@AfterClass
	public static void tear_Down() {

		Base_Class.sessionEnd("close");
	}


}

