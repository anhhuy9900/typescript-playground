/**
 * Decorator just init once when typescript compiler run
 * Decorator not call when we call the Class
 */
function InvokeDecorator(constructor: Function) {
    console.log('Function Invoke: ', constructor);

}

@InvokeDecorator
class AirPlane {
    ticket: string;
    ticketType: string

    constructor(ticket: string, ticketType: string) {
        console.log('====== AirPlane Initial ===== ');
        this.ticket =  ticket;
        this.ticketType =  ticketType;
    }

    getInfo() {
        console.log('The airplane show information for people has ticket is: ', this.ticket, ', with ticket type: ', this.ticketType);
    }
}

const airplane = new AirPlane('VN AIRLINE', 'VIP');
airplane.getInfo();

const airplane2 = new AirPlane('VietJet Air', 'Medium');
airplane2.getInfo();

/**
 * when you run this file it will show information in terminal like that:
 Function Invoke:  [class AirPlane]
====== AirPlane Initial ===== 
The airplane show information for people has ticket is:  VN AIRLINE , with ticket type:  VIP
====== AirPlane Initial ===== 
The airplane show information for people has ticket is:  VietJet Air , with ticket type:  Medium
 
- That's mean Decorator first call when we typescript compile the file
- As you see when we call the AirPlane class for 2 times, the Decorator Function is not invoke
 */
