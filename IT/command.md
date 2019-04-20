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


# Postgresql
- Copy Csv
```
psql -c "COPY tbname FROM '/tmp/the_file.csv' delimiter '|' csv;"
```
[Reference](https://stackoverflow.com/questions/28602647/postgresql-csv-import-from-command-line)

- Export & Import

import

```
psql -U username dbname < dbexport.pgsql
```

export
```
pg_dump -U username dbname > dbexport.pgsql
```

[Reference](https://www.a2hosting.com/kb/developer-corner/postgresql/import-and-export-a-postgresql-database#Method-1.3A-Use-the-psql-program)


- run command file

```
pgAdmin4.exe
```

```
 #psql "dbname='urDbName' user='yourUserName' password='yourPasswd' host='yourHost'" -f yourFileName.sql

 #psql "user=postgres password=1" -f light.sql

 @set PGPASSWORD=1
 psql -U postgres -f create_db.sql
```
[reference](https://stackoverflow.com/questions/9736085/run-a-postgresql-sql-file-using-command-line-arguments)
[reference](https://gist.github.com/Kartones/dd3ff5ec5ea238d4c546)

- Other

[psql](http://postgresguide.com/utilities/psql.html)
[psql docker](https://hub.docker.com/_/postgres)

```
psql.exe -U username -d dbname -f somefile.sql

psql.exe -U postgres

psql "user=postgres password=1"
```
[Reference] (https://stackoverflow.com/questions/12562928/psql-exe-password-authentication-failed-in-windows)

password: 1


# Docker
- postprogres

[docker file reference](https://docs.docker.com/engine/reference/builder/)
[Introduction](https://hackernoon.com/practical-introduction-to-docker-compose-d34e79c4c2b6)

[Compose file format](https://docs.docker.com/compose/compose-file/)
[compose overview](https://docs.docker.com/compose/overview/)
[docker postgresql](https://docs.gradle.org/current/dsl/index.html)
[docker run](https://docs.docker.com/engine/reference/commandline/run/)
[docker postgres](https://docs.docker.com/samples/library/postgres/)
[initial data](https://stackoverflow.com/questions/34751814/build-postgres-docker-container-with-initial-schema)
[postgres docker](https://hub.docker.com/_/postgres/)

```
docker exec -it test psql -U postgres

docker logs test

docker exec -it test /bin/bash
```
- comand lines
[docker compose](https://docs.docker.com/compose/reference/overview/)

[restart docker when expose port does not work](https://stackoverflow.com/questions/40668908/running-docker-for-windows-error-when-exposing-ports/49564445#49564445)

[Copy file from host to container](https://stackoverflow.com/questions/22907231/copying-files-from-host-to-docker-container)
```
docker cp src/. mycontainer:/target
docker cp mycontainer:/src/. target
```

- examples

[reference](https://github.com/DanWahlin/AspNetCorePostgreSQLDockerApp)


# localstack

[reference](https://github.com/localstack/localstack)

[command](https://gist.github.com/abdul/acdfd0130d1f99ce737a4afe02875e98)

[command](https://lobster1234.github.io/2017/04/05/working-with-localstack-command-line/)
```
aws --endpoint-url=http://localhost:4569 dynamodb list-tables
{
    "TableNames": [
        "test_table"
    ]
}

awslocal dynamodb list-tables
```

[dynamodb](https://docs.aws.amazon.com/cli/latest/reference/dynamodb/index.html)

```
awslocal dynamodb scan --table-name test_table
awslocal dynamodb describe-table --table-name test_table
```

```
awslocal dynamodb put-item --table-name testtable --item file:///test-data/dynamodb-application.json

awslocal dynamodb scan --table-name testtable
```

[clear table](https://gist.github.com/pushplay/d2cac7ca1a10a5a49f6947a02657a23a)
```
TABLE_NAME="test_table"; \
KEY="Key"; \
awslocal dynamodb scan --table-name $TABLE_NAME --attributes-to-get "$KEY" \
  --query "Items[].$KEY.S" --output text | \
  tr "\t" "\n" | \
  xargs -t -I keyvalue awslocal dynamodb delete-item --table-name $TABLE_NAME \
  --key "{\"$KEY\": {\"S\": \"keyvalue\"}}"
```


```
docker cp from_folder dockercontainer:/to_folder

awslocal dynamodb batch-write-item --request-items file:///test-data/batch-write-item.json
```
