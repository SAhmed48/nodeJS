In this section we learn:

1) How to use SQL databases (MySql, SqlServer, PostreSql) in a node?
2) How to store data in sql databases?
3) How to make connection with sql databases using node? 
4) What is Sequelize?
5) How to do sql query?

#### SQL vs NoSql

| NoSql              | Sql          
| ------------------ |----------------------- |
| Schema-less        | Data use Schemas.       |
| No (few) relations | Relations.              |
| Data merged in nested collections | Data distributed across multiple tables. | 
| Great performance for mass read and write operations. | Limitations for lots of read and write query requests per second.
| Horizontal and vertical scaling possible. | Horizontal scaling is difficult.(Shared db across multiple servers) Vertical scaling possible.


#### Connect to Mysql
```
npm install i mysql2
```



