
const run = async () => {

    try {
        
        data = await fetch("https://reqres.in/api/login",{
            method: "POST",
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    "email": "emma.wong@reqres.in",
                    "password": "superDupont"
                }
            )
        });
        newUser = await data.json();

        console.log(newUser)

    


    } catch (error) {
        console.log(error.messsage)
    }
}

run()