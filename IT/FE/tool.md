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
    [Webpack React Hot Loading not working for files in sub folders](https://stackoverflow.com/questions/35367533/webpack-react-hot-loading-not-working-for-files-in-sub-folders)  

    ```sh
    # works for Ubuntu
    # The limit can be increased to its maximum by editing /etc/sysctl.conf and adding this line to the end of the file:
    fs.inotify.max_user_watches=524288

    # then
    sudo sysctl -p
    ```

