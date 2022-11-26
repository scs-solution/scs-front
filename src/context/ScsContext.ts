import { InfraDescription } from "../dtos/infra-desc.dtos";

export class ScsContext {
  private _infraName: string;
  private _desc: InfraDescription;

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
