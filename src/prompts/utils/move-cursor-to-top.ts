export function moveToTop():void {
    process.stdout.write('\x1B[0;0H');
  }