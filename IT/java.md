# Commands, settings related with Java dev

1. vscode compile java  
    [extension](https://github.com/redhat-developer/vscode-java/blob/master/README.md)  

1. code style  
    [google code style](https://google.github.io/styleguide/javaguide.html)  

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

1. uninstall jdk  

    ```sh
    sudo update-alternatives --remove "java" "/usr/lib/jvm/jdk[version]/bin/java"

    sudo update-alternatives --remove "javac" "/usr/lib/jvm/jdk[version]/bin/javac"

    sudo update-alternatives --remove "javaws" "/usr/lib/jvm/jdk[version]/jre/bin/javaws"

    sudo rm -r /usr/lib/jvm/jdk[version]

    sudo apt-get remove openjdk*
    sudo apt-get purge openjdk*
    sudo apt-get purge --auto-remove openjdk*
    ```

    [reference](https://novicestuffs.wordpress.com/2017/04/25/how-to-uninstall-java-from-linux/)  

1. Install java8  
    [reference](https://websiteforstudents.com/how-to-install-oracle-java-jdk8-on-ubuntu-16-04-17-10-18-04-desktops/)  
    [reference](https://tecadmin.net/install-oracle-java-8-ubuntu-via-ppa/)  
    [reference](http://tipsonubuntu.com/2016/07/31/install-oracle-java-8-9-ubuntu-16-04-linux-mint-18/)  

    ```sh (does not work)
    sudo add-apt-repository ppa:webupd8team/java
    sudo apt update; sudo apt install oracle-java8-installer
    javac -version
    sudo apt install oracle-java8-set-default
    ```

    Oracle-Java8-Installer: No installation candidate

    ```does not work
    As root, go to this folder: /etc/apt/sources.list.d
    Locate this file: webupd8team-java.list and delete it.
    Execute sudo apt-get update for the system to remove any reference to that update server.
    Execute sudo add-apt-repository ppa:webupd8team/java to add the correct ppa to your system.
    Execute sudo apt-get update again and you should be able to install everything correctly.
    ```

    [openjdk-8](https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04)  

    ```sh instal java8
    # https://www.liquidweb.com/kb/install-oracle-java-ubuntu-18-04/
    # https://www.digitalocean.com/community/tutorials/how-to-install-java-with-apt-on-ubuntu-18-04
    sudo apt install openjdk-8-jdk
    sudo update-alternatives --config java
    sudo update-alternatives --config javac
    # set $JAVA_HOME
    sudo vim /etc/environment
    # Add JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64/bin/"
    source /etc/environment
    ```
    
    [uninstall java 8](https://novicestuffs.wordpress.com/2017/04/25/how-to-uninstall-java-from-linux/)  
    [unistall all java versions](https://askubuntu.com/questions/84483/how-to-completely-uninstall-java)  
    ```sh
    sudo apt-get remove “openjdk*”
    dpkg-query -W -f='${binary:Package}\n' | grep -E -e '^(ia32-)?(sun|oracle)-java' -e '^openjdk-' -e '^icedtea' -e '^(default|gcj)-j(re|dk)' -e '^gcj-(.*)-j(re|dk)' -e '^java-common' | xargs sudo apt-get -y remove
sudo apt-get -y autoremove
    dpkg -l | grep ^rc | awk '{print($2)}' | xargs sudo apt-get -y purge
    sudo bash -c 'ls -d /home/*/.java' | xargs sudo rm -rf
    sudo rm -rf /usr/lib/jvm/*
    for g in ControlPanel java java_vm javaws jcontrol jexec keytool mozilla-javaplugin.so orbd pack200 policytool rmid rmiregistry servertool tnameserv unpack200 appletviewer apt extcheck HtmlConverter idlj jar jarsigner javac javadoc javah javap jconsole jdb jhat jinfo jmap jps jrunscript jsadebugd jstack jstat jstatd native2ascii rmic schemagen serialver wsgen wsimport xjc xulrunner-1.9-javaplugin.so; do sudo update-alternatives --remove-all $g; done
    sudo updatedb
sudo locate -b '\pack200'
    ```

1. update spring boot to GAE  
    [gradle template](https://github.com/kaiinui/template-spring-boot-gae/blob/master/build.gradle)  
    [steps](https://github.com/3wks/spring-boot-gae)  
    [gradle](https://cloud.google.com/appengine/docs/standard/java/tools/gradle)  

    ```sh
    classpath 'com.google.cloud.tools:appengine-gradle-plugin:1.+'    // Latest 1.x.x release
    compile 'com.threewks.spring:spring-boot-gae:2.2.1' (https://mvnrepository.com/artifact/com.threewks.spring/spring-boot-gae)

    gradle appengineRun

    gcloud auth application-default login
    gcloud projects list
    ```

1. gcloud command line  
   [reference](https://cloud.google.com/sdk/docs/quickstart-debian-ubuntu)  

   ```sh
   # Add the Cloud SDK distribution URI as a package source
    echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] http://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list

    # Import the Google Cloud Platform public key
    curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -

    # Update the package list and install the Cloud SDK
    sudo apt-get update && sudo apt-get install google-cloud-sdk
   ```

   ```sh
   gcloud init  (gcloud init --console-only)
   gcloud auth list
   gcloud config list
   gcloud info
   gcloud help
   ```

   [deploy spring boot to gae](https://codelabs.developers.google.com/codelabs/cloud-app-engine-springboot/index.html?index=..%2F..index#7)  

   ```sh
   gcloud app create --region australia-southeast1
   mvn appengine:deploy
   gcloud app browse
   ```

1. maven  

    ```sh
    sudo apt install maven
    mvn clean package
    mvn clean package appengine:run
    mvn clean package appengine:deploy
    mvn -pl api appengine:deploy
    mvn -pl api appengine:run
    gcloud beta emulators datastore start --host-port=localhost:8484
    java --SPRING_PROFILES_ACTIVE="dev" -jar ./target/api-0.0.6.jar
    ```
    
    [lifecycle reference](https://maven.apache.org/ref/3.6.2/maven-core/lifecycles.html)  
    ```xml
    <phases>
        <phase>validate</phase>
        <phase>initialize</phase>
        <phase>generate-sources</phase>
        <phase>process-sources</phase>
        <phase>generate-resources</phase>
        <phase>process-resources</phase>
        <phase>compile</phase>
        <phase>process-classes</phase>
        <phase>generate-test-sources</phase>
        <phase>process-test-sources</phase>
        <phase>generate-test-resources</phase>
        <phase>process-test-resources</phase>
        <phase>test-compile</phase>
        <phase>process-test-classes</phase>
        <phase>test</phase>
        <phase>prepare-package</phase>
        <phase>package</phase>
        <phase>pre-integration-test</phase>
        <phase>integration-test</phase>
        <phase>post-integration-test</phase>
        <phase>verify</phase>
        <phase>install</phase>
        <phase>deploy</phase>
    </phases>
    ```

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
    [document](https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/)  
    [security](https://www.baeldung.com/spring-security-login)  
    [rest api security](https://www.baeldung.com/securing-a-restful-web-service-with-spring-security)  
    [security](https://medium.com/@nydiarra/secure-a-spring-boot-rest-api-with-json-web-token-reference-to-angular-integration-e57a25806c50)  
    [security-angular](https://github.com/ipassynk/angular-springboot-jwt)  
    [tooken in cookie](https://stackoverflow.com/questions/44923418/store-token-from-oauth2-server-in-cookie-using-spring-oauth)  

    [set cookie](https://stackoverflow.com/questions/24642508/spring-inserting-cookies-in-a-rest-call-response)  

    ```java
    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public ResponseEntity<String> singleSignOn(@RequestBody String bodySso, HttpServletResponse response) {

        response.addCookie(new Cookie("heroku-nav-data", navData));
        return new ResponseEntity<String>(id,headers,HttpStatus.OK);
    }

    final Cookie cookie = new Cookie(this.cookieName, principal.getSignedJWT());
    cookie.setDomain(this.cookieDomain);
    cookie.setSecure(this.sendSecureCookie);
    cookie.setHttpOnly(true);
    cookie.setMaxAge(maxAge);
    response.addCookie(cookie);
    ```

    [delete cookie](https://attacomsian.com/blog/cookies-spring-boot)  

    ```java
    // create a cookie
    Cookie cookie = new Cookie("username", null);
    cookie.setMaxAge(0);
    cookie.setSecure(true);
    cookie.setHttpOnly(true);
    cookie.setPath("/");

    //add cookie to response
    response.addCookie(cookie);

    // A secure cookie is the one which is only sent to the server over an encrypted HTTPS connection.
    // Secure cookies cannot be transmitted to the server over unencrypted HTTP connections.
    Cookie cookie = new Cookie("username", "Jovan");
    cookie.setMaxAge(7 * 24 * 60 * 60); // expires in 7 days
    cookie.setSecure(true);

    //add cookie to response
    response.addCookie(cookie);
    ```

    [JWK with cookie](https://stackoverflow.com/questions/38341114/spring-security-cookie-jwt-authentication)  

    [global exception handler](https://www.toptal.com/java/spring-boot-rest-api-error-handling)  

    ```java
    @Order(Ordered.HIGHEST_PRECEDENCE)
    @ControllerAdvice
    public class RestExceptionHandler extends ResponseEntityExceptionHandler {
        @Override
        protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
            String error = "Malformed JSON request";
            return buildResponseEntity(new ApiError(HttpStatus.BAD_REQUEST, error, ex));
        }

        private ResponseEntity<Object> buildResponseEntity(ApiError apiError) {
            return new ResponseEntity<>(apiError, apiError.getStatus());
        }

        //other exception handlers below
    }
    ```

1. Google App Engine  
    [document](https://cloud.google.com/appengine/)  
    [GAE + spring boot](https://medium.com/google-cloud/getting-started-with-google-app-engine-and-spring-boot-in-5-steps-2d0f8165c89)  
    [price](https://cloud.google.com/appengine/pricing)  
    [java quick start](https://cloud.google.com/appengine/docs/standard/java/quickstart)  
    [GAE](https://github.com/GoogleCloudPlatform/getting-started-java/tree/master/appengine-standard-java8/springboot-appengine-standard)  
    [GAE+gradle](https://github.com/int128/appengine-spring-boot-starter)  
    [GAE examples](https://github.com/spring-cloud/spring-cloud-gcp/tree/master/spring-cloud-gcp-samples)  
    [GAE flex env](https://medium.com/@wkrzywiec/how-to-publish-a-spring-boot-app-with-a-database-on-the-google-cloud-platform-614b88613ce3)  
    [GAE gradle standard env](https://cloud.google.com/appengine/docs/standard/java/tools/gradle)  
    [Google chart API to create QR code](https://developers.google.com/chart/?csw=1)  
    [GAE](https://cloud.google.com/appengine/kb/)  
    [java8](https://cloud.google.com/appengine/docs/standard/java/runtime)  
    [GAE zxing](https://stackoverflow.com/questions/23189048/google-app-engine-generate-qr-code)  
    [GAE maven command](https://cloud.google.com/appengine/docs/standard/java/tools/using-maven)  
    [GAE Resource config](https://cloud.google.com/appengine/docs/standard/java/config/appref#threadsafe)  

    [gae standard aysnc not supported](https://cloud.google.com/appengine/docs/standard/java/release-notes)  

    ```limitation
    June 28, 2017
    What's New
    .....

    Known Java 8 Runtime Limitations

    The /tmp directory is writable. Files in /tmp will consume memory allocated to your instance.
    Async Servlet 3.1 is not supported.
    ```

    [google store index](https://cloud.google.com/appengine/docs/standard/go/datastore/indexes)  
    [google store quotes](https://cloud.google.com/appengine/quotas#Datastore)  
    [google store how entities stored](https://cloud.google.com/appengine/articles/storage_breakdown)  
    [how to: google application engine](https://cloud.google.com/appengine/docs/standard/java/how-to)  
    [data model in google store](https://www.shiftedup.com/2015/04/11/an-introduction-to-data-modeling-using-googles-datastore)  

    ```text
    Entity: instance, similiar with row
    Entity Kind: category of queries
    Properties: column
    Multi-valued properties:
    Keys:
    Relationships:
    Consistency: This causes what we know as stale results: information that's not up-to-date when retrieved from the Datastore. This is probably one of the biggest challenges when using Google's Datastore.
    Entity Groups: when designing the structure of your data, you can tell the Datastore what information is closely related and should be stored on the same place. This way, we make sure that when returned together (check ancestor queries), you'll never get stale data.
    Ancestors:

    ```

    [naive example about google data store](https://github.com/GoogleCloudPlatform/getting-started-java/tree/master/bookshelf/2-structured-data/src/main/java/com/example/getstarted/util)  
    [exmaple](https://cloud.google.com/java/getting-started-appengine-standard/tutorial-app)  
    [JPA in GAE](https://cloud.google.com/appengine/docs/standard/java/datastore/jpa/overview-dn2)  
    [objectity for google data store](https://github.com/objectify/objectify)  
    [spring-boot-objectify-sample](https://github.com/takemikami/spring-boot-objectify-sample)  

    [Objectify](https://github.com/objectify/objectify/wiki/Setup)  

    ```sh
    gcloud components install cloud-datastore-emulator

    gcloud beta emulators datastore start --host-port=localhost:8484
    ```

    ```url
    datastore link: https://console.cloud.google.com/datastore
    project link: https://console.cloud.google.com/logs/viewer
    ```

1. auth  
    [OAuth with filter](https://medium.com/omarelgabrys-blog/microservices-with-spring-boot-authentication-with-jwt-part-3-fafc9d7187e8)  
    [Logout handlers](https://github.com/pezetem/spring-security-angular-skeleton/blob/master/src/main/java/com/pezetem/blog/code/spring_security_custom_authorizers/security/SecurityConfiguration.java)  

    ```java
        import org.springframework.security.web.authentication.logout.LogoutHandler;
        import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
        @Bean
        List<LogoutHandler> logoutHandlers(CsrfTokenRepository tokenRepository){
            return List.of(
                    new CsrfLogoutHandler(tokenRepository),
                    new SecurityContextLogoutHandler()
            );
        }
    ```

    [0Auth2](https://github.com/spring-projects/spring-security.git)  

    ```java
	@Configuration
	@EnableAuthorizationServer
	public class AuthServerConfig extends AuthorizationServerConfigurerAdapter {
		
		@Autowired
		private BCryptPasswordEncoder passwordEncoder;
	
		@Override
		public void configure(
		AuthorizationServerSecurityConfigurer oauthServer) throws Exception {
			oauthServer.tokenKeyAccess("permitAll()")
			.checkTokenAccess("isAuthenticated()");
		}
	
		@Override
		public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
			clients.inMemory()
			.withClient("SampleClientId")
			.secret(passwordEncoder.encode("secret"))
			.authorizedGrantTypes("authorization_code")
			.scopes("user_info")
			.autoApprove(true) 
			.redirectUris("http://localhost:8082/ui/login","http://localhost:8083/ui2/login"); 
		}
	}
    ....

    [Example blog](https://www.callicoder.com/spring-boot-security-oauth2-social-login-part-3/)  
    [Example log](https://github.com/callicoder/spring-boot-react-oauth2-social-login-demo)  
    https://stackoverflow.com/questions/38085035/oauth2-client-in-spring-security  

    ```java  out of date
    @Configuration
    @EnableAuthorizationServer
    public class AuthorizationServerConfig extends AuthorizationServerConfigurerAdapter {

        static final String CLIEN_ID = "devglan-client";
        static final String CLIENT_SECRET = "devglan-secret";
        static final String GRANT_TYPE_PASSWORD = "password";
        static final String AUTHORIZATION_CODE = "authorization_code";
        static final String REFRESH_TOKEN = "refresh_token";
        static final String IMPLICIT = "implicit";
        static final String SCOPE_READ = "read";
        static final String SCOPE_WRITE = "write";
        static final String TRUST = "trust";
        static final int ACCESS_TOKEN_VALIDITY_SECONDS = 1*60*60;
        static final int FREFRESH_TOKEN_VALIDITY_SECONDS = 6*60*60;

        @Autowired
        private AuthenticationManager authenticationManager;

        @Bean
        public JwtAccessTokenConverter accessTokenConverter() {
            JwtAccessTokenConverter converter = new JwtAccessTokenConverter();
            converter.setSigningKey("as466gf");
            return converter;
        }

        @Bean
        public TokenStore tokenStore() {
            return new JwtTokenStore(accessTokenConverter());
        }

        @Override
        public void configure(ClientDetailsServiceConfigurer configurer) throws Exception {
            configurer
                    .inMemory()
                    .withClient(CLIEN_ID)
                    .secret(CLIENT_SECRET)
                    .authorizedGrantTypes(GRANT_TYPE_PASSWORD, AUTHORIZATION_CODE, REFRESH_TOKEN, IMPLICIT )
                    .scopes(SCOPE_READ, SCOPE_WRITE, TRUST)
                    .accessTokenValiditySeconds(ACCESS_TOKEN_VALIDITY_SECONDS)
                    .refreshTokenValiditySeconds(FREFRESH_TOKEN_VALIDITY_SECONDS);
        }

        @Override
        public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
            endpoints.tokenStore(tokenStore())
                    .authenticationManager(authenticationManager)
                    .accessTokenConverter(accessTokenConverter());
        }
    }

    @Configuration
    @EnableResourceServer
    public class ResourceServerConfig extends ResourceServerConfigurerAdapter {
        private static final String RESOURCE_ID = "resource_id";
        
        @Override
        public void configure(ResourceServerSecurityConfigurer resources) {
            resources.resourceId(RESOURCE_ID).stateless(false);
        }

        @Override
        public void configure(HttpSecurity http) throws Exception {
            http.
                    anonymous().disable()
                    .authorizeRequests()
                    .antMatchers("/users/**").access("hasRole('ADMIN')")
                    .and().exceptionHandling().accessDeniedHandler(new OAuth2AccessDeniedHandler());
        }

    }

    @Configuration
    @EnableWebSecurity
    @EnableGlobalMethodSecurity(prePostEnabled = true)
    public class SecurityConfig extends WebSecurityConfigurerAdapter {
        @Resource(name = "userService")
        private UserDetailsService userDetailsService;

        @Override
        @Bean
        public AuthenticationManager authenticationManagerBean() throws Exception {
            return super.authenticationManagerBean();
        }

        @Autowired
        public void globalUserDetails(AuthenticationManagerBuilder auth) throws Exception {
            auth.userDetailsService(userDetailsService)
                    .passwordEncoder(encoder());
        }

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http
                    .csrf().disable()
                    .anonymous().disable()
                    .authorizeRequests()
                    .antMatchers("/api-docs/**").permitAll();
        }

        @Bean
        public BCryptPasswordEncoder encoder(){
            return new BCryptPasswordEncoder();
        }
    }

    ```

    https://docs.spring.io/spring-security/site/docs/current/reference/htmlsingle/#oauth2client
    https://projects.spring.io/spring-security-oauth/docs/oauth2.html
    https://docs.spring.io/spring-security/site/docs/5.0.7.RELEASE/reference/html/oauth2login-advanced.html
    https://docs.spring.io/spring-security/site/docs/current/reference/html/jc.html
    https://www.callicoder.com/spring-boot-security-oauth2-social-login-part-2/
    [Example](https://github.com/callicoder/spring-boot-react-oauth2-social-login-demo)  

    [How spring works](https://medium.com/empathyco/how-spring-boot-autoconfiguration-works-6e09f911c5ce)  
    [spring boot](https://geowarin.com/understanding-spring-boot/)  
    [internal](https://www.zoltanraffai.com/blog/how-does-spring-work-internally/)  
    [spring boot 源码分析](https://yq.aliyun.com/articles/617430?spm=a2c4e.11153940.0.0.5cca67feAkr2b2)  
    [spring 面试题](https://segmentfault.com/a/1190000016686735)  
    [spring login with react](https://dzone.com/articles/integrating-spring-boot-and-react-with-spring-secu-1)  