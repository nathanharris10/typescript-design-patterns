class LegacyData {
  id: number;
  action: string;
  enabled: number;

  constructor(id: number, action: string, enabled: number) {
    this.id = id;
    this.action = action;
    this.enabled = enabled;
  }
}

class LegacySystem {
  processData(data: LegacyData): LegacyData {
    console.log(`Legacy system: Processing ${JSON.stringify(data)}`);
    if (data.action === "Create") {
      return new LegacyData(12345, "New", 1);
    } else {
      return new LegacyData(data.id, "Updated", data.enabled);
    }
  }
}

interface DataCommand {
  getAccount(): string;
  getAction(): string;
  isEnabled(): boolean;
}

class CreateDataCommand implements DataCommand {
  account: string;
  enabled: boolean;

  constructor(account: string, enabled: boolean) {
    this.account = account;
    this.enabled = enabled;
  }

  getAccount(): string {
    return this.account;
  }
  getAction(): string {
    return "Create";
  }
  isEnabled(): boolean {
    return this.enabled;
  }
}

class LegacyAdapter {
  private legacySystem: LegacySystem;

  constructor(legacySystem: LegacySystem) {
    this.legacySystem = legacySystem;
  }

  processData(dataCommand: DataCommand): DataCommand {
    const input = this.convertCommandToLegacyData(dataCommand);
    const output = this.legacySystem.processData(input);
    return this.convertLegacyToCommandData(output);
  }

  private convertCommandToLegacyData(dataCommand: DataCommand): LegacyData {
    return new LegacyData(
      parseInt(dataCommand.getAccount()),
      dataCommand.getAction(),
      dataCommand.isEnabled() ? 1 : 0
    );
  }

  private convertLegacyToCommandData(legacyData: LegacyData): DataCommand {
    return new CreateDataCommand(
      legacyData.id.toString(),
      legacyData.enabled === 1 ? true : false
    );
  }
}

const legacySystem = new LegacySystem();
const legacyAdapter = new LegacyAdapter(legacySystem);
const myCommand = new CreateDataCommand("0", false);

console.log(`Creating new account for ${JSON.stringify(myCommand)}`);

const response = legacyAdapter.processData(myCommand);

console.log(`${JSON.stringify(response)}`);
