interface HttpResponse<T> extends Response {
  errorMessage?: string;
  data?: T;
}

export async function http<T>(request: RequestInfo): Promise<HttpResponse<T>> {
  const response: HttpResponse<T> = await fetch(request);

  try {
    response.data = await response.json();
  } catch (err: any) {
    response.errorMessage = err;
    // console.error(err);
  }

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response;
}

export async function get<T>(
  path: string,
  args: RequestInit = { method: 'get' }
): Promise<HttpResponse<T>> {
  return http<T>(new Request(path, args));
}

export async function post<T>(
  path: string,
  body: T,
  args: RequestInit = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  }
): Promise<HttpResponse<T>> {
  return http<T>(new Request(path, args));
}
