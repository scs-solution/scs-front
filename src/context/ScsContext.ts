import { InfraDescription, InfraInstance } from "../dtos/infra-desc.dtos";
import {
  MonitorResDto,
  MonitorResInstanceMetric,
} from "../dtos/monitor-res.dtos";

export class ScsContext {
  private _infraName: string;
  private _desc: InfraDescription;

  private _metric: MonitorResDto;

  set infraName(name: string) {
    this._infraName = name;
  }

  get infraName(): string {
    return this._infraName;
  }

  set infraDesc(desc: InfraDescription) {
    this._desc = desc;
  }

  get infraDesc(): InfraDescription {
    return this._desc;
  }

  set metric(metric: MonitorResDto) {
    this._metric = metric;
  }

  get metric(): MonitorResDto {
    return this._metric;
  }

  drivenOutbound(name: string): any {
    const metric = this.getMetricFromInstanceName(name);
    const iptable: any = {};
    const outbound = (metric.pingpong as any).outbound;

    for (const metric of this._metric.instances) {
      if (metric.name === name) continue;
      iptable[metric.privateIp] = metric.name;
      iptable[metric.publicIp] = metric.name;
    }

    const result: any = {};

    for (const ip in outbound) {
      if (ip in iptable) {
        if (!(iptable[ip] in result)) {
          result[iptable[ip]] = outbound[ip];
        } else {
          result[iptable[ip]] += outbound[ip];
        }
      }
    }

    return result;
  }

  getMetricFromInstanceName(name: string): MonitorResInstanceMetric {
    for (const metric of this._metric.instances) {
      if (metric.name === name) return metric;
    }
    return null;
  }

  hasPending(): boolean {
    return this._desc.instances?.some((e) => e.status === "pending");
  }
}

var _singleton: ScsContext;

export function getScsContextInstance(): ScsContext {
  if (_singleton === undefined) {
    _singleton = new ScsContext();
    _singleton.infraName = "test_infra1";
  }

  return _singleton;
}
