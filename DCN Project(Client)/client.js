const net = require("net");

// Configuration ===================================
const port = 8888;
const serverIp = "192.168.18.100"; // Replace with the actual IP address of the server
//=================================================

// ================= Client 1 ==========================
// Create the socket client.
const client1 = new net.Socket();

// Connect to the server on the configured port and IP address
client1.connect(port, serverIp, function () {
  // Log when the connection is established
  console.log(`Client 1: Connected to server at ${serverIp}:${port}`);

  // Try to send data to the server
  client1.write("Hi from Client 1");
});

// Handle data coming from the server
client1.on("data", function (data) {
  console.log(`Client 1 received from server: ${data}`);
});

// Handle connection close
client1.on("close", function () {
  console.log("Client 1: Connection Closed");
});

// Handle error
client1.on("error", function (error) {
  console.error(`Client 1: Connection Error ${error}`);
});

// ================= Client 2 ==========================
// Create the socket client.
const client2 = new net.Socket();

// Connect to the server on the configured port and IP address
client2.connect(port, serverIp, function () {
  // Log when the connection is established
  console.log(`Client 2: Connected to server at ${serverIp}:${port}`);

  // Try to send data to the server
  client2.write("Hi from Client 2");
});

// Handle data coming from the server
client2.on("data", function (data) {
  console.log(`Client 2 received from server: ${data}`);
});

// Handle connection close
client2.on("close", function () {
  console.log("Client 2: Connection Closed");
});

// Handle error
client2.on("error", function (error) {
  console.error(`Client 2: Connection Error ${error}`);
});
