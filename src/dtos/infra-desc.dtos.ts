export class InfraInstance {
  name: string;

  instanceId?: string;

  instanceType: "normal" | "spot" | "mysql" | "redis";
  instanceSpec: string; // ex) t2.micro, c4.x5large

  status: "pending" | "start" | "interruption" | "terminated";

  privateIp?: string;
  publicIp?: string;

  initialDesc: string;
}

export class InfraDescription {
  name: string;
  endpoint?: string;
  instances?: InfraInstance[];
}
