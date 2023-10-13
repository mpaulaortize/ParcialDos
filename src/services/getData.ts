export async function getData(){
    try {
        const data = await fetch('https://catfact.ninja/fact').then(res => res.json());
        console.log(data);
        return data.results;
    } catch (error) {
        console.error(error);
    }
}