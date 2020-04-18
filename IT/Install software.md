# Installed software and some commands

## Install Youtube-dl

[Reference](https://www.howtoforge.com/tutorial/install-and-use-youtube-dl-on-ubuntu-1604/)

```sh
sudo apt-get update -y
sudo apt-get upgrade -y

sudo apt-get install curl -y
curl -L https://yt-dl.org/latest/youtube-dl -o /usr/bin/youtube-dl
sudo chmod 755 /usr/bin/youtube-dl
 
sudo add-apt-repository ppa:nilarimogard/webupd8
sudo apt-get update -y
sudo apt-get install youtube-dlg -y

sudo apt-get clean && sudo apt-get update && sudo apt-get install --fix-missing

# youtube-dl https://www.youtube.com/watch?v=3ei8XjNhJwQ&list=PL0aO77tKg1k74ZYcRWyMigL-xASWkbQas

```

## Check port usage

[Check port usage](https://www.cyberciti.biz/faq/unix-linux-check-if-port-is-in-use-command/)

``` commands
sudo lsof -i -P -n | grep LISTEN 
sudo netstat -tulpn | grep LISTEN
sudo nmap -sTU -O IP-address-Here
```

## Install Insomnia

[reference](https://support.insomnia.rest/article/23-installation#ubuntu)

``` steps
# Add to sources
echo "deb https://dl.bintray.com/getinsomnia/Insomnia /" \
    | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Add public key used to verify code signature
wget --quiet -O - https://insomnia.rest/keys/debian-public.key.asc \
    | sudo apt-key add -

# Refresh repository sources and install Insomnia
sudo apt-get update
sudo apt-get install insomnia
```

## Install Docker

- offical docker way

``` more popular
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"

sudo apt-get update
sudo apt-get install docker-ce

sudo docker run hello-world
```


- offical ubuntu way

``` 
sudo apt-get install docker.io
```

# zsh in ubuntu

```sh
apt-get install zsh
sudo apt-get install powerline fonts-powerline

git clone https://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh

cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

nano .zshrc

chsh -s `which zsh`

sudo shutdown -r now
```

[reference](https://dev.to/mskian/install-z-shell-oh-my-zsh-on-ubuntu-1804-lts-4cm4)


# install node  
[node js](https://medium.com/@tgmarinho/how-to-install-node-js-via-binary-archive-on-linux-ab9bbe1dd0c2)  

```bash
sudo mkdir /usr/local/lib/node
sudo tar -xJvf node-v8.9.4-linux-x64.tar.xz
sudo mv /usr/local/lib/node/node-v8.9.4-linux-x64 /usr/local/lib/node/nodejs

#Set the environment variable ~/.profile, add below to the end
# Nodejs
export NODEJS_HOME=/usr/local/lib/node/nodejs
export PATH=$NODEJS_HOME/bin:$PATH
# Refresh profile
. ~/.profile

#In order to install npm packages globally with sudo permission, /usr/bin/npm should be available. If npm exists on some other directory, create a soft link like:
sudo ln -s /usr/local/bin/npm /usr/bin/npm
```