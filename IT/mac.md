# Mac

1. keep Mac Clean

   ```sh
   # Keeping macOS clean: this is my osx/brew/[…] update CLI command
   # Go to the profile of Quentin ADAM
   # Quentin ADAM
   # Mar 24, 2017
   # I’m using OSX most of the time (you know, developer AND sales, plus being CEO) and this is the script I use to update it all the time, can be useful for some…

   #!/bin/bash
   brew update
   brew upgrade
   brew cleanup -s
   brew cask cleanup
   #now diagnotic
   brew doctor
   brew missing
   apm upgrade -c false
   /opt/bin/updateCCTF.sh && terminal-notifier -message “git pull done :-)” -title “CCTF up to date”
   echo “you can hit mas upgrade to upgrade theses apps from the app store:”
   mas outdated
   echo “install with: mas upgrade”
   npm update -g
   echo “did you think to launch gem update “
   echo “and pip ? pip freeze — local | grep -v ‘^\-e’ | cut -d = -f 1 | xargs pip install -U “
   ```

   [reference](https://medium.com/@waxzce/keeping-macos-clean-this-is-my-osx-brew-update-cli-command-6c8f12dc1731)

1. pip upgrade all packages

   ```sh
   pip list --outdated --format=freeze | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U
   ```

   [reference](https://stackoverflow.com/questions/2720014/upgrading-all-packages-with-pip)  
   [pip-autoremove](https://pypi.org/project/pip-autoremove/)

   ```
   pip check
   pip install
   pip uninstall
   ```

1. Homebrew

   ```sh
   brew update
   brew outdated
   brew upgrade

   brew unpin <formula>
   brew pin <formula>
   brew unpin <formula>

   brew cleanup <formula>
   brew cleanup -n
   brew cleanup

   # Where does stuff get downloaded
   brew --cache
   ```

   [reference](https://docs.brew.sh/FAQ)


1. kill process by port  
    ```
    lsof -i tcp:3000
    sudo killall node
    sudo kill -9 `ps aux | grep node | grep -v grep | awk '{print $2}'`
    ```
    [reference](https://stackoverflow.com/questions/19968069/try-to-kill-all-nodes-but-failed-on-osx)  