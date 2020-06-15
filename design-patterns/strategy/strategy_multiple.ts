class SomeEvent {
  private readonly name: string;
  private readonly type: number;

  constructor(name: string, type: number) {
    if (name == null) throw new Error("Name cannot be null.");
    if (type == null) throw new Error("Type cannot be null.");

    this.name = name;
    this.type = type;
  }

  getName(): string {
    return this.name;
  }

  getType(): number {
    return this.type;
  }
}

interface NotificationRule {
  sendNotification(event: SomeEvent): void;
  supports(event: SomeEvent): boolean;
}

class SMSNotification implements NotificationRule {
  sendNotification(event: SomeEvent): void {
    console.log(`Sending SMS notification for ${JSON.stringify(event)}`);
  }
  supports(event: SomeEvent): boolean {
    if (event.getType() === 1) return true;
    return false;
  }
}

class EmailNotification implements NotificationRule {
  sendNotification(event: SomeEvent): void {
    console.log(`Sending email notification for ${JSON.stringify(event)}`);
  }

  supports(event: SomeEvent) {
    if (event.getType() <= 2) return true;
    return false;
  }
}

class SlackNotification implements NotificationRule {
  sendNotification(event: SomeEvent): void {
    console.log(`Sending slack notification for ${JSON.stringify(event)}`);
  }

  supports(event: SomeEvent) {
    return true;
  }
}

const notifications: NotificationRule[] = [
  new SMSNotification(),
  new SlackNotification(),
  new EmailNotification(),
];

function sendNotifications(event: SomeEvent): void {
  notifications.forEach((rule) => {
    if (rule.supports(event)) rule.sendNotification(event);
  });
}

const criticalFailureEvent = new SomeEvent("Critical failure event", 1);
const warningEvent = new SomeEvent("Warning event", 2);
const harmlessEvent = new SomeEvent("Harmless event", 3);

console.log("Critical Failure Event: ");
sendNotifications(criticalFailureEvent);

console.log("\nWarning Event: ");
sendNotifications(warningEvent);

console.log("\nHarmless Event: ");
sendNotifications(harmlessEvent);
