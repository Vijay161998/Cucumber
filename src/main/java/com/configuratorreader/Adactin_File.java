package com.configuratorreader;

import java.io.IOException;

public class Adactin_File {
	
	private Adactin_File() {
		
	
	}
	
	
	public static Adactin_File get_Instene() throws IOException {
		

		Adactin_File reader = new Adactin_File();
		
		return reader;
	}

	public Adactin_Configurator get_Reader() throws IOException {
		
		
		Adactin_Configurator ac = new Adactin_Configurator();
		
		return ac;
		
	}
	
	
	
	

}
