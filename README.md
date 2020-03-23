# e-school-service-user-session
e-school-service-user-session

## 1 init mongodb
docker exec -it f68db3938d99 sh
#docker exec -it c04d3dd74993 mongo admin
mongo
use admin
db.auth("root","123123")
show dbs
use userService
#db.createUser({user:"app1",pwd:"123123",roles:[{role:"root",db:"userService"},{role:"dbOwner",db:"userService"},{role:"readWrite", db:"userService"}]})
db.createUser({user:"app",pwd:"123123",roles:[{role:"readWrite", db:"userService"}]})
#指定加密类型
#db.createUser({user:"us-app",pwd:"123456",roles:[{role:"dbOwner",db:"userService"}],mechanisms : ["SCRAM-SHA-256"] })

#重启 非必须
mongod --auth --dbpath /data/db
#验证
mongo --port 27017 -u "app" --authenticationDatabase "userService" -p

# 查看用户
# show users 查看归属当前库用户
# db.system.users.find().pretty() 查看所有用户
# db.createUser({user:"app",pwd:"123123",roles:[{role:"dbOwner", db:"user-service"}]})
# db.updateUser({user:"us-app",pwd:"123456",roles:[{role:"readWrite", db:"userService"}]})
# db.dropUser("app1")
# db.userService.insert({"name":"Weison"})
# db.dropDatabase()