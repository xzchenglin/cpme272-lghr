#!/usr/bin/env bash

JAR_FILE = lghr-service/target/lghr-service-1.0.jar

clean:
	rm -rf $(JAR_FILE)

all: $(JAR_FILE)
	java -cp $(JAR_FILE) service.RestService

$(JAR_FILE):
	mvn clean install
