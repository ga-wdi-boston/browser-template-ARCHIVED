# Installing MongoDB

Relational databases like PostgreSQL are good at modeling data that fits nicely into tables.  What do you do if your data doesn't fit that mold?

## Objectives

By the end of the lesson, students will be able to do the following:

* Describe and explain the tradeoffs involved in using a NoSQL database like MongoDB instead of a relational database like PostgreSQL 
* Create a MongoDB database
* Create a MongoDB collection using the Mongo shell
* Create, Read, Update, and Destroy documents in a MongoDB collection using the Mongo shell
* Create, Read, Update, and Destroy documents in a MongoDB collection using Javascript and Node

## Before we begin: installation

If you don't have MongoDB installed on your computer, you can follow the instructions in INSTALL.md to install it.

## Vocabulary

MongoDB uses its own particular vocabulary:

|**Relational Database Term**|**MongoDB Term**|
|:-------|:------|
| database | database |
| table | collection | 
| row | document | 
| column | field | 

## Creating a MongoDB database and a collection

We're going to start with practical matters and then move to theoretical ones.  
Start the mongo shell by typing 'mongo' and see:

```
Tiresias:wdi_8_mongo_intro cwilbur$ mongo
MongoDB shell version: 3.0.3
connecting to: test
> 
```

The command to switch a new database is `use` -- and if you don't yet have a database named that, it will still let you switch to that database.  When you add data, it will create it.

(Our example today will be building a contacts database, using the database `contacts`.)

The command to list databases is `show databases`

For example:

```
> show databases
local  0.078GB
> use contacts
switched to db contacts
> show databases
local  0.078GB
> 
```

Note that I have switched to the `contacts` database, but because I haven't put any data into it yet, it doesn't show up in the database list.

Our collection will also be called `contacts`. It has no entries in it yet, which you can see by saying `db.contacts.count()`

```
> db.contacts.count()
0
```

This is a common pattern in Mongo: you can refer to anything you like, and Mongo will cooperate, but things are not actually created until you give Mongo something to remember.

## Creating data

We're going to start keeping a contacts database for our job search.  (All these people are fictional.)

Our first contact is Joe Recruiter, with Staffing Inc.  So we create his record this way:

```
db.contacts.insert({
    name: 'Joe Recruiter',
    company: 'Staffing Inc.',
    phone: {
        office: '617-555-1991 ext. 311',
        cell: '508-555-9215'
    },
    email: 'joe.recruiter@staffinginc.com'
});
```

MongoDB uses JSON natively, which makes it convenient for Javascript web applications.

Also, the `contacts` database exists now that we have inserted data into it:

```
>  show databases;
contacts  0.078GB
local     0.078GB
> 
```

Let's add these people to the contacts database:

Ann Placement-Manager, Staffing Inc.
    office phone 617-555-1991 ext. 315,
    cell phone 718-555-9151,
    email ann.placementmanager@staffinginc.com

Martine H. R. Manager, TechCorp LLC
    title Director of Human Resources
    office phone 617-555-7123,
    cell phone 617-555-9918,
    home phone 617-555-1122,
    work email martine.h.r.manager@techcorpllc.com
    home email martinemanager@gmail.com

Consider the JSON representation first: think before you type!

<!--

db.contacts.insert({
    name: 'Ann Placement-Manager',
    company: 'Staffing Inc.',
    phone: {
        office: '617-555-1991 ext. 315',
        cell: '718-555-9151'
    },
    email: 'ann.placementmanager@staffinginc.com'
});

db.contacts.insert({
    name: 'Martine H. R. Manager',
    title: 'Director of Human Resources',
    company: 'TechCorp LLC',
    phone: {
        office: '617-555-7123',
        cell: '617-555-9918',
        home: '617-555-1122'
    },
    email: {
        work: 'martine.h.r.manager@techcorpllc.com',
        home: 'martinemanager@gmail.com'
    }
});

-->

## Retrieving and Reading Data

Let's start by looking at the entire database so far.

