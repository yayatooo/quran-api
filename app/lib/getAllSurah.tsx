export default async function getAllSurah() {

    const res = await fetch("https://equran.id/api/v2/surat")
    if (!res.ok) throw new Error('failed to fetch')
    return res.json()
}
