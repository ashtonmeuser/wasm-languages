export function args_get(): i64 {
  for (let i = 0; i < process.argv.length; i++) console.log(process.argv[i]);
  return process.argv.length;
}
