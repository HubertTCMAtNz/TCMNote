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
1. java 11 in GAE (https://cloud.google.com/appengine/docs/standard/java11/quickstart)  

1. Quotas (https://cloud.google.com/appengine/quotas?hl=en_US)  
- [Managing App Engine costs](https://cloud.google.com/appengine/docs/managing-costs?hl=en_US)  
- [Price](https://cloud.google.com/appengine/pricing)  
- [Google Cloud Platform SKUs](https://cloud.google.com/skus?filter=App+Engine&currency=USD)  
- [standard environment](https://cloud.google.com/appengine/docs/standard)  
- [Pricing of Google App Engine Flexible env, a $500 lesson](https://stackoverflow.com/questions/47125661/pricing-of-google-app-engine-flexible-env-a-500-lesson)  
