package com.configuratorreader;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

public class Adactin_Configurator {

	public  static Properties p;
	
	
	 public Adactin_Configurator() throws IOException {
		 
		 File f = new File("C:\\Users\\De\\eclipse-workspace\\March_22\\src\\main\\java\\com\\properties_file\\Adactin_Property_File.properties");

			 FileInputStream fis = new FileInputStream(f);
			
			 p=new Properties();
			
			 p.load(fis);
			 
	 }
	 
	  public String get_Url() {
		
		  String url = p.getProperty("url");
	
	     return url;
	  }
	
	  public String get_Username() {
			
		  String username = p.getProperty("username");
	
	     return username;
	  }
	
	  public String get_Password() {
			
		  String password = p.getProperty("password");
	
	     return password;
	  }
	
	  public String get_Cardnum() {
			
		  String cardnum = p.getProperty("cardnum");
	
	     return cardnum;
	  }
	
	  
	  
	  
	  
	
	}

