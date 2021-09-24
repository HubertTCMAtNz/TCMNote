- github:  
    https://github.com/traefik/traefik/releases  
- Get Started  
    https://doc.traefik.io/traefik/  
    1. How does auto service discovery work  
    1. Configuration  
        ```yml
        version: '3'
        services:
        reverse-proxy:
            # The official v2 Traefik docker image
            image: traefik:v2.5
            # Enables the web UI and tells Traefik to listen to docker
            command: --api.insecure=true --providers.docker
            ports:
            # The HTTP port
            - "80:80"
            # The Web UI (enabled by --api.insecure=true)
            - "8080:8080"
            volumes:
            # So that Traefik can listen to the Docker events
            # Can I find /var/run/docker.sock in my local?
            - /var/run/docker.sock:/var/run/docker.sock
        ```
        1. Not return 404 
            ```yml
            # traefik.yml

            entrypoints:
            web:
                address: :80

            providers:
            file:
                filename: dynamic.yaml
            ``` 
            ```yml
            # dynamic.yaml
            http:
                routers:
                    catchall:
                    # attached only to web entryPoint
                    entryPoints:
                        - "web"
                    # catchall rule
                    rule: "PathPrefix(`/`)"
                    service: unavailable
                    # lowest possible priority
                    # evaluated when no other router is matched
                    priority: 1

                services:
                    # Service that will always answer a 503 Service Unavailable response
                    unavailable:
                    loadBalancer:
                        servers: {} 
            ```