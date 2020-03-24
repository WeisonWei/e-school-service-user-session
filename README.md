# e-school-service-user-session
e-school-service-user-session

## 1 init mongodb
P=docker ps|grep mongo|awk '{print $1}'
docker exec -it ${P} sh
#创建管理员用户
db.createUser({user:"root",pwd:"123123",roles:[{role:"root", db:"admin"}]})
#docker exec -it c04d3dd74993 mongo admin
mongo
use admin
db.auth("root","123123")
show dbs
use user-service
#db.createUser({user:"app1",pwd:"123123",roles:[{role:"root",db:"user-service"},{role:"dbOwner",db:"user-service"},{role:"readWrite", db:"user-service"}]})
db.createUser({user:"app",pwd:"123123",roles:[{role:"dbOwner", db:"user-service"}]})
db.createUser({user:"app",pwd:"123123",roles:[{role:"dbOwner", db:"us-db"}]})
db.createUser({user:"app1",pwd:"123123",roles:[{role:"readWrite", db:"us-db"}]})
#指定加密类型
#db.createUser({user:"us-app",pwd:"123456",roles:[{role:"dbOwner",db:"user-service"}],mechanisms : ["SCRAM-SHA-256"] })
db.auth("app","123123")

#重启 非必须
mongod --auth --dbpath /data/db
#验证
 --port 27017 -u "app" --authenticationDatabase "user-service" -p

# 查看用户
# show users 查看归属当前库用户
# db.system.users.find().pretty() 查看所有用户
# db.createUser({user:"app",pwd:"123123",roles:[{role:"dbOwner", db:"user-service"}]})
# db.updateUser({user:"us-app",pwd:"123456",roles:[{role:"readWrite", db:"user-service"}]})
# db.dropUser("app1")
# db.user-service.insert({"name":"Weison"})
# db.dropDatabase()