```
> db.contacts.find();
{ "_id" : ObjectId("5579a06aaa2cdce4a1f15f21"), "name" : "Joe Recruiter", "company" : "Staffing Inc.", "phone" : { "office" : "617-555-1991 ext. 311", "cell" : "508-555-9215" }, "email" : "joe.recruiter@staffinginc.com" }
{ "_id" : ObjectId("5579a202aa2cdce4a1f15f22"), "name" : "Ann Placement-Manager", "company" : "Staffing Inc.", "phone" : { "office" : "617-555-1991 ext. 315", "cell" : "718-555-9151" }, "email" : "ann.placementmanager@staffinginc.com" }
{ "_id" : ObjectId("5579a20aaa2cdce4a1f15f23"), "name" : "Martine H. R. Manager", "title" : "Director of Human Resources", "company" : "TechCorp LLC", "phone" : { "office" : "617-555-7123", "cell" : "617-555-9918", "home" : "617-555-1122" }, "email" : { "work" : "martine.h.r.manager@techcorpllc.com", "home" : "martinemanager@gmail.com" } }
> 
```

That's kind of tough to read, so we can filter it through `.pretty()`

```
> db.contacts.find().pretty();
{
    "_id" : ObjectId("5579a06aaa2cdce4a1f15f21"),
    "name" : "Joe Recruiter",
    "company" : "Staffing Inc.",
    "phone" : {
        "office" : "617-555-1991 ext. 311",
        "cell" : "508-555-9215"
    },
    "email" : "joe.recruiter@staffinginc.com"
}
{
    "_id" : ObjectId("5579a202aa2cdce4a1f15f22"),
    "name" : "Ann Placement-Manager",
    "company" : "Staffing Inc.",
    "phone" : {
        "office" : "617-555-1991 ext. 315",
        "cell" : "718-555-9151"
    },
    "email" : "ann.placementmanager@staffinginc.com"
}
{
    "_id" : ObjectId("5579a20aaa2cdce4a1f15f23"),
    "name" : "Martine H. R. Manager",
    "title" : "Director of Human Resources",
    "company" : "TechCorp LLC",
    "phone" : {
        "office" : "617-555-7123",
        "cell" : "617-555-9918",
        "home" : "617-555-1122"
    },
    "email" : {
        "work" : "martine.h.r.manager@techcorpllc.com",
        "home" : "martinemanager@gmail.com"
    }
}
```

What do we see in this?

* MongoDB gave each of our documents a unique ID field, called ID.

* MongoDB doesn't care that Joe and Ann only have one email, while Martine has two emails.  It also doesn't care that Martine has a job title, while Joe and Ann do not.  

### Searching for particular things

We can pass arguments to `find`, and MongoDB will give us all matching records:

```
> db.contacts.find({ _id: ObjectId("5579a20aaa2cdce4a1f15f23") }).pretty();
{
    "_id" : ObjectId("5579a20aaa2cdce4a1f15f23"),
    "name" : "Martine H. R. Manager",
    "title" : "Director of Human Resources",
    "company" : "TechCorp LLC",
    "phone" : {
        "office" : "617-555-7123",
        "cell" : "617-555-9918",
        "home" : "617-555-1122"
    },
    "email" : {
        "work" : "martine.h.r.manager@techcorpllc.com",
        "home" : "martinemanager@gmail.com"
    }
}
> db.contacts.find({ company: "Staffing Inc." }).pretty();
{
    "_id" : ObjectId("5579a06aaa2cdce4a1f15f21"),
    "name" : "Joe Recruiter",
    "company" : "Staffing Inc.",
    "phone" : {
        "office" : "617-555-1991 ext. 311",
        "cell" : "508-555-9215"
    },
    "email" : "joe.recruiter@staffinginc.com"
}
{
    "_id" : ObjectId("5579a202aa2cdce4a1f15f22"),
    "name" : "Ann Placement-Manager",
    "company" : "Staffing Inc.",
    "phone" : {
        "office" : "617-555-1991 ext. 315",
        "cell" : "718-555-9151"
    },
    "email" : "ann.placementmanager@staffinginc.com"
}
> 
```

There is an incredibly useful table that translates from SQL to MongoDB syntax at [http://docs.mongodb.org/manual/reference/sql-comparison/](http://docs.mongodb.org/manual/reference/sql-comparison/).






