interface IButterCaller {
  onSuccess(lambda: (msg: any) => void): ButterCaller;

  onError(lambda: (msg: any) => void): ButterCaller;

  onFinished(lambda: (msg: any) => void): ButterCaller;

  call(): ButterCaller;
}

export class ButterCaller implements IButterCaller {
  private _promise: Promise<any> | null = null;
  private readonly promiseGenerator: () => Promise<any>;
  private _onSuccess?: (msg: any) => void;
  private _onError?: (msg: any) => void;
  private _onFinished?: (msg: any) => void;

  constructor(promiseGenerator: () => Promise<any>) {
    this.promiseGenerator = promiseGenerator;
  }

  private get promise() {
    if (!this._promise) {
      this._promise = this.promiseGenerator();
    }
    return this._promise;
  }

  onSuccess(lambda: (msg: any) => void): ButterCaller {
    this._onSuccess = lambda;
    return this;
  }

  onError(lambda: (msg: any) => void): ButterCaller {
    this._onError = lambda;
    return this;
  }

  onFinished(lambda: (msg: any) => void): ButterCaller {
    this._onFinished = lambda;
    return this;
  }

  call(): ButterCaller {
    this.promise.then(
      (response) => {
        if (this._onSuccess) {
          this._onSuccess(response);
        }
      },
      (error) => {
        if (this._onError) {
          this._onError(error);
        }
      }
    ).then(() => {
      if (this._onFinished) {
        this._onFinished(null);
      }
    });
    return this;
  }
}
