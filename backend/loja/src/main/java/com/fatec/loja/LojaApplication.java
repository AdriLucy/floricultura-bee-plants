package com.fatec.loja;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;

@SpringBootApplication
@CrossOrigin( origins = "*" )
public class LojaApplication {

	public static void main(String[] args) {
		SpringApplication.run(LojaApplication.class, args);
	}

}
