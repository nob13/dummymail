DummyMail
=========

A trivial Mail server based on [smtp-server](https://github.com/andris9/smtp-server) which just logs out incoming mail.

You can use it, if some validation service requires you to enter a code which is sent by Email to your domain and you
usually do not want to have a mail server running there.

Startup using Docker

    docker run --name dummymail -p 25:25 --rm=true nob13/dummymail
    