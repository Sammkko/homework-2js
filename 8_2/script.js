const get2 = async () =>{
    const ress = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await ress.json();

    const result = data.map(({id,title}) => ({id,title}))
    console.log(result);
} 

get2();