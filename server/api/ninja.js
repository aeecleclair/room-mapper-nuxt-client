export default defineEventHandler(async (event) => {
  const { data } = await $fetch(
    "https://api.currencyapi.com/v3/latest?apiKey=eJdPhICJUDBt6B4e4IX6DZ4A9XosZ2JRZ8xh2v2"
  );

  return data;
});
