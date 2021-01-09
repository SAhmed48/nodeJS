MongoDB is a NoSql database. It does not have a schema and design mechanism like sql based databases (sqlserver, Mysql).
It has a flexible schema.

It has 2 terms:
---

| NoSql         | SQl          
| ------------- |:------------- |
| Collections   | tables        |
| Documents     | Rows          |


#### Install MongoDB on MAC Os

Go to brew.sh (package manager for mac os)

-- brew install mongodb // install latest version present on homebrew

Mongodb store data locally so we need to create a directory to store databses.

-- sudo mkdir /data/db

Run below command on command line. It is basically a mongo daemon. It runs mongodb on port 27017
-- mongod

Now go to the mongodb website and download compass as a mongodb client. 

We can use Schema to create shape of documents. 
Schema is specific to the mongoose plugin, it is nothing to do with the mongodb.

### Schema Types
1) String
2) Number
3) Date
4) Buffer // store binary data
5) Boolean
6) ObjectID // store unique ids
7) Array // list of things.

#### Comparison Operators in mongo-db:

1) eq // equal
2) ne // not equal
3) gt // greater then
4) gte // greater then equal
5) lt // less then
6) lte // less then equal
7) in
8) nin // not in

#### Logical Operators in mongo-db:

1) And
2) or

#### Query based on regular expressions:

1) Starts with:
ModelName.find({ username: /^dev/i }); // i means case insentive

2) Ends with:
ModelName.find({ username: /dev$/i }); // i means case insentive

3) Contains
ModelName.find({ username: /.*dev.*/i }); // i means case insentive

###### Get counts of Documents:

ModelName.find().count()

###### Pagination using mongo-db:

// api/users?pageNumber=2&pageSize=10

Query:
ModelName
.find()
.skip((pageNumber - 1) * pageSize) // skip docs based on pagination formulae
.limit(pageSize); // pass limit of page


#### Update documents in Mongodb:

We have three approaches to update the doc in mongodb:

1) Using find and save methods.
Example: 
```
const user = await User.find({_id: userid });
user.firstname = 'New name';
const result = user.save();

2) Using update method:
const result = await User.update({_id: userid }, {
    $set: {
        firstname: 'New name 1'
    }
});

The output of this method is : 
{ n: 1, _nModified: 1, ok: 1 }

Sometimes we need the updated document as a response. For that we used a approach below:

3) Using findByIdAndUpdate

const user = await User.findByIdAndUpdate(userid, {
    $set: { firstname: 'New name 1' }
}, { new : true });

Output contains a updated user object.
```

#### Removing Documents

1) Using delete One:
Modelname.deleteOne({ _id: id }) // delete only one document based on id

2) Delete Many:
Modelname.deleteMany({ isverified: true }) // delete many documents based on condition

3) using findByIdAndRemove 
Modelname.findByIdAndRemove(userid) // delete document and returns null
