#!/bin/sh
params="-DskipTests -P local-nexus-repo,registry2"

DIR=`dirname $0`
echo ${DIR}
#cd ${DIR}/../e-school-service-user-session/ && ./mvnw clean install ${params}
#cd ${DIR}/ && ./mvnw  clean deploy ${params}
cd ${DIR}/../e-school-service-user-session/ && ./mvnw clean deploy ${params}
