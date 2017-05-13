import Bluebird from 'bluebird';

export async function main() {
  console.log('Working..');
  await Bluebird.delay(2000);
  console.log('Done.');
}
