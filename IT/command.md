# git
- enable git to display no-anscii

```
git config --global core.quotepath false
```
[reference](https://stackoverflow.com/questions/4144417/how-to-handle-asian-characters-in-file-names-in-git-on-os-x)

- use multiple github account in one machine

1. create different public key

```
$ ssh-keygen -t rsa -C "your_email@youremail.com"
```

2. for example, one key is created in `~/.ssh/id_rsa_activehacker`

use following command to add the ssh key

if windows, run
```
eval `ssh-agent -s`
```
[reference](https://stackoverflow.com/questions/17846529/could-not-open-a-connection-to-your-authentication-agent)

```
$ ssh-add ~/.ssh/id_rsa_activehacker

$ ssh-add -D
$ ssh-add -l
```

3. Modify the ssh config

```
$ cd ~/.ssh/
$ touch config
$ subl -a config
```

then add

```
#activehacker account
Host github.com-activehacker
	HostName github.com
	User git
	IdentityFile ~/.ssh/id_rsa_activehacker
```
[reference](https://gist.github.com/jexchan/2351996)

4. add public key to github account

5. Test your connection

```
$ ssh -T git@github.com-activehacker
```

you may see this kind of warning, type yes:

```
The authenticity of host 'github.com (192.30.252.1)' can't be established.
RSA key fingerprint is xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:
Are you sure you want to continue connecting (yes/no)?
```

If everything is OK, you will see these messages:

```
Hi oanhnn! You've successfully authenticated, but GitHub does not provide shell access.
```
```
Hi superman! You've successfully authenticated, but GitHub does not provide shell access.
```

6. Now all are set, just clone your repositories

```
$ git clone git@github.com-activehacker:org2/project2.git /path/to/project2
```

[reference](https://gist.github.com/oanhnn/80a89405ab9023894df7)
