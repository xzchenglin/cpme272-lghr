#!/usr/bin/env bash

#
# Hyunwook Shin
#

JAR_FILE = lghr-service/target/lghr-service-1.0.jar

clean:
	rm -rf $(JAR_FILE)

rest: $(JAR_FILE)
	java -cp $(JAR_FILE) service.RestService

ad: $(JAR_FILE)
	java -cp $(JAR_FILE) service.AuthService

$(JAR_FILE):
	mvn clean install
