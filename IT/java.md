# Commands, settings related with Java dev

1. How to install gradle:  

    ```sh
    wget https://services.gradle.org/distributions/gradle-5.4.1****-bin.zip -P /tmp
    sudo unzip -d /opt/gradle /tmp/gradle-*.zip

    sudo nano /etc/profile.d/gradle.sh

    export GRADLE_HOME=/opt/gradle/gradle-5.***
    export PATH=${GRADLE_HOME}/bin:${PATH}

    chmod +x /etc/profile.d/gradle.sh
    source /etc/profile.d/gradle.sh

    verify:
    gradle -v
    ```

    [reference](https://linuxize.com/post/how-to-install-gradle-on-ubuntu-18-04/)  

1. Install java8  
    [reference](https://websiteforstudents.com/how-to-install-oracle-java-jdk8-on-ubuntu-16-04-17-10-18-04-desktops/)  

1. view gradle task: `gradle tasks`  

1. graphql java  
    [graphql java](https://www.graphql-java.com/documentation/v12/)  
    [graphql java-tools](https://stackoverflow.com/questions/52868759/difference-in-usage-of-graphql-java-vs-graphql-java-tools)  
    [graphql java-tools](https://github.com/graphql-java-kickstart/graphql-java-tools)  
    [code first](https://www.howtographql.com/graphql-java/11-alternative-approaches/)  
    [spqr](https://github.com/leangen/graphql-spqr)  
    [code first vs schema first](https://committed.software/posts/graphql-java/graphql-java/)  
    [spring + graphql  Okta](https://developer.okta.com/blog/2018/08/16/secure-api-spring-boot-graphql)  
    [graphql java authentication](https://www.howtographql.com/graphql-java/5-authentication/)  
    [graphql java demo](https://github.com/npalm/graphql-java-demo)  
    [auth directive](https://www.graphql-java.com/documentation/v11/sdl-directives/)  
    [graphql spring boot](https://github.com/graphql-java-kickstart/graphql-spring-boot)  
    [tutorial](https://www.graphql-java-kickstart.com/servlet/getting-started/)  

1. spring boot  
    [security](https://www.baeldung.com/spring-security-login)  
    [rest api security](https://www.baeldung.com/securing-a-restful-web-service-with-spring-security)  
    [security](https://medium.com/@nydiarra/secure-a-spring-boot-rest-api-with-json-web-token-reference-to-angular-integration-e57a25806c50)  
    [security-angular](https://github.com/ipassynk/angular-springboot-jwt)  
    [tooken in cookie](https://stackoverflow.com/questions/44923418/store-token-from-oauth2-server-in-cookie-using-spring-oauth)  

1. Google App Engine  
    [document](https://cloud.google.com/appengine/)  
    [GAE + spring boot](https://medium.com/google-cloud/getting-started-with-google-app-engine-and-spring-boot-in-5-steps-2d0f8165c89)  
    [price](https://cloud.google.com/appengine/pricing)  
    [java quick start](https://cloud.google.com/appengine/docs/standard/java/quickstart)  
    [GAE](https://github.com/GoogleCloudPlatform/getting-started-java/tree/master/appengine-standard-java8/springboot-appengine-standard)  
    [GAE+gradle](https://github.com/int128/appengine-spring-boot-starter)  
    [GAE examples](https://github.com/spring-cloud/spring-cloud-gcp/tree/master/spring-cloud-gcp-samples)  
    [GAE flex env](https://medium.com/@wkrzywiec/how-to-publish-a-spring-boot-app-with-a-database-on-the-google-cloud-platform-614b88613ce3)  
    [GAE standard env](https://vitalflux.com/spring-boot-app-on-google-app-engine-standard-environment/)  
    [GAE gradle standard env](https://cloud.google.com/appengine/docs/standard/java/tools/gradle)  
    [Google chart API to create QR code](https://developers.google.com/chart/?csw=1)  
    [GAE](https://cloud.google.com/appengine/kb/)  
    [java8](https://cloud.google.com/appengine/docs/standard/java/runtime)  
    [GAE zxing](https://stackoverflow.com/questions/23189048/google-app-engine-generate-qr-code)  
