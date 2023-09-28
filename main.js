let samsung = new Mobile("samsung flip 4");
let iphone = new Mobile("iphone 15 promax");
//samsung.chargeBattery()
//samsung.turnOff();
//samsung.checkStatus();
samsung.writeMessage("Xin chào iphone");
samsung.sendMessage(iphone);
iphone.writeMessage("Xin chào samsung");
iphone.sendMessage(samsung);
document.write(samsung.readInbox() + "<br>");
document.write(samsung.readOutbox())