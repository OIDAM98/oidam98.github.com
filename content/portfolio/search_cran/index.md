---
title: Search Engine for Cranfield Collection
description: Search Engine using an Inverted Index for the Cranfield Test Collection.
date: "2020-07-05T16:22:59-05:00"
jobDate: 2019
work: [terminal, information retrieval]
techs: [Scala, Scala Parser Combinators]
thumbnail: search_cran/thumb.jpg
projectUrl: https://github.com/OIDAM98/invertedIndex
---
A search engine that was based upon the Inverted Index technique along with the Boolean Retrieval Model for querying the Cranfield Test Collection.

The Scala programming language was used for the implementation of the mentioned techniques. Also, the Scala Parser Combinators library was used for creating a parser and a language that allowed to successfully read both the test collection and the user's query.

For the parser's query, the AND, OR and NOT boolean operations were implemented, along with their precedence, and the usage of parenthesis to group together operations.

It was developed as a team project for Information Recovery course (LIS4031).