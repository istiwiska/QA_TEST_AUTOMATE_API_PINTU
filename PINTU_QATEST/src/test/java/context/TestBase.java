package context;

import java.io.InputStream;
import java.util.Properties;
import java.util.Random;

import cucumber.api.Scenario;
import cucumber.api.java.Before;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;

public class TestBase {
	protected String server = LoadProperties().getProperty("url");

	public Properties LoadProperties() {

		try {
			InputStream inStream = getClass().getClassLoader().getResourceAsStream("config.properties");
			Properties prop = new Properties();
			prop.load(inStream);
			return prop;
		} catch (Exception e) {
			System.out.println("File not found exception thrown for config.properties file.");
			return null;
		}

	}

}
