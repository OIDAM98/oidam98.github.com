---
title: Classroom Reservation System
description: Small classroom reservation system, simulating one used inside a college.
date: "2020-01-07T16:03:55-05:00"
jobDate: 2018
work: [desktop, databases, ]
techs: [Scala, Scala Swing, ScalaTest, ScalaCheck, Doobie, PostgreSQL]
thumbnail: classroom/thumb.png
projectUrl: https://github.com/OIDAM98/DB_Reservaciones
---

A classroom reservation that allows users to show the classrooms that are reserved, their schedule and by whom it was reserved. It also shows the active periods of the current semester and the subjects that are active for the semester.

Scala was used to implement the system, along with its Swing library to develop a desktop interface. The application conects to a local database in PostgreSQL, using Doobie for handling the connection. The database schema qas given to the student by the teacher of the subject. The system allows to perform CRUD operations on classrooms, reservations and academic periods.

A unit test suite was developed using ScalaTest, based on a *Behavior Driven Development (BDD)* approach. Also, a property test suite was implemented using ScalaCheck.

It was developed as the final project for Databases course (LIS3031).