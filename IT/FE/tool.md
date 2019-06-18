# FE Tool

1. install yarn  
    [reference](https://linuxize.com/post/how-to-install-yarn-on-ubuntu-18-04/)  

    ```sh
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

    sudo apt update
    sudo apt install yarn
    ```

1. webpack HMR
    [reference](https://medium.com/@rajaraodv/webpack-hot-module-replacement-hmr-e756a726a07)  
