var SMTPServer = require("smtp-server").SMTPServer;

function onData(stream, session, callback) {
    console.log("Incoming Mail");
    stream.pipe(process.stdout);
    stream.on("end", callback);
}

var options = {
    "onData": onData,
    "disabledCommands": ["AUTH"] // disable authentication, otherwise incoming mails are rejected
};

var port = process.argv[2] || 25;

var server = new SMTPServer(options);
console.log("Listening on port " + port);
server.listen(port);

