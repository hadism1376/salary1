let firstName=prompt("firstName")
let degree=prompt("degree")
let clock=Number(prompt("clock"))
let marriage=prompt("Are you single or married?")
let baby=prompt("Do you have baby?(yes or no?)")

if(degree==="phd" && marriage==="single"&& baby==="no" ){
    let salary=clock*150000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let single=10*(taxSalary)/100
    console.log(`single:${single}`)
    let singleSalary=taxSalary-single
    console.log(`singleSalary:${singleSalary}`)

}else if (degree==="phd" && marriage==="married" && baby==="no"){
    let salary=clock*150000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)

}

else if (degree==="phd" && marriage==="married" && baby==="yes"){
    let salary=clock*150000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
    let baby=20*(marriedSalary)/100
    console.log(`baby:${baby}`)
    let babySalary=marriedSalary+baby
    console.log(`babySalary:${babySalary}`)

}
if(degree==="master" && marriage==="single" && baby==="no"){
    let salary=clock*120000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let single=10*(taxSalary)/100
    console.log(`single:${single}`)
    let singleSalary=taxSalary-single
    console.log(`singleSalary:${singleSalary}`)

}else if (degree==="master" && marriage==="married" && baby==="no"){
    let salary=clock*120000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
}

else if (degree==="master" && marriage==="married" && baby==="yes"){
    let salary=clock*120000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
    let baby=20*(marriedSalary)/100
    console.log(`baby:${baby}`)
    let babySalary=marriedSalary+baby
    console.log(`babySalary:${babySalary}`)
}
if(degree==="bachelor" && marriage==="single" && baby==="no"){
    let salary=clock*80000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let single=10*(taxSalary)/100
    console.log(`single:${single}`)
    let singleSalary=taxSalary-single
    console.log(`singleSalary:${singleSalary}`)


}else if (degree==="bachelor" && marriage==="married" && baby==="no"){
    let salary=clock*80000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
}

else if (degree==="bachelor" && marriage==="married" && baby==="yes"){
    let salary=clock*80000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
    let baby=20*(marriedSalary)/100
    console.log(`baby:${baby}`)
    let babySalary=marriedSalary+baby
    console.log(`babySalary:${babySalary}`)
}

if(degree==="diploma" && marriage==="single" && baby==="no"){
    let salary=clock*50000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let single=10*(taxSalary)/100
    console.log(`single:${single}`)
    let singleSalary=taxSalary-single
    console.log(`singleSalary:${singleSalary}`)

}
else if (degree==="diploma" && marriage==="married" && baby==="no"){
    let salary=clock*50000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
}

else if (degree==="diploma" && marriage==="married" && baby==="yes"){
    let salary=clock*50000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`marriedSalary:${marriedSalary}`)
    let baby=20*(marriedSalary)/100
    console.log(`baby:${baby}`)
    let babySalary=marriedSalary+baby
    console.log(`babySalary:${babySalary}`)
}
else if (degree==="other" && marriage==="single" && baby==="no"){
    let salary=clock*30000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
    let single=10*(taxSalary)/100
    console.log(`single:${single}`)
    let singleSalary=taxSalary-single
    console.log(`singleSalary:${singleSalary}`)

}else if (degree==="other" && marriage==="married" && baby==="no"){
    let salary=clock*30000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
     let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`married:${marriedSalary}`)

}else if (degree==="other" && marriage==="married" && baby==="yes"){
    let salary=clock*30000
    console.log(`salary:${salary}`)
    let tax=10*(salary)/100
    console.log(`tax:${tax}`)
    let taxSalary=salary-tax
    console.log(`taxSalary:${taxSalary}`)
     let married=20*(taxSalary)/100
    console.log(`married:${married}`)
    let marriedSalary=taxSalary+married
    console.log(`married:${marriedSalary}`)
    let baby=20*(marriedSalary)/100
    console.log(`baby:${baby}`)
    let babySalary=marriedSalary+baby
    console.log(`babySalary:${babySalary}`)

}

















