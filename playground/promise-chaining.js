require('../src/db/mongoose')
const User=require('../src/models/user')

// User.findByIdAndUpdate('63c3144801db48a434535b0f',{age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const updateAgeAndCount =async (id,age)=>{
    const user=await User.findByIdAndUpdate(id,{age})
    const count=await User.countDocuments({age})
    return count
}

updateAgeAndCount('63c3144801db48a434535b0f',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})