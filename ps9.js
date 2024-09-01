let loadscript =async (zoro) =>{
    return new Promise((resolve, reject) => {
        let script = document.createElement("script")
        script.src = zoro
        script.onload =() =>{
            resolve(zoro +"done succeed")
        }
        document.head.append(script)
    })
}

let mainy = async ()=>{
    let a = await loadscript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
    console.log(a)
}
mainy()