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

1. view gradle task: `gradle tasks`  

1. graphql java
    https://www.graphql-java.com/documentation/v12/
    https://stackoverflow.com/questions/52868759/difference-in-usage-of-graphql-java-vs-graphql-java-tools