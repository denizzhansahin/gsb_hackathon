import HomeAI from "./HumaAI";

async function fetchSayfaBilgi() {
  // Fetch initial data here if needed
  const sayfa_bilgi = 'Initial data from server';
  return sayfa_bilgi;
}

export default async function Page() {
  const sayfa_bilgi = await fetchSayfaBilgi();

  return <HomeAI sayfa_bilgi={sayfa_bilgi} />;
}