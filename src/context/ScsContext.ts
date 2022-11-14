export class ScsContext {
  private _infraName: string;

  set infraName(name: string) {
    this._infraName = name;
  }

  get infraName(): string {
    return this._infraName;
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
