1. deadlock in aync await  
    [reference](https://docs.microsoft.com/en-us/archive/msdn-magazine/2015/july/async-programming-brownfield-async-development)  
    
1. create project in command:  
    ```sh
    dotnet new globaljson --sdk-version 5.0.100 --output IdentityTodo
    dotnet new webapp --auth Individual --use-local-db true --output IdentityTodo --framework net5.0
    dotnet new sln -o IdentityTodo
    dotnet sln IdentityTodo add IdentityTodo
    
    dotnet tool uninstall --global dotnet-ef
    dotnet tool install --global dotnet-ef --version 5.0.0
    
    dotnet user-secrets init
    dotnet user-secrets set "Facebook:AppId" "<app-id>"
    dotnet user-secrets set "Facebook:AppSecret" "<app-secret>"
    ```