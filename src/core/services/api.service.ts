import axios, { AxiosRequestConfig, Method } from "axios";
import { store } from "../store";
import { onSetEnabledSpinner } from "../store/reducer/app/actions";

interface RequestHeader {
  Accept: string;
  "Content-Type": string;
  Authorization?: string;
}

export default class ApiService {
  protected apiGet<T>(
    url: string,
    params: unknown = {},
    hasToken = false
  ): Promise<T> {
    return this.apiRun<T>("get", url, null, params, hasToken);
  }

  protected apiPost<T>(
    url: string,
    body: unknown = null,
    params: unknown = {},
    hasToken = false
  ): Promise<T> {
    return this.apiRun<T>("post", url, body, params, hasToken);
  }

  protected apiPut<T>(
    url: string,
    body: unknown = null,
    params: unknown = {},
    hasToken = false
  ): Promise<T> {
    return this.apiRun<T>("put", url, body, params, hasToken);
  }

  protected apiDelete<T>(
    url: string,
    params: unknown = {},
    hasToken = false
  ): Promise<T> {
    return this.apiRun<T>("delete", url, null, params, hasToken);
  }

  private apiRun<T>(
    method: Method,
    url: string,
    body: unknown = null,
    params: unknown = {},
    hasToken = false
  ): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { API_URL, API_VERSION } = process.env;

      const config: AxiosRequestConfig = {
        url,
        method,
        baseURL: `${API_URL}/${API_VERSION}`,
        params,
        headers: this.appendHeaders(hasToken),
        timeout: 60000,
      };
      store.dispatch(onSetEnabledSpinner(true));

      if (body) {
        config.data = body;
      }

      axios(config)
        .then(({ data }) => {
          resolve(data);
        })
        .catch((error) => {
          reject(error);
        })
        .finally(() => {
          store.dispatch(onSetEnabledSpinner(false));
        });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private appendHeaders(hasToken = false): RequestHeader {
    const headers: RequestHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    if (hasToken) {
      const sessionReducer = store.getState().session;
      headers.Authorization = `Bearer ${sessionReducer.session.token}`;
    }

    return headers;
  }
}
