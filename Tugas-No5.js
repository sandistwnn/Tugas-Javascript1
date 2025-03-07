let nama = "Sandi Setiawan" 
nama = nama.split(" ") 
let results = [] 

for(let i=0; i < nama.length; i++){ 
    let initial = nama[i].split("") 
    initial = initial[0] 
    results.push(initial) 
} 
results = results.join("")
console.log(results)