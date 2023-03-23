
export const getGifs = async (category) => {

    const KEY = "rV2ohpHjje3fX91KvqH1Y8k41BLVT5ul"
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${KEY}&q=${category}&limit=10`
    const resp = await fetch(URL)
    const { data } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;

}