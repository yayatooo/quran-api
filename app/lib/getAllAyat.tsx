export default async function getAllAyat(ayatId:string) {

    const res = await fetch(`https://equran.id/api/v2/surat/${ayatId}`)
    if (!res.ok) throw new Error('failed to fetch')
    return res.json()
}
