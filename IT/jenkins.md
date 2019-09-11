# Jenkins Pipeline

1. run docker in jenkins  
    ```
    node {
        git '…'
        docker.image('mysql').withRun {c ->
            sh './test-with-local-db'
        }
    }
    ```
    [reference](https://go.cloudbees.com/docs/plugins/docker-workflow/)  
    https://jenkins.io/doc/book/pipeline/docker/#running-sidecar-containers
    
    ```jenkins
    stage('tests') {
        steps {
            echo "Running tests in a fully containerized environment..."
            dir ('tests_dir/scripts') {
                sh './run_tests.sh'
            }
        }
    }
    ```
    ```sh
    #run_tests.sh
    
    # JOB_NAME is the name of the project of this build. This is the name you gave your job. It is set up by Jenkins
    COMPOSE_ID=${JOB_NAME:-local}
    # Remove Previous Stack
    docker-compose -p $COMPOSE_ID rm -f
    # Starting new stack environment
    docker-compose -p $COMPOSE_ID up -d --build
    ```
    [wait-for-it](https://blog.teemo.co/things-i-learned-using-docker-compose-with-jenkins-8acd669af94a)  
    