type AnyFunction = (...args: any[]) => any;

export function debounce(callee: AnyFunction, timeout: number): AnyFunction {

  let prevCallTimestamp = 0;

  return function(...args: any[]) {

    const now = new Date().getTime();

    if (now - prevCallTimestamp > timeout) {
      prevCallTimestamp = now;
      callee(...args);
    }
  }
}
