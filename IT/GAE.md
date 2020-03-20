# setup environment

1. Install SDK  

    [reference](https://cloud.google.com/appengine/docs/standard/java/quickstart)  

    ```steps
    download sdk: https://cloud.google.com/sdk/docs/

    gcloud components install app-engine-java

    ```
    
1. Objectify  
- [query](https://github.com/objectify/objectify/wiki/Queries)  
    ```
    Objectify does not index properties by default. You must explicitly define single-property indexes with the @Index annotation:
    ```
 
    ```java
    import com.googlecode.objectify.annotation.Entity;
    import com.googlecode.objectify.annotation.Id;
    import com.googlecode.objectify.annotation.Index;

    @Entity
    public class Car {
        @Id Long id;
        @Index String vin;
    }
    ```
- 