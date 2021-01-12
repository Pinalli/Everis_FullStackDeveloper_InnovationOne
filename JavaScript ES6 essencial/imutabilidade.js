const user = {
    name: 'Alberto',
    lastName: 'Rocha Pinalli'
};


function getUserWithFullName(user){
    return{
        ...user,
        fullname: `${user.name} ${user.lastName}`
    }
}
    const userWithFullName = getUserWithFullName(user);

    console.log(userWithFullName,user);