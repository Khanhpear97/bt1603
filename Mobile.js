class Mobile {
    status;
    battery;
    message;
    inbox;
    outbox;
    name;
    constructor(name) {
        this.name = name;
        this.status = true;
        this.battery = 90;
        this.inbox = [];
        this.outbox = [];
    }
    checkStatus () {
        if (this.status) {
            document.write("Điện thoại đang bật");
        } else {
            document.write("Điện thoại đang ");
        }
    }
    turnOn () {
        this.status = true;
    }
    turnOff () {
        this.status = false;
    }
    chargeBattery () {
        let x = setInterval(() => {
            if (this.battery >= 100) {
                document.write("Battery is full");
                clearInterval(x);
                return;
            }
            ++this.battery;
            document.write("Battery charge " + this.battery + "<br/>")
        },1000)
    }
    writeMessage (text) {
        this.message = text;
        this.decreaseBattery();
    }
    sendMessage (phone) {
        phone.inbox.push(this.message);
        this.outbox.push(this.message);
        this.decreaseBattery();
    }
    readInbox () {
        return this.inbox;
        this.decreaseBattery();
    }
    readOutbox () {
        return this.outbox;
        this.decreaseBattery();
    }
    decreaseBattery () {
        this.battery--;
    }
}