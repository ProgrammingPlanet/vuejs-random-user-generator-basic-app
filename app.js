const app = Vue.createApp({
    data() {
        return {
            user: {
                firstname: 'John',
                lastname: 'Doe',
                email: 'jd@gmail.com',
                gender: 'male',
                pic: 'https://randomuser.me/api/portraits/men/42.jpg'
            }
        }
    },
    methods: {
        async newUser() {
            const res = await fetch('https://randomuser.me/api')
            const {results} = await res.json()
            this.user = {
                firstname: results[0].name.first,
                lastname: results[0].name.last,
                email: results[0].email,
                gender: results[0].gender,
                pic: results[0].picture.large
            }
        }
    }

})

app.mount('#app